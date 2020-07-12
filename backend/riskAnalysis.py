from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
# import csv

def calculateRisk():
    location = 'Starbucks at Miami Beach'
    x = returnCounty(getPlaceID(location))
    print(x)


calculateRisk()
