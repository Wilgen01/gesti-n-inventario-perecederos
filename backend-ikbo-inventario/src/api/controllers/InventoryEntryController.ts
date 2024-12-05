import { Request, Response } from 'express';
import { InventoryEntryRepository } from '../../infrastructure/repositories/InventoryEntryRepository';
import { AddInventoryEntry } from '../../application/usecases/inventoryEntries/AddInventoryEntry';
import { GetInventoryEntries } from '../../application/usecases/inventoryEntries/GetInventoryEntries';

const inventoryEntryRepository = new InventoryEntryRepository();
const addInventoryEntryUseCase = new AddInventoryEntry(inventoryEntryRepository);
const getInventoryEntriesUseCase = new GetInventoryEntries(inventoryEntryRepository);

export const addInventoryEntry = async (req: Request, res: Response) => {
    try {
        const { idProduct, quantity, expiryDate } = req.body;
        await addInventoryEntryUseCase.execute(idProduct, quantity, expiryDate);
        res.status(200).json({ message: 'Proceso exitoso' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const getInventoryEntries = async (req: Request, res: Response) => {
    try {
        const entries = await getInventoryEntriesUseCase.execute();
        res.status(200).json({ message: 'Proceso exitoso', data: entries });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
