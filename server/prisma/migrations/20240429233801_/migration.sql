/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Properties` will be added. If there are existing duplicate values, this will fail.
  - Made the column `title` on table `Properties` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Properties` MODIFY `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Properties_title_key` ON `Properties`(`title`);
