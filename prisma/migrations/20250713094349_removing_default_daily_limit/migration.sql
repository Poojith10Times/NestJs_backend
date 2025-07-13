/*
  Warnings:

  - You are about to drop the column `default_daily_limit` on the `Api` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Api" DROP COLUMN "default_daily_limit";

-- AlterTable
ALTER TABLE "UserApiAccess" ALTER COLUMN "daily_limit" SET DEFAULT 100;
