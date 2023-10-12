const express = require('express');

require('dotenv').config()
const mongoose = require('mongoose');
const taskRouter =require('./routes/taskRoute')
const app = express();

//Middleware
// app.use((req,res,next) => {
//     console.log("path" + req.path + "method" + req.method);
//     next();
// })


const cors = require('cors');
const corsOptions ={
  origin:'http://localhost:3000',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


// app.get("/",(req,res) => {
//     res.send("Hello World");
// })

mongoose
.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
})

// .then(() =>{
//     app.listen(process.env.PORT, () => {
//         console.log("DBconnected successfully listening to " + process.env.PORT)
//     });
// })
// .catch((error) => console.log(error));


// app.use('/tasks', taskRouter)

const db = mongoose.connection;
db.on('error', err => console.error(err));
db.once('open', () => console.log("Database Connected"));


const PORT = 8000


app.use(express.json());

app.use('/tasks' ,taskRouter );


app.listen(PORT, () => console.log("Server running on :" , PORT));
