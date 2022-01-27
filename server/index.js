import express from 'express';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();


 
// send data json and input form by cors
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// middleware connect 2 layers
app.use('/posts', postRoutes);  

const CONNECTION_URL = 'mongodb+srv://javascript:javascript123@cluster0.fmkuu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'                 //    
const PORT = process.env.PORT || 5000; 


mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false);

