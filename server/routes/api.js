import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
        res.send('OK');
    });

router.get('/test', (req, res) => {
    console.log('req', req);
    res.send('OK');
});

export default router;


