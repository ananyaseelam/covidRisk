import COVID19Py

def returnCounty(county):
    county = covid19.getDataByCounty(county, timelines=True)
    return county

def returnCountry(country):
    location = covid19.getLocationByCountryCode(country, timelines=True)
    return location

def main():
    covid19 = COVID19Py.COVID19(data_source="jhu")
    returnCounty("Wake")
    returnCountry("US")
