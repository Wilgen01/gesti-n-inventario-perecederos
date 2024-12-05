import { Router } from 'express';
import { addInventoryExit } from '../controllers/InventoryExitController';

const router = Router();

router.post('/inventory-exit/add-exit', addInventoryExit);

export default router;
