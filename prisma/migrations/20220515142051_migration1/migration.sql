-- CreateTable
CREATE TABLE `Product` (
    `Product_name` VARCHAR(50) NOT NULL,
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Description` VARCHAR(500) NULL,
    `Category` VARCHAR(50) NOT NULL,
    `Flavor` VARCHAR(50) NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,
    `Rating` DECIMAL(10, 2) NULL,
    `NumberOfRatings` INTEGER NULL,
    `In_Stock` BOOLEAN NULL,
    `Image_src` VARCHAR(2000) NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Users` (
    `Username` VARCHAR(50) NOT NULL,
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Password` VARCHAR(500) NULL,
    `Type` BOOLEAN NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
