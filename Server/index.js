import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/Posts.js'
import connectDB from './Config/db.js';

const app = express();

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Hello world")
})

connectDB();
 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit:  "30mb", extended: true })); 
app.use(cors());


// const CONNECTION_URL = 'mongodb+srv://pangnuar:<IanNdizW3tgY2U6G>@javamastery.xbdfftr.mongodb.net/JAVAMASTERY';
// const CONNECTION_URL = 'http://localhost:27017/Memories';


// mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() =>app.listen(PORT, () => console.log(`Server Running on port ${PORT}`)))
//     .catch((error) => console.log(error.message));

//     // mongoose.set('useFindAndModify', false);
// app.listen(PORT, () => {
//     console.log(`Connection on port ${PORT}`)
// })

