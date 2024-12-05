export interface InventoryEntryDto {
    idEntry: number;
    idProduct: number;
    productName: string;
    quantity: number;
    expiryDate: Date;
    status: 'vigente' | 'por vencer' | 'vencido';
}

