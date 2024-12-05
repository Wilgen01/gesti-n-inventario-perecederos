import { InventoryEntryDto } from "../../application/dtos/InventoryEntryDto";
import { InventoryEntry } from "../entities/InventoryEntry";

export interface IInventoryEntryRepository {
    createInventoryEntry(idProduct: number, quantity: number, expiryDate: Date): Promise<void>;
    getInventoryEntries(): Promise<InventoryEntryDto[]>;
    getInventoryEntriesByProduct(idProduct: number): Promise<InventoryEntry[]>;
    updateInventoryEntry(idEntry: number, quantity: number): Promise<void>;
}