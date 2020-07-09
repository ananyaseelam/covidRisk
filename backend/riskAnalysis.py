from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID
from businessApi import returnBusiness

def calculateRisk(pc, b):
    risk = (pc*100)*0.5 + b*0.5
    return risk



location = 'Subway at South Roxboro Street'
x = returnCounty(getPlaceID(location))
y = returnPlaceType(location)
pc = findPercentChange(x)
b = returnBusiness('Tuesday', 19)
print(calculateRisk(pc, b))
