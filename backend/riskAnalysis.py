from covidApi import findPercentChange, findPopulation, findCovidCasesPerHund
from googleApi import returnCounty, returnState, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
# import csv

def calculateRisk(pc, b, avg):
    risk = (pc*100)*0.33 + b*0.33 + avg*0.33
    return risk

location = 'RDU Airport'
county = returnCounty(getPlaceID(location))
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
cases = findCovidCasesPerHund(population, county, state)
print('cases per hundred thousand: ', cases)
busyness = returnPoptimes('Thursday', 19, location)
avgTimeRisk = avgTimeSpent(placeType)
print(calculateRisk(cases, busyness, avgTimeRisk))

# print(county)