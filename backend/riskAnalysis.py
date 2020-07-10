from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID
from businessApi import returnPoptimes

def calculateRisk(pc, b):
<<<<<<< HEAD
    risk = (pc*100)*0.5 + b*0.5
=======
    risk = (pc*100)*0.5 + b*0.5
    return risk



location = 'Statue of Liberty'
county = returnCounty(getPlaceID(location))
y = returnPlaceType(location)
pc = findPercentChange(county)
b = returnPoptimes('Thursday', 19)
print(calculateRisk(pc, b))
>>>>>>> master
