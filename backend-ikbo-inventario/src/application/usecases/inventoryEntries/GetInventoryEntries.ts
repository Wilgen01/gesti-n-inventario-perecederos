import { InventoryEntry } from '../../../domain/entities/InventoryEntry';
import { IInventoryEntryRepository } from '../../../domain/interfaces/IInventoryEntryRepository';
import { InventoryEntryDto } from '../../dtos/InventoryEntryDto';

export class GetInventoryEntries {
    constructor(private readonly inventoryEntryRepository: IInventoryEntryRepository) { }

    async execute(): Promise<InventoryEntryDto[]> {
        const inventoryEntries = await this.inventoryEntryRepository.getInventoryEntries();

        return inventoryEntries.map(e => {
            return {
                idEntry: e.idEntry,
                idProduct: e.idProduct,
                productName: e.productName,
                quantity: e.quantity,
                expiryDate: e.expiryDate,
                status: this.getStatus(e.expiryDate)
            };
        });
    }

    private getStatus(expiryDate: Date): 'vigente' | 'por vencer' | 'vencido' {
        const today = new Date();
        const diff = (expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24);

        if (diff < 0) {
            return 'vencido';
        } else if (diff <= 3) {
            return 'por vencer';
        } else {
            return 'vigente';
        }
    }
}
