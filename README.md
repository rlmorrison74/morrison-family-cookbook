# Morrison-family-cookbook

https://practical-hodgkin-a1e78e.netlify.app

## Project Description

The Morrison family cookbook is a site built with React and Airtable, styled with tailwind CSS, and is a simple site with full CRUD where users can submit and view recipes submitted by other users.

## Wireframes

Attached below are the wireframes for mobile and desktop layouts, as well as a component heirarchy of all of my components showing how they all link together.

![image of mobile layouts](https://media.discordapp.net/attachments/283876599626072064/888902675020779561/unknown.png?width=802&height=457)

![image of desktop layouts](https://media.discordapp.net/attachments/283876599626072064/888902884404645948/unknown.png?width=892&height=207)

## Component Heirarchy

![image of component heirarchy](https://media.discordapp.net/attachments/283876599626072064/888902965199532052/unknown.png?width=850&height=457)

## API Data sample

Airtable is showing the following data for my base:

```JavaScript

{
"records": [
{
"id": "recWl6khz1HsIQtJx",
"fields": {
"name": "Honey Chipotle Chicken Wings",
"image": "https://www.seriouseats.com/thmb/yPH7rj-ic86M9uAF8-bf4qBW33Y=/610x458/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__20100826-honey-chipotle-wings-8dd32f615bdf439296029a7068743fd6.jpg",
"time": "20 minutes",
"ingredients": "Chicken wings, sauce",
"instructions": "deep fry wings for 12-15 minutes at 400 degrees, drain, toss in sauce"
},
"createdTime": "2021-09-17T13:10:51.000Z"
},
```

## MVP/PostMVP

### MVP

- Home page that displays all recipes via get request, clickable to view recipe details
- Details page that shows all airtable data for each recipe, edit button to update recipes
- New recipe page for creating new recipes
- Nav buttons to get back to home and get to the new recipes page

### PostMVP

- Delete recipes from the feed and airtable
- Tailwind styles. Lots and lots of tailwind styles

## Project Schedule

| Date       | Deliverable                                  | Status     |
| ---------- | -------------------------------------------- | ---------- |
| Sept 16-17 | Pitches/Project approval/ Airtable Setup     | Complete   |
| Sept 18-19 | Setup Readme file/start building routes out  | Complete   |
| Sept 20-21 | Finish building all components functionality | incomplete |
| Sept 22-23 | Learn and utilize Tailwind                   | incomplete |
| Sept 24    | Finishing touches and presentations          | incomplete |

## Time Estimates

| Component | Priority | Estimated Time | Time Invested | Actual Time |
