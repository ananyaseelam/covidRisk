from flask import Flask
from flask import request
from riskAnalysis import calculateRisk
from covidApi import findPercentChange, findPopulation, findCovidCasesPerHund, findRiskCases
from googleApi import returnCounty, returnState, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
import json

app = Flask(__name__)
riskVal = 0.0
@app.route("/risk/") #GET to render homepage
def calculatetheRisk():
    location = 'RDU'
    cty = returnCounty(getPlaceID(location))
    st = returnState(getPlaceID(location))
    placeType = returnPlaceType(location)
    avg = avgTimeSpent(placeType)
    pc = findPercentChange(st, cty)
    b = returnPoptimes('Friday', 10, location)
    risk = (pc*100)*0.33 + b*0.33 + avg*0.33
    riskDict = {'risk': risk, 'location':location, 'placeType':placeType, 'average_time_spent':avg, 'percent_change':pc*100, 'popular_times':b}
    riskJson = json.dumps(riskDict)
    return riskJson

@app.route('/getJson/', methods=['GET', 'POST']) #allow both GET and POST requests
def get_data():
    if request.method == 'POST':
        print(request.data)
        req_data = request.json
        print(req_data)
        location = req_data['location']
        day = req_data['day']
        time = req_data['time']
        placeType = returnPlaceType(location)
        county = returnCounty(getPlaceID(location))
        print(county)
        state = returnState(getPlaceID(location))
        print('State: ', state)
        placeType = returnPlaceType(location)
        population =  findPopulation(county, state)
        print(population)
        busyness = returnPoptimes(day, time, location)
        avgTimeRisk = avgTimeSpent(placeType)
        newCases = findCovidCasesPerHund(population, county, state)
        casesRisk = findRiskCases(newCases)
        risk = calculateRisk(casesRisk, busyness, avgTimeRisk)
        riskDict = {'risk': risk, 'location':location, 
                    'placeType':placeType, 'average_time_spent':avgTimeRisk, 
                    'population':population, 'popular_times':busyness, 
                    'new_cases':newCases}
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