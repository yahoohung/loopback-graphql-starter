# A Loopback GraphQL starter 

This repo serves as an Loopback GraphQL starter for everyone looking to setup and running with Loopback and GraphQL server.

## Installation
```
$ git clone https://github.com/yahoohung/loopback-graphql-starter.git
$ cd loopback-graphql-starter
$ npm i
$ node .
```

You will see the following message on screen:
```
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
accessToken { ttl: 1209600,
  userId: 1,
  created: 2017-09-10T15:02:51.586Z,
  id: 'FjAFET55TBFwwNTmVXO5QrM8zlNUAu6R30wmmecnH7Yd4SSyyaaPHTYovbCd53Fv' }
 ```
 
 Copy the access token and go to (http://localhost:3000/graphiql?access_token=[access_token]) to play the new game. Also you can go to (localhost:3000/explorer) to test the Rest API.
 
 ## Create a new model
 Let's finish the task easily and quickly. I recommend to install [Loopback Cli tool](https://github.com/strongloop/loopback-cli)
 ```
$ npm install -g loopback-cli
$ lb model 
```