from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType, getPlaceID, returnPoptimes, avgTimeSpent
# import csv

def calculateRisk(pc, b, avg):
    risk = (pc*100)*0.33 + b*0.33 + avg*0.33
    return risk

location = 'Starbucks Suffolk Virginia'
county = returnCounty(getPlaceID(location))

placeType = returnPlaceType(location)

# with open('Average_Time_Spent_Risk.csv') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     for row in csv_reader:
#         if row[0] == placeType:
#             avgTimeRisk = float(row[3])

perCh = findPercentChange(county)
print('perCh: ', perCh)
busyness = returnPoptimes('Thursday', 19)
avgTimeRisk = avgTimeSpent(placeType)
print(calculateRisk(perCh, busyness, avgTimeRisk))

print(county)