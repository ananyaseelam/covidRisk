from covid19 import COVID19

def returnCounty(country, county):
    county = covid19.getDataByCounty(country, county, timelines=True)
    return county

def returnCountry(country):
    location = covid19.getLocationByCountryCode(country)
    return location

def getDataFromDate(bigString, date):
    pos = str(bigString).find(date)
    return str(bigString)[int(pos)+24:int(pos)+28]

def findPercentChange(county):
    date = "'2020-06-18T00:00:00Z'"
    current = "'2020-07-01T00:00:00Z'"
    previous=int(getDataFromDate(returnCounty("US", str(county)), date))
    now=int(getDataFromDate(returnCounty("US", str(county)), current))
    #print(prevData + ' ' + currentData)
    return float((now-previous)/previous)
    

covid19 = COVID19(data_source="nyt")
#returnCountry("US")
#returnCounty("US", "Wake")
#changes = covid19.getLatestChanges()
#print(changes)
date = "'2020-06-18T00:00:00Z'"
current = "'2020-07-01T00:00:00Z'"

#print(previous)
#print(now)
#print(findPercentChange("Wake"))


