/*
  Warnings:

  - You are about to drop the column `from` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `itemType` on the `booking` table. All the data in the column will be lost.
  - You are about to drop the column `to` on the `booking` table. All the data in the column will be lost.
  - Added the required column `movingFrom` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movingTo` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `movingType` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `booking` DROP COLUMN `from`,
    DROP COLUMN `itemType`,
    DROP COLUMN `to`,
    ADD COLUMN `movingFrom` VARCHAR(191) NOT NULL,
    ADD COLUMN `movingTo` VARCHAR(191) NOT NULL,
    ADD COLUMN `movingType` VARCHAR(191) NOT NULL;
