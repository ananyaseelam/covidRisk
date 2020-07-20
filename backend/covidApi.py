from covid19 import COVID19
import json
from datetime import date as d, datetime, timedelta
import csv

def returnCounty(country, state, county):
    county = covid19.getDataByCounty(country, state, county, timelines=True)
    return county

def returnCountry(country):
    location = covid19.getLocationByCountryCode(country)
    return location

def getDataFromDate(bigString, date):
    #print(bigString)
    bigString = bigString[0]
    data = (((bigString['timelines'])['confirmed'])["timeline"])[date]
    return data

def findPercentChange(state, county):
    today = d.today()
    oneDay = today - timedelta(days=1)
    twoDay = today - timedelta(days=2)
    twoWeeks = today - timedelta(days=14)
    date2wk = str(twoWeeks) +'T00:00:00Z'
    date1day = str(twoDay) + 'T00:00:00Z'
    #str(oneDay)+'T00:00:00Z') not sure what to do with these values yet
    #(str(twoDay)+'T00:00:00Z'
    previous=int(getDataFromDate(returnCounty("US", str(state), str(county)), date2wk))
    now=int(getDataFromDate(returnCounty("US", str(state), str(county)), date1day))
    return float((now-previous)/previous)

def findPopulation(county, state):
    if county.find('city') == -1 and county.find('County') == -1:
        county = county + ' County' 
    with open('US_Counties_by_Population.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if row[1] == county:
                if row[2] == state:
                    return row[3]
        line_count+=1

def findCovidCasesPerHund(population, county, state):
    sumCases = 0
    population = float(population)
    today = d.today()
    oneDay = today - timedelta(days=1)
    twoDay = today - timedelta(days=2)
    threeDay = today - timedelta(days=3)
    fourDay = today - timedelta(days=4)
    date1day = str(oneDay) + 'T00:00:00Z'
    date2day = str(twoDay) + 'T00:00:00Z'
    date3day = str(threeDay) + 'T00:00:00Z'
    date4day = str(fourDay) + 'T00:00:00Z'
    _1dayCases=float(getDataFromDate(returnCounty("US", str(state), str(county)), date1day))
    _2dayCases=float(getDataFromDate(returnCounty("US", str(state), str(county)), date2day))
    changeCases = _1dayCases - _2dayCases
    sumCases+=changeCases
    _3dayCases=float(getDataFromDate(returnCounty("US", str(state), str(county)), date3day))
    changeCases = _2dayCases - _3dayCases
    sumCases+=changeCases
    _4dayCases=float(getDataFromDate(returnCounty("US", str(state), str(county)), date4day))
    changeCases = _3dayCases - _4dayCases
    sumCases+=changeCases
    avgChangeCases = float(sumCases/3)
    factor = 100000/population
    changeCasesPerHund = round(avgChangeCases*factor, 2)
    return changeCasesPerHund

def findRiskCases (changeCasesPerHund):
    with open('Cases_Per_HundredThousand_Scaled.csv') as csv_file:
        csv_file.readline()
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if float(row[0]) >= changeCasesPerHund:
                return float(row[1])
            line_count+=1
            if line_count == 7:
                return float(row[1])


covid19 = COVID19(data_source="nyt")

#print(returnCounty('US', 'North Carolina', 'Wake'))
#date = '2020-06-18T00:00:00Z'
#current = '2020-07-01T00:00:00Z'