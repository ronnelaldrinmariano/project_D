import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import marianoRoutes from './routes/mariano.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb"}))
app.use('/api/v1/mariano', marianoRoutes)

app.get('/', (req,res) => {
    res.status(200).json({ message: "Hello From Ronnel Mariano"})
})


app.listen(8080, () => console.log('Server has started on port 8080'));