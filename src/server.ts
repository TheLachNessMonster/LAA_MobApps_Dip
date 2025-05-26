import app from './app' ;
import config from './config/config';
import mongoose from 'mongoose';


//Passes an undefined string - should really use try/catch error handling
mongoose.connect(config.dbConstring);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to DB'));


app.listen(config.port, () =>{
    console.log('server running on port ' + config.port)
});