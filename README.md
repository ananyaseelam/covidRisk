# covidRisk
Summer Hackathon Project

After the COVID-19 pandemic hit, new regulations and recommendations were constantly being released. It quickly became difficult to distinguish between safe and dangerous. While trying to evaluate the risk of going to parks and grocery stores, we realized that current maps and charts do not provide a holistic risk value that not only takes into account the number of COVID-19 cases in the area, but also how busy the location is and the type of place. So, we decided to develop an app that provides that holistic risk value to help users make the most informed decisions possible when leaving the house. 

The main function of the CovidRisk mobile application is to calculate the risk of visiting a specific location. The app gathers information on the number of new COVID-19 cases per 100 thousand people, the average time spent at the location, the busyness of the location - based on data from Google Places that accounts for day of the week and time- and the risk associated with the activity according to informed medical institutions to formulate a consolidated risk value. 

These four factors are factored into a percentage risk value. We classify risk percentages as such:

0% and 25%: Low Risk
25%-50% Medium Low Risk
50-75% Medium High Risk 
75%+: High Risk

Our app also prompts the user with additional questions based on place type. For example, if the location is a cafe, bakery, or restaurant, the user is prompted with a question about whether they plan to take out or dine in, which is factored into the risk value. In addition, if the place is a city or other type of locality, the user is not prompted with any additional questions and risk is calculated based solely on the number of new COVID-19 cases per 100 thousand residents. 
