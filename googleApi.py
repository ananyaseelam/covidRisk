import googlemaps
import pprint
import time
import requests
from googleplaces import GooglePlaces, types, lang

API_KEY = 'AIzaSyDe_MeCrExJQhXSVXsXRQBXTSieaq0LwUI'

google_places = GooglePlaces(API_KEY)

# You may prefer to use the text_search API, instead.
query_result = google_places.nearby_search(
        location='1016 Chessridge Way, Morrisville, NC, 27560',
        radius=200, types=[types.TYPE_FOOD])

for place in query_result.places:
    # Returned places from a query are place summaries.
    print (place.name)
    print(place.types)
    place.get_details()
    #print (place.details)

#Text Search Instead


gmaps = googlemaps.Client(key=API_KEY)
#https://www.indjango.com/google-api-to-get-lat-long-data/
address = "1016 Chessridge Way, Morrisville, NC, 27560"

api_response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}'.format(address, API_KEY))
api_response_dict = api_response.json()
#print(api_response_dict)
if api_response_dict['status'] == 'OK':
    latitude = api_response_dict['results'][0]['geometry']['location']['lat']
    longitude = api_response_dict['results'][0]['geometry']['location']['lng']
    print ('Latitude:', latitude)
    print ('Longitude:', longitude)

loc = str(latitude) + ',' + str(longitude)
#print (loc)
places_result = gmaps.places_nearby(location=loc, radius=200,open_now=False, type='grocery')
#print (places_result)
