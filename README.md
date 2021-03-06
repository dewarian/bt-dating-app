# bt-dating-app 
[![Build Status](https://travis-ci.org/dewarian/bt-dating-app.svg?branch=master)](https://travis-ci.org/dewarian/bt-dating-app)
> Sort your future matches by movie genre 😉

The dating app from CMD Blok Tech. Find a match for everyone.  
Feature is about setting the preferences to see who matches your movie preferences/

![image](https://user-images.githubusercontent.com/13199349/85296979-7478d900-b4a2-11ea-8f4d-c12241e881c0.png)

[(TRAVIS) Live Version](https://bt-dating-app.herokuapp.com/)
[(Atlantic)Visit live version](http://208.117.81.227:3031/)

# Installation

To be able to run or use this project you are **required** to have MongoDB, NPM and NodeJS installed.

## Clone the repo to your machine.
```
$ git clone https://github.com/dewarian/bt-dating-app.git
```
## Install the dependencies to be able to run or develop.
```
$ npm install
```

## Create an mongodb account + Atlas
MongoDB docs have a clear step by step tutorial how to connect your MongoDB Atlas to a Node application.  
[Follow the tutorial and come back](https://docs.mongodb.com/guides/server/drivers/)

When done, add actual values to the .env file
```
MONGO_USER=YOURDBUSERNAME
MONGO_PASS=YOURDBUSERNAME
MONGO_DOMAIN=YOUR_DB_DOMAIN
```
* rename `'.env.example'` to `'.env'` and move inside it.
* Enter your database username, password and domain in `MONGO_USER`, `MONGO_PASS` and `MONGO_DOMAIN` respectively.  

<!-- screenshot db image? -->
A visual representation of the cluster within MongoDB
![mongodb db visual-2](https://user-images.githubusercontent.com/13199349/83800877-76702900-a6a8-11ea-88e1-225ff91a9243.jpg)

To read a more indepth explanation over the use of mongodb and why I use mongoDB:
[Read the wiki page about database and sessions](https://github.com/dewarian/bt-dating-app/wiki/Backend-Week-4/)

## Start the server.
>$`npm run start`

Your node application should now work, check with the terminal to make sure.  
**...and Voila, you should have a working copy of this repo.**

## Conventions

This project uses EJS templating and Google ESLinting.
For more in-depth information see [wiki](https://github.com/dewarian/bt-dating-app/wiki). 
# Static page
https://dewarian.github.io/bt-dating-app/

# To Do
- [x] continious intergration with travic CI
- [ ] link VPS to ([domain](dating.bommezijn.me))
- [x] add sessions

# License

MIT
