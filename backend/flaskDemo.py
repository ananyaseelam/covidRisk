from flask import Flask
from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID
from businessApi import returnBusiness


app = Flask(__name__)

@app.route("/")
def calculateRisk():
    location = 'Subway at South Roxboro Street'
    x = returnCounty(getPlaceID(location))
    y = returnPlaceType(location)
    pc = findPercentChange(x)
    b = returnBusiness('Tuesday', 19)
    risk = (pc*100)*0.5 + b*0.5
    riskJson = {'risk': risk}
    return riskJson


if __name__ == '__main__':
    app.run(debug=True)