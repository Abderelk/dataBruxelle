import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
    res.send('Hello, Bruxelles!');
});

// Connexion à la base de données
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
