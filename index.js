import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// These lines are necessary to correctly handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static('Public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Updated to ES module syntax
});

app.listen(5000, () => {
    console.log('listening on port 5000');
});

