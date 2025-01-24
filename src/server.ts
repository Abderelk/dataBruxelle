import express from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import fetchData from './services/apiFetcher';
import insertTreeData from './services/dbSeeder';


dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware JSON
app.use(express.json());

// Exemple de route
app.get('/', (req, res) => {
    res.send('Hello, Bruxelles!');
});

app.get('/fetch-trees', async (req, res) => {
    try {
        const url = 'https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bruxelles_arbres_remarquables/records?limit=20';
        const data = await fetchData(url);
        res.json(data); // Renvoie les données récupérées
    } catch (error) {
        res.status(500).json({ message: 'Error fetching data' });
    }
});

app.get('/fetch-and-store-trees', async (req, res) => {
    try {
        const url = 'https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/bruxelles_arbres_remarquables/records?limit=20';
        const data = await fetchData(url);
        await insertTreeData(data);
        res.status(200).send('Data inserted successfully');
    } catch (error) {
        res.status(500).json({ message: 'Error fetching or storing data' });
    }
});
// Connexion à la base de données
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
