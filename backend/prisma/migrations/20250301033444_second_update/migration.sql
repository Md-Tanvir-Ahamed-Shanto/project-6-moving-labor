/*
  Warnings:

  - You are about to alter the column `email` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `phone` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.
  - You are about to alter the column `address` on the `contact` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Json`.

*/
-- AlterTable
ALTER TABLE `contact` MODIFY `email` JSON NOT NULL,
    MODIFY `phone` JSON NOT NULL,
    MODIFY `address` JSON NOT NULL;
