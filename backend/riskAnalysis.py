from covidApi import findPercentChange
from googleApi import returnCounty, returnPlaceType


location = 'Outer Banks'
x = returnCounty(location)
y = returnPlaceType(location)
pc = findPercentChange(x)

print(pc)
print(x + ' County ' + str(y))