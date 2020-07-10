from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID
from businessApi import returnBusiness

def calculateRisk(pc, b):
    risk = (pc*100)*0.5 + b*0.5