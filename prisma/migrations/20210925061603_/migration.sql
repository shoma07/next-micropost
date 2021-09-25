/*
  Warnings:

  - You are about to drop the column `encrypted_password` on the `User` table. All the data in the column will be lost.
  - Added the required column `encryptedPassword` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `encrypted_password`,
    ADD COLUMN `encryptedPassword` VARCHAR(191) NOT NULL;
