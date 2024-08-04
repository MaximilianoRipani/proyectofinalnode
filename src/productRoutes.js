
// Es prueba del back end, me queda integrarlo al back

import express from 'express';

const router = express.Router();


const products = [
    { id: 1, title: 'Producto 1', price: 100 },
    { id: 2, title: 'Producto 2', price: 200 },
    { id: 3, title: 'Producto 3', price: 300 },
];

router.get('/products', (req, res) => {
    res.json(products);
});

export default router;
