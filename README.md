# WHS MONGOOSE API
Lachlan Robertson 2025

## Summary
RESTful API structured with:
- Models: export mongoose.Schema for DB objects
- Routes: export routers for each model to mount on Express server at /<model> endpoint
using JSON serialisation.

## Dependencies
- Express: web framework
- Mongoose: MongoDB client
- dotenv: loads environment variables from local .env config file

### Ref
https://blog.logrocket.com/express-typescript-node/
https://www.youtube.com/watch?v=fgTGADljAeg
https://github.com/WebDevSimplified/Your-First-Node-REST-API/blob/master/routes/subscribers.js
https://expressjs.com/en/guide/using-middleware.html
https://medium.com/@felixpratama242/crud-using-express-js-typescript-and-mongodb-0504b2617bf1