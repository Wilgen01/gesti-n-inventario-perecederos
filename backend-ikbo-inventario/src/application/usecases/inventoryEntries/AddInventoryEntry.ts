import { IInventoryEntryRepository } from '../../../domain/interfaces/IInventoryEntryRepository';

export class AddInventoryEntry {
    constructor(private readonly inventoryEntryRepository: IInventoryEntryRepository) { }

    async execute(idProduct: number, quantity: number, expiryDate: Date): Promise<void> {
        await this.inventoryEntryRepository.createInventoryEntry(idProduct, quantity, expiryDate);
    }
}
