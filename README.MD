# CodeClan Carnival (tracker)

**_Event tracker for the Edinburgh Jazz Festival_**

### Project Brief

[JavaScript Group Project Guidelines](briefs/JavaScript%20Group%20Project%20Guidelines.md)

[Definitions](briefs/definitions.md)

### Database/API interaction

-   Access via <http://localhost:3000/api/festival>
-   [controllers/index.js](controllers/index.js): hands off requests to the festival_router

-   [controllers/festival_router.js](controllers/festival_router.js): takes API requests, and calls database methods in festival_query_helper to access/alter information
-   [db/festival_query_helper.js](db/festival_query_helper.js): talks to the mongoDB hosted locally, performs requested action, and then runs passed callback on the results
