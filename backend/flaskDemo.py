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
        riskPlaceType = returnRiskPlaceType(placeGroup, transportType)
        risk = calculateRisk(casesRisk, busyness, TimeRisk, riskPlaceType)
        latlng = returnLL(location)
        print (risk)
        riskName = ''
        if (risk <= 25):
            riskName = " Low Risk "
        elif(risk<=50):
            riskName = " Medium Low Risk "
        elif(risk<=75):
            riskName = " Medium High Risk "
        elif(risk>75):
            riskName = " High Risk "
        riskDict = riskDict = {'risk': risk, 'location':location, 
        'placeType':placeType, 'average_time_spent':timespent, 
        'popular_times':busyness,'new_cases':newCases, 'population':population, 
        'latitude':latlng['lat'],'longitude': latlng['lng'], 'county':county, 'riskName':riskName}
        riskJson = json.dumps(riskDict)
        print(riskJson)
        return riskJson
    if request.method == 'GET':
        return 'not posted'

@app.route('/form-example', methods=['GET', 'POST']) #allow both GET and POST requests
def form_example():
    if request.method == 'POST':  #this block is only entered when the form is submitted
        location = request.form.get('location')
        day = request.form.get('day')
        time = request.form.get('time')
        countyID= returnCounty(getPlaceID(location))
        stateID = returnState(getPlaceID(location))
        pc = findPercentChange(stateID, countyID)
        b = returnPoptimes(str(day), int(time), location)
        placeType = returnPlaceType(location)
        avg = avgTimeSpent(placeType)
        risk = (pc*100)*0.33 + b*0.33 + avg*0.33
        pc= pc*100

        return '''<h1>The location value is: {}</h1>
                  <h1>The day is: {}</h1>
                  <h1>The time is: {}</h1>
                  <h1>% Change in Covid Cases in the past 14 days: {} %</h1>
                  <h1>The Place Type is: {}</h1>
                  <h1>This location is {} %busy at this time</h1>
                  <h1>The Average Time Spent is {} </h1>
                  <h1>The Risk is: {}</h1>
                  '''.format(location, day, time, pc, placeType, b, avg, risk)

    return '''<form method="POST">
                  Location: <input type="text" name="location"><br>
                  Day: <input type="text" name="day"><br>
                  Time: <input type="text" name="time"><br>
                  <input type="submit" value="Submit"><br>
              </form>'''
    

#, methods= 'POST' to submit location 
if __name__ == '__main__':
    app.run(debug=True)