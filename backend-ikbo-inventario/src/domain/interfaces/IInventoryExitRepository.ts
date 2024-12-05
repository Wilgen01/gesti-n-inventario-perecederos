
export interface IInventoryExitRepository {
    createInventoryExit(idProduct: number, quantity: number, date: Date): Promise<void>;
}