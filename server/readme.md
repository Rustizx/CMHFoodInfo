# Server Guide

## Definitions

### Rating

How well the food is on a scale from **1 to 10**.

### Average Rating

The average rating is rounded to **1 decimal point**.

### Breakfast Rating

The average rating from votes coming in around **7am-11am**.

### Lunch Rating

The average rating from votes coming in around **11am-4pm**.

### Supper Rating

The average rating from votes coming in around **4pm-10pm**.

## Authentication

We will use JWT tokens for authentication. [Learn More About This.](https://www.section.io/engineering-education/how-to-build-authentication-api-with-jwt-token-in-nodejs/)

## Verification

Some how using the WatIAm or uwaterloo email to verify that the user is a UWaterloo Student or Staff.

## API Calls

### **GET** Requests

#### _/get-todays-average_

Will return the average rating for today, as well as the amount of votes there were that day.

```json
// RESPONSE
{
  "rating": 6.7,
  "totalVotes": 242
}
```

#### _/get-todays-votes_

Will return the average rating for today.

```json
// RESPONSE
{
  "breakfast": 6.7,
  "breakfastVotes": 30,

  "lunch": 3.5,
  "lunchVotes": 56,

  "supper": 8.6,
  "supperVotes": 93
}
```

#### _/get-user_

**AUTHENTICATION REQUIRED**. Will return the logged in users infomation.

```json
// RESPONSE
{
  "firstName": "John",
  "lastName": "Smith",
  "watIAM": "jsmith",

  "email": "jsmith@uwaterloo.ca",

  "program": "Mechatronics",
  "faculty": "Engineering",
  "term": "1B",

  "residence": "CMH",
  "floor": 11
}
```

### **POST** Requests

#### _/user-login_

Will get new JWT token for user authentication.

```json
// REQUEST
{
  "email": "jsmith@uwaterloo.ca",
  "password": "password123"
}

// RESPONSE
{
  // gives frontend basic info to show who is logged in
  "firstName": "John",
  "lastName": "Smith",

  "access": "snlghiorhbiweogwiogjp24g2g5h4wwjgowge",
  "refresh": "wlejgwnglknmnsgienwnovwjevjw[ebjkv[wekbwe[224g24g"
}
```

#### _/create-user_

Will create a new user, then respond with a JWT for the user session.

```json
// REQUEST
{
  "firstName": "John",
  "lastName": "Smith",
  "watIAM": "jsmith",

  "email": "jsmith@uwaterloo.ca",
  "password": "password123",

  "program": "Mechatronics",
  "faculty": "Engineering",
  "term": "1B",

  "residence": "CMH",
  "floor": 11
}

// RESPONSE
{
  // gives frontend basic info to show who is logged in
  "firstName": "John",
  "lastName": "Smith",

  "access": "snlghiorhbiweogwiogjp24g2g5h4wwjgowge",
  "refresh": "wlejgwnglknmnsgienwnovwjevjw[ebjkv[wekbwe[224g24g"
}
```

#### _/change-user_

**AUTHENTICATION REQUIRED**. Will change the logged in users infomation.

```json
// REQUEST
{
  "firstName": "John",
  "lastName": "Smith",
  "watIAM": "jsmith",

  "email": "jsmith@uwaterloo.ca",

  "program": "Mechatronics",
  "faculty": "Engineering",
  "term": "1B",

  "residence": "CMH",
  "floor": 11
}

// RESPONSE
//   is status code (EX: 200)
```

## Database

These are all the different database types.

### Vote Type

Will be used in a votes table containing all votes ever made.

```typescript
interface Vote {
  vote: number; // REQUIRED
  date: Date; // REQUIRED
  user: User; // REQUIRED

  food: string[];
  chef: string[];
}

// Example Vote
const exampleVote: Vote = {
  vote: 8,
  date: Date.now(),
  user: exampleUser,

  food: ["chicken", "mac&cheese"],
  chef: ["James"],
};
```

### User Type

Will be used in a votes table containing all users.

```typescript
interface User {
  firstName: string; // REQUIRED
  lastName: string; // REQUIRED
  watIAM: string; // REQUIRED

  email: string; // REQUIRED
  password: string; // REQUIRED

  program: string;
  faculty: string;
  term: string;

  residence: string;
  floor: number;
}

// Example User
const exampleUser: User = {
  firstName: "John",
  lastName: "Smith",
  watIAM: "jsmith",

  email: "jsmith@uwaterloo.ca",
  password: "$2y$10$MQU3vDgoN10.JxyJ1m9UQOEqFy.Jg3D8tmHdZUAAkcpGFRwkbbLfi",

  program: "Mechatronics",
  faculty: "Engineering",
  term: "1B",

  residence: "CMH",
  floor: 11,
};
```
