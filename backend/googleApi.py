import googlemaps
import pprint
import time
import requests
import json #// sort, search, etc 

# the result is a Python dictionary:
API_KEY = get_api_key()

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
    county = searchString[:searchString.find(' County')]
    wordList = county.split()
    return str(wordList[-1])[1:]

#print(returnPlaceType("Fire Station Brier Creek"))