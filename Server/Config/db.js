import mongoose from 'mongoose';
const PORT = process.env.PORT || 5000;

const DB_URL = 'mongodb+srv://pangnuar:tdo1hvG8IndNvfzL@javamastery.xbdfftr.mongodb.net/?retryWrites=true&w=majority'
const connectDB = async () => {
    try{
        await mongoose.connect(DB_URL)
        console.log(`Connected to mongoDB port ${PORT}`)
    } catch (error) {
        console.error(`Error connecting to mongodb`, error.message);
        process.exit(1);
     }
}
 
export default connectDB;

// const CONNECT_URL = 'mongodb+srv://pangnuar:5n96KEzM3WIDFYwZ@javamastery.xbdfftr.mongodb.net/?retryWrites=true&w=majority'
// const PORT = process.env.PORT || 5000

// const connectDB = async () =>{
//     try{
//         await mongoose.connect(CONNECT_URL)
//         console.log(`Connected to database port ${PORT}`)
//     } catch (error) {
//         console.error(`ERROR: ${error.message}`);
//         process.exit(1);
//     }
// }

// export default connectDB;