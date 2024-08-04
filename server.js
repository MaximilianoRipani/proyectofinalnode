import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import productRoutes from './src/productRoutes.js';

const app = express();
const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//me queda xonfigurarñp
app.use(express.static(path.join(__dirname, 'public')));

// aca tendira que meter las rutas del backend
app.use('/api', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
