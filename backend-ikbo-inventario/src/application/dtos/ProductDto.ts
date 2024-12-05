export interface ProductDto {
    idProduct: number;
    name: string;
    quantity: number;
    expiryDate: Date;
    qtyVigente: number;
    qtyVencido: number;
    qtyPorVencer: number;
}