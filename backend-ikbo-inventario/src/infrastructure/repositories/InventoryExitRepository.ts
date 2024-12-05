import database from '../database/connection';
import { IInventoryExitRepository } from '../../domain/interfaces/IInventoryExitRepository';

export class InventoryExitRepository implements IInventoryExitRepository {

    async createInventoryExit(idProduct: number, quantity: number, date: Date): Promise<void> {
         const query = 'INSERT INTO inventory.inventoryExits (idProduct, quantity, date) VALUES(?, ?, ?);';
         const datos = [idProduct, quantity, date];
         await database.execute(query, datos);
    }
}
