import express from "express";
import cors from 'cors';
import productRoutes from "./api/routes/ProductRoutes";
import inventoryEntryRoutes from "./api/routes/InventoryEntryRoutes";
import inventoryExitRoutes from "./api/routes/InventoryExitRoutes";

const app = express();
app.use(express.json());
app.use(cors())

app.use("/api", productRoutes);
app.use("/api", inventoryEntryRoutes);
app.use("/api", inventoryExitRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
