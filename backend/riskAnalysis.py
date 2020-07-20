from covidApi import findPercentChange, findPopulation, findCovidCasesPerHund
from googleApi import returnCounty, returnState, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
# import csv

def calculateRisk(c, b, avgRisk):
    if b == 0:
        risk = 0.6*c + 0.4*avgRisk
    else:
        risk = 0.4*c + 0.3*b + 0.3*avgRisk
    return risk
    
    
