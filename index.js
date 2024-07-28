import {app} from './app.js';
import {dev as config} from './config/config.js';

const PORT = config.app.port;
app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`);
});