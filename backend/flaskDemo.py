from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
from covidApi import findPopulation, findCovidCasesPerHund, findRiskCases
from googleApi import returnCounty, returnState, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent, avgTimeRisk, returnLL, returnPlaceGroup, returnRiskPlaceType
from riskAnalysis import calculateRisk
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
riskVal = 0.0

@app.route('/getJson/', methods=['GET', 'POST']) #allow both GET and POST requests
@cross_origin()
def get_data():
    if request.method == 'POST':
        print("**********************************I am in the flask side")
        print(request.headers)
        print(request.data)
        req_data = request.json
        print(type(req_data))
        location = req_data['location']
        day = (req_data['day']).capitalize()
        time = req_data['time']
        time = str(time)
        eatType = req_data['eatType'] 
        county = returnCounty(getPlaceID(location))
        state = returnState(getPlaceID(location))
        population =  findPopulation(county, state)
        print(population)
        busyness = returnPoptimes(day, time, location)
        placeType = returnPlaceType(location)
        transportType = False
        if eatType == 'takeout':
            transportType = True
        timespent = avgTimeSpent(placeType)
        TimeRisk = avgTimeRisk(placeType, transportType)
        newCases = findCovidCasesPerHund(population, county, state)
        casesRisk = findRiskCases(newCases)
        placeGroup = returnPlaceGroup(placeType)
        print("place group in flask is: ", placeGroup)
        riskPlaceType = returnRiskPlaceType(placeGroup, transportType)
        risk = calculateRisk(casesRisk, busyness, TimeRisk, riskPlaceType)
        placeType = placeType.title()
        latlng = returnLL(location)
        print (risk)
        risk = round(risk, 1)
        riskName = ''
        if (risk <= 25):
            riskName = "Low Risk"
        elif(risk<=50):
            riskName = "Medium Low Risk"
        elif(risk<=75):
            riskName = "Medium High Risk"
        elif(risk>75):
            riskName = "High Risk"
        printTime=0
        print(time)
        riskDict = riskDict = {'risk': risk, 'location':location, 
        'placeType':placeType, 'average_time_spent':timespent, 
        'popular_times':busyness,'new_cases':newCases, 'population':population, 
        'latitude':latlng['lat'],'longitude': latlng['lng'], 'county':county, 'riskName':riskName, 'time':time, 'printTime':printTime}
        print("risk place type: ", riskPlaceType)
        riskJson = json.dumps(riskDict)
        print(riskJson)
        return riskJson
    if request.method == 'GET':
        return 'not posted'
    

#, methods= 'POST' to submit location 
if __name__ == '__main__':
    app.run(debug=True)