/*
  Warnings:

  - The primary key for the `Properties` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `Properties` DROP PRIMARY KEY,
    MODIFY `property_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`property_id`);
