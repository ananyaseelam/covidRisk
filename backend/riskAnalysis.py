
from covidApi import findPercentChange, findPopulation, findCovidCasesPerHund, findRiskCases
from googleApi import returnCounty, returnState, returnPlaceType, getPlaceID, returnPoptimes, avgTimeRisk, avgTimeSpent, returnPlaceGroup, returnRiskPlaceType
# import csv

def calculateRisk(c, b, avgTimeRisk, riskPlaceType): #c: covid cases risk, b: busyness, avgTimeRisk is from avgTimeSpent
    if riskPlaceType == 0:
        risk = 0.6*c + 0.4*avgTimeRisk
    elif b == 0: #if busyness is 0, aka populartimes unavailable
        risk = 0.4*c + 0.3*avgTimeRisk + 0.3*riskPlaceType
    else:
        risk = 0.4*c + 0.3*b + 0.2*avgTimeRisk + 0.1*riskPlaceType
    return risk
    
    
# location = 'Starbucks at Miami Beach'
# x = returnCounty(getPlaceID(location))
# print(x)
"""
location = 'Pentagon'
county = returnCounty(getPlaceID(location))
print(county)
state = returnState(getPlaceID(location))
placeType = returnPlaceType(location)

# with open('Average_Time_Spent_Risk.csv') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     for row in csv_reader:
#         if row[0] == placeType:
#             avgTimeRisk = float(row[3])

#perCh = findPercentChange(state, county, )
#print('perCh: ', perCh)
population =  findPopulation(county, state)
print('population: ', population)
newCases = findCovidCasesPerHund(population, county, state)
print('cases per hundred thousand: ', newCases)
casesRisk = findRiskCases(newCases)
print('cases risk value: ', casesRisk)
time = '5:30PM'
busyness = returnPoptimes('Thursday', time, location)
print('busyness:', busyness)
avgTimeRisk = avgTimeRisk(placeType)
print('average time risk: ', avgTimeRisk)
avgTimeSpent = avgTimeSpent(placeType)
print('average time spent (mins): ', avgTimeSpent)
print(calculateRisk(casesRisk, busyness, avgTimeRisk))

"""