import dotenv from 'dotenv';
dotenv.config({ path: './env' });

import { DB_NAME } from "./db/constants.js";
import connectDB from './db/index.js';
import { app } from '../app.js'; // Adjust path if app.js is not in root

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server running on port ${process.env.PORT || 8000}`);
        });
    })
    .catch((err) => {
        console.log("MONGODB CONNECTION FAILED !!!", err);
    });
