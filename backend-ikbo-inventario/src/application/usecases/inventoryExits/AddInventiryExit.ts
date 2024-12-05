import { IInventoryEntryRepository } from "../../../domain/interfaces/IInventoryEntryRepository";
import { IInventoryExitRepository } from "../../../domain/interfaces/IInventoryExitRepository";

export class AddInventoryExit {
    constructor(
        private readonly inventoryExitRepository: IInventoryExitRepository,
        private readonly inventoryEntryRepository: IInventoryEntryRepository
    ) { }

    async execute(idProduct: number, quantity: number, date: Date): Promise<void> {
        const inventoryEntries = (await this.inventoryEntryRepository.getInventoryEntriesByProduct(idProduct)).sort((a, b) => a.expiryDate.getTime() - b.expiryDate.getTime());
        const totalQuantity = inventoryEntries.reduce((acc, entry) => acc + entry.quantity, 0);

        if (totalQuantity < quantity) {
            throw new Error('No hay suficiente cantidad de productos en inventario');
        }

        let remainingQuantity = quantity;

        inventoryEntries.forEach(async entry => {
            if (remainingQuantity === 0) return;

            if (remainingQuantity >= entry.quantity) {
                remainingQuantity -= entry.quantity;
                await this.inventoryEntryRepository.updateInventoryEntry(entry.idEntry, 0);    
            }else{
                await this.inventoryEntryRepository.updateInventoryEntry(entry.idEntry, entry.quantity - remainingQuantity);
                remainingQuantity = 0;
            }
        });

        await this.inventoryExitRepository.createInventoryExit(idProduct, quantity, date);
    }
}
