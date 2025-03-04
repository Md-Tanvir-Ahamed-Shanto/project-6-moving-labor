/*
  Warnings:

  - You are about to drop the column `bookingDate` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `paymentStatus` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `serviceId` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `specialInstructions` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `totalPrice` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `booking` table. All the data in the column will be lost.
  - Added the required column `description` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `from` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemType` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `to` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_serviceId_fkey`;

-- DropForeignKey
ALTER TABLE `booking` DROP FOREIGN KEY `Booking_userId_fkey`;

-- DropIndex
DROP INDEX `Booking_serviceId_fkey` ON `booking`;

-- DropIndex
DROP INDEX `Booking_userId_fkey` ON `booking`;

-- AlterTable
ALTER TABLE `booking` DROP COLUMN `bookingDate`,
    DROP COLUMN `paymentStatus`,
    DROP COLUMN `serviceId`,
    DROP COLUMN `specialInstructions`,
    DROP COLUMN `status`,
    DROP COLUMN `totalPrice`,
    DROP COLUMN `userId`,
    ADD COLUMN `description` TEXT NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `from` VARCHAR(191) NOT NULL,
    ADD COLUMN `itemType` VARCHAR(191) NOT NULL,
    ADD COLUMN `phone` VARCHAR(191) NOT NULL,
    ADD COLUMN `to` VARCHAR(191) NOT NULL;
