from covid19 import COVID19
import json
from datetime import date as d, datetime, timedelta

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
    date1day = str(oneDay) + 'T00:00:00Z'
    #str(oneDay)+'T00:00:00Z') not sure what to do with these values yet
    #(str(twoDay)+'T00:00:00Z'
    previous=int(getDataFromDate(returnCounty("US", str(state), str(county)), date2wk))
    now=int(getDataFromDate(returnCounty("US", str(state), str(county)), date1day))
    return float((now-previous)/previous)

covid19 = COVID19(data_source="nyt")

#print(returnCounty('US', 'North Carolina', 'Wake'))
#date = '2020-06-18T00:00:00Z'
#current = '2020-07-01T00:00:00Z'


