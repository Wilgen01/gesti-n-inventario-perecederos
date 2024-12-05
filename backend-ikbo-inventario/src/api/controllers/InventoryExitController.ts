import { Request, Response } from 'express';
import { AddInventoryExit } from '../../application/usecases/inventoryExits/AddInventiryExit';
import { InventoryExitRepository } from '../../infrastructure/repositories/InventoryExitRepository';
import { InventoryEntryRepository } from '../../infrastructure/repositories/InventoryEntryRepository';

const inventoryExitRepository = new InventoryExitRepository();
const inventoryEntryRepository = new InventoryEntryRepository();
const addInventoryExitUseCase = new AddInventoryExit(inventoryExitRepository, inventoryEntryRepository);


export const addInventoryExit = async (req: Request, res: Response) => {
    try {
        const { idProduct, quantity, date } = req.body;
        await addInventoryExitUseCase.execute(idProduct, quantity, date);
        res.status(200).json({ message: 'Proceso exitoso' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
