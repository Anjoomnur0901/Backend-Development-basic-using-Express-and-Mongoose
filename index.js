import {app} from './app.js';
const PORT = 5000;


app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`);
});