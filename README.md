hello edited the read me file

// this is a second comment

//added a new useless feature
// fixing the Dataservice.ts file
// created a new request for 2ndfix

// This is a second fix. here i have created a new conflict.

//2nd feature has been updated.and now edited.

# EmplManagerBackEnd

Simple NodeJs backend service for retrieving employees by possition.

## Setup

The project requires npm and nodeJs installed

### Build Project

1. Install typescript: `npm install -g typescript`
2. Install npx: `npm install npx`
3. Install project dependencies: `npm install`

## Launch server

1. `npx ts-node src/Server.ts`
2. Check localhost ap port [8080](http://localhost:8080/)

## Services:

| Possition     | Url                                |
| ------------- | ---------------------------------- |
| All Employees | http://localhost:8080/allemployees |
| Juniors       | http://localhost:8080/juniors      |
| Programmers   | http://localhost:8080/programmers  |
| Engineers     | http://localhost:8080/engineers    |
| Experts       | http://localhost:8080/experts      |
| Managers      | http://localhost:8080/managers     |
| Admins        | http://localhost:8080/admins       |
| Nonadmins     | http://localhost:8080/nonadmins    |
