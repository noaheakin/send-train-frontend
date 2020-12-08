# SendTrain

SendTrain allows users to discover climbing areas and new routes in a visual way. By making use of Mountain Project's API, users can access thousands of climbs and their details, sorting by attributes like popularity and quality. Logged in users have access to additional functionality such as designating a crag as a 'favorite', or marking a climb as completed. The wish list feature also allows users to keep track of the climbs they have not yet done but would like to. 

## Installation

in your terminal, make a repository called `send-train` and then jump into this repository. Follow the website https://github.com/noaheakin/send-train-frontend. Fork the repository and clone this repository down to your terminal to get the frontend repository. Follow the website https://github.com/noaheakin/send-train-backend. Fork and clone this repository down to your terminal to get the backend repository. In your local backend repo, run:  

```ruby
install bundle
```

In your local frontend repo, run:

```javascript
npm install
```

## Run
To run the program, cd into your `send-train-backend` repository and run 

```ruby
rails db:seed
rails s
```
in the terminal. Then cd into your `send-train-frontend` into your terminal. From there, run:

```javascript
npm start
```

Confirm 'yes' that you would like to run SendTrain on another port since the backend is already running.

## Usage

Without an account, a user can still use the main search bar to look for climbing areas, or crags. A user can then select one of the returned crags to view the climbs in that area. A user can filter these climbs by climbing type (discipline), popularity, quality, or alphabetically by name. Clicking on a particular climb gives you a large image of the climb if available, as well as a link to additional information from the Mountain Project source. 

Additionally, a user with an account can designate crags as 'favorites' by clicking on the heart icons on each crag. Doing this adds it to the 'My Crags' option on the navbar. Similarly, a user can click on the corresponding icon to mark an individual climb as completed or as an objective to be completed. The 'Wish List' and 'Climbs Log' tabs give the user access to all of the climbs they have designated in this way. 

## Contributors

Noah Eakin
