from flask import Flask
from flask import request
from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID, returnPoptimes
import json


app = Flask(__name__)

@app.route("/risk") #GET to render homepage
def calculateRisk():
    location = 'Miami Beach, Florida'
    x = returnCounty(getPlaceID(location))
    y = returnPlaceType(location)
    pc = findPercentChange(x)
    b = returnPoptimes('Friday', 10)
    risk = (pc*100)*0.5 + b*0.5
    riskDict = {'risk': risk}
    riskJson = json.dumps(riskDict)
    return riskJson


@app.route('/form-example', methods=['GET', 'POST']) #allow both GET and POST requests
def form_example():
    if request.method == 'POST':  #this block is only entered when the form is submitted
        location = request.form.get('location')
        day = request.form.get('day')
        time = request.form.get('time')
        placeid = returnCounty(getPlaceID(location))
        pc = findPercentChange(placeid)
        b = returnPoptimes(str(day), int(time))
        risk = (pc*100)*0.5 + b*0.5
        pc= pc*100

        return '''<h1>The location value is: {}</h1>
                  <h1>The day is: {}</h1>
                  <h1>The time is: {}</h1>
                  <h1>% Change in Covid Cases in the past 14 days: {} %</h1>
                  <h1>This location is {} %busy at this time</h1>
                  <h1>The Risk is: {}</h1>
                  '''.format(location, day, time, pc, b, risk)

    return '''<form method="POST">
                  Location: <input type="text" name="location"><br>
                  Day: <input type="text" name="day"><br>
                  Time: <input type="text" name="time"><br>
                  <input type="submit" value="Submit"><br>
              </form>'''
    

#, methods= 'POST' to submit location 
if __name__ == '__main__':
    app.run(debug=True)