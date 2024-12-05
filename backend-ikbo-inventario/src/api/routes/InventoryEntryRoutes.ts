import { Router } from 'express';
import { addInventoryEntry, getInventoryEntries } from '../controllers/InventoryEntryController';

const router = Router();

router.get('/inventory-entry/get-entries', getInventoryEntries);
router.post('/inventory-entry/add-entry', addInventoryEntry);

export default router;
