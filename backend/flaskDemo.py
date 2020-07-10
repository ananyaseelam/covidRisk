from flask import Flask
from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID
from businessApi import returnPoptimes
import json

app = Flask(__name__)

@app.route("/risk") #GET to render homepage
def calculateRisk():
    location = 'Statue of Liberty'
    x = returnCounty(getPlaceID(location))
    y = returnPlaceType(location)
    pc = findPercentChange(x)
    b = returnPoptimes('Tuesday', 19)
    risk = (pc*100)*0.5 + b*0.5
    riskDict = {'risk': risk}
    riskJson = json.dumps(riskDict)
    return riskJson

@app.route("/location", methods = ['POST']) #GET to render homepage
def addLocation():
    location = {'my house': 'is cool'}
    locationjson= json.dumps(location)
    return locationjson

    

#, methods= 'POST' to submit location 
if __name__ == '__main__':
    app.run(debug=True)