CREATE DATABASE IF NOT EXISTS inventory;

USE inventory;

CREATE TABLE IF NOT EXISTS `products` (
  `idProduct` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `products` (`idProduct`, `name`) VALUES 
  (1, 'Carne de res'),
  (2, 'Carne de cerdo'),
  (3, 'Pollo'),
  (4, 'Leche'),
  (5, 'Pan');

CREATE TABLE IF NOT EXISTS `inventoryEntries` (
  `idEntry` int NOT NULL AUTO_INCREMENT,
  `idProduct` int NOT NULL,
  `quantity` int NOT NULL,
  `expiryDate` date NOT NULL,
  PRIMARY KEY (`idEntry`),
  KEY `idProduct` (`idProduct`),
  CONSTRAINT `inventoryEntries_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `inventoryEntries` (`idEntry`, `idProduct`, `quantity`, `expiryDate`) VALUES
  (27, 1, 20, '2024-12-07'),
  (28, 1, 20, '2024-12-10'),
  (29, 2, 20, '2025-01-10'),
  (30, 2, 15, '2025-01-10'),
  (31, 3, 15, '2025-01-10'),
  (32, 5, 10, '2024-12-01');

CREATE TABLE IF NOT EXISTS `inventoryExits` (
  `idExit` int NOT NULL AUTO_INCREMENT,
  `idProduct` int NOT NULL,
  `quantity` int NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`idExit`),
  KEY `idProduct` (`idProduct`),
  CONSTRAINT `inventoryExits_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
