import googlemaps
import pprint
import time
import requests
import json #// sort, search, etc 
import populartimes

# the result is a Python dictionary:
API_KEY = 'hello'

def getPlaceID(address):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplaceblob = gmaps.find_place(address, 'textquery')
    oneplaceID = ((oneplaceblob['candidates'])[0])['place_id']
    return oneplaceID


def returnCounty(placeID):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplace = gmaps.place(str(placeID))
    countyString = (oneplace['result'])['address_components']
    county = countySearch(countyString)
    #print(json.dumps(oneplace, sort_keys=True, indent=4))
    return county

def returnPlaceType(address):
    gmaps = googlemaps.Client(key=API_KEY)
    oneplaceblob = gmaps.find_place(address, 'textquery')
    oneplaceID = ((oneplaceblob['candidates'])[0])['place_id']
    oneplace = gmaps.place(str(oneplaceID))
    placeType = (oneplace['result'])['types']
    return placeType[0]

def countySearch(searchString):
    searchString = str(searchString)
    #print(searchString)
    county = searchString[:searchString.find(' County')]
    pos = county.rindex("'")
    countyVal = county[pos+1:]
    return countyVal

def returnPoptimes(day, hour):
    dayNum = {'Monday':0, 'Tuesday':1, 'Wednesday':2, 'Thursday':3, 'Friday':4, 'Saturday':5, 'Sunday':6}
    poptimes = populartimes.get_id(API_KEY, getPlaceID('RDU'))
    dataPoint = (((poptimes['populartimes'])[dayNum[str(day)]])['data'])[int(hour)-1]
    return dataPoint

returnCounty(getPlaceID('Starbucks in Miami Beach'))