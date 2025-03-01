/*
  Warnings:

  - Added the required column `iconUrl` to the `Feature` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `feature` ADD COLUMN `iconUrl` VARCHAR(191) NOT NULL;
