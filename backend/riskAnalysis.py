from covidApi import findPercentChange, findPopulation, findCovidCasesPerHund
from googleApi import returnCounty, returnState, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
# import csv

def calculateRisk(c, b, avgRisk):
    risk = 0.4*c + 0.2*b + 0.2*avgRisk
    return risk
    
    
# location = 'Starbucks at Miami Beach'
# x = returnCounty(getPlaceID(location))
# print(x)

location = 'BJs Brier Creek North Carolina'
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
casesRisk = float(findCovidCasesPerHund(population, county, state))
print('cases per hundred thousand: ', casesRisk)
busyness = returnPoptimes('Thursday', 19, location)
print('busyness:', busyness)
avgTimeRisk = avgTimeSpent(placeType)
print(calculateRisk(casesRisk, busyness, avgTimeRisk))

