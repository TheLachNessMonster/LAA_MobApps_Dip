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