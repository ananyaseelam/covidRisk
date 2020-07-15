from covidApi import findPercentChange,returnCounty
from googleApi import returnCounty, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
# import csv

def calculateRisk():
    location = 'Suffolk City'
    cty = returnCounty(getPlaceID(location))
    print(cty)  


location = 'Suffolk City'
cty = returnCounty(getPlaceID(location))
print(cty) 
