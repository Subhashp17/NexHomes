/*
  Warnings:

  - Added the required column `isBuyer` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isSeller` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `isBuyer` BOOLEAN NOT NULL,
    ADD COLUMN `isSeller` BOOLEAN NOT NULL;
