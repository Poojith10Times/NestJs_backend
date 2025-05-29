/*
  Warnings:

  - You are about to drop the column `is_public` on the `ApiFilter` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ApiFilter" DROP COLUMN "is_public",
ADD COLUMN     "is_paid" BOOLEAN NOT NULL DEFAULT false;
