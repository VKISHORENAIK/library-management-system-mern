// Add at the top of the file

import express, {Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {config} from './config';
import authController from './controllers/AuthController';
import {registerRoutes} from './routes';
mongoose.set('debug', true);
const PORT = config.server.port;

const app:Express = express();

app.use(express.json());

app.use(cors());


(async function startUP() {
    try{
        // await mongoose.connect(config.mongo.url, {w:"majority",retryWrites:true,authMechanism:"DEFAULT" });
        await mongoose.connect(config.mongo.url, {retryWrites: true,  auth: {
            username: process.env.MONGO_USERNAME, // Explicit auth
            password: process.env.MONGO_PASSWORD
          }
        });
        
        console.log("connection to mongodb successfuly made");
        
        registerRoutes(app);
        
        // app.post('/register', authController.handleRegister);

        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
        });


    } catch(error){
        console.log("could not make a connection to the database");
    }
})();

