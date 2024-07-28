import mongoose from "mongoose";
import {dev as config} from './config.js';


/*create a .env file for connection to gb \
PORT=4000
DB_URL=mongodb+srv://your-username:Anjoom0901%40%23@your-cluster-address/your-database
*/
const dbURL = config.db.url;
console.log(`Database URL: ${dbURL}`);
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('mongoDB atlas is connected');
}).catch((error) => {
    console.log(error);
    process.exit(1);
});

