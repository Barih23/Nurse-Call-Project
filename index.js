import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Correctly handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from the 'public' directory (case-sensitive!)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Now correctly points to the public folder
});

app.listen(5000, () => {
    console.log('Listening on port 5000');
});


