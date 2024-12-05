import database from '../database/connection';
import { IInventoryEntryRepository } from '../../domain/interfaces/IInventoryEntryRepository';
import { InventoryEntryDto } from '../../application/dtos/InventoryEntryDto';
import { InventoryEntry } from '../../domain/entities/InventoryEntry';

export class InventoryEntryRepository implements IInventoryEntryRepository {

    async updateInventoryEntry(idEntry: number, quantity: number): Promise<void> {
        const query = 'UPDATE inventory.inventoryEntries SET quantity=? WHERE idEntry=?;';
        const datos = [quantity, idEntry];
        await  database.execute(query, datos);
    }

    async getInventoryEntriesByProduct(idProduct: number): Promise<InventoryEntry[]> {
        const [rows] = await database.query('SELECT * FROM inventoryEntries WHERE idProduct = ? AND quantity > 0;', [idProduct]);
        return rows as InventoryEntry[];
    }

    async getInventoryEntries(): Promise<InventoryEntryDto[]> {
        const [rows] = await database.query('SELECT e.idEntry, e.idProduct, p.name productName, e.quantity, e.expiryDate FROM inventoryEntries e JOIN products p ON e.idProduct = p.idProduct AND e.quantity > 0;');
        return rows as InventoryEntryDto[];
    }

    async createInventoryEntry(idProduct: number, quantity: number, expiryDate: Date): Promise<void> {
        const query = 'INSERT INTO inventory.inventoryEntries (idProduct, quantity, expiryDate) VALUES(?, ?, ?);';
        const datos = [idProduct, quantity, expiryDate];
        await database.execute(query, datos);
    }
}
