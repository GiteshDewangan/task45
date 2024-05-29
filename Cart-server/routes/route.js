
import express from 'express';
import {DataOrder} from '../controller/Place-order.js'


const router = express.Router();

router.post('/ok', DataOrder);

export default router;
