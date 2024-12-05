export class InventoryEntry {
    constructor(
        public idEntry: number,
        public idProduct: number,
        public quantity: number,
        public expiryDate: Date
    ) {}
}
