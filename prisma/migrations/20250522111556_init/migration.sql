/*
  Warnings:

  - Made the column `advanced_parameters` on table `Api` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Api" ALTER COLUMN "advanced_parameters" SET NOT NULL;
