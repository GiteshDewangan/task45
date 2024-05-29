
import express from 'express';
import {DataOrder} from '../controller/Place-order.js'


const router = express.Router();

router.post('/orderr', DataOrder);

export default router;
