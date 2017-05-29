# CodeClan Carnival (tracker)

**_Event tracker for the Edinburgh Jazz Festival_**

### Project Brief

[JavaScript Group Project Guidelines](briefs/JavaScript%20Group%20Project%20Guidelines.md)

[Definitions](briefs/definitions.md)

### Database/API interaction

##### File description

-   [controllers/index.js](controllers/index.js): hands off requests to the festival_router

-   [controllers/festival_router.js](controllers/festival_router.js): takes API requests, and calls database methods in festival_query_helper to access/alter information
-   [db/festival_query_helper.js](db/festival_query_helper.js): talks to the mongoDB hosted locally, performs requested action, and then runs passed callback on the results

##### Usage

-   &lt;client/src/helpers/key_file.js> should be created with API keys before making remote requests. The keyfile should look like this:

```jsonString
var keyFile = {
  EFC: {
    new_key_source: "https://api.edinburghfestivalcity.com/login",
    API_key: "abcdefg123456789",
    signing_key: "abcdefgABCDEFG123456789"
  }
}

module.exports = keyFile;
```

-   Seed with `mongo < seeds.js`
-   <http://localhost:3000/api/festival/events>: `GET` to retrieve all events, `POST` to add a new event
-   <http://localhost:3000/api/festival/performances>: `GET` to retrieve all performances, `POST` to add a new performance
    dd a new performance
