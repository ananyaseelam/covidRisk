import populartimes
from googleApi import getPlaceID, API_KEY
import json

poptimes = populartimes.get_id(API_KEY, getPlaceID('Starbucks at Grace Park'))
print(json.dumps(poptimes, sort_keys=True, indent=4))