/*
  Warnings:

  - The primary key for the `Api` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ApiToken` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ApiUsageLog` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserApiAccess` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[user_id]` on the table `ApiToken` will be added. If there are existing duplicate values, this will fail.
  - Made the column `advanced_parameters` on table `Api` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ApiToken" DROP CONSTRAINT "ApiToken_user_id_fkey";

-- DropForeignKey
ALTER TABLE "ApiUsageLog" DROP CONSTRAINT "ApiUsageLog_api_id_fkey";

-- DropForeignKey
ALTER TABLE "ApiUsageLog" DROP CONSTRAINT "ApiUsageLog_user_id_fkey";

-- DropForeignKey
ALTER TABLE "UserApiAccess" DROP CONSTRAINT "UserApiAccess_api_id_fkey";

-- DropForeignKey
ALTER TABLE "UserApiAccess" DROP CONSTRAINT "UserApiAccess_user_id_fkey";

-- AlterTable
ALTER TABLE "Api" DROP CONSTRAINT "Api_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "advanced_parameters" SET NOT NULL,
ADD CONSTRAINT "Api_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Api_id_seq";

-- AlterTable
ALTER TABLE "ApiToken" DROP CONSTRAINT "ApiToken_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ApiToken_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ApiToken_id_seq";

-- AlterTable
ALTER TABLE "ApiUsageLog" DROP CONSTRAINT "ApiUsageLog_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "api_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ApiUsageLog_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ApiUsageLog_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AlterTable
ALTER TABLE "UserApiAccess" DROP CONSTRAINT "UserApiAccess_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET DATA TYPE TEXT,
ALTER COLUMN "api_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserApiAccess_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserApiAccess_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "ApiToken_user_id_key" ON "ApiToken"("user_id");

-- AddForeignKey
ALTER TABLE "ApiToken" ADD CONSTRAINT "ApiToken_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserApiAccess" ADD CONSTRAINT "UserApiAccess_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserApiAccess" ADD CONSTRAINT "UserApiAccess_api_id_fkey" FOREIGN KEY ("api_id") REFERENCES "Api"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiUsageLog" ADD CONSTRAINT "ApiUsageLog_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApiUsageLog" ADD CONSTRAINT "ApiUsageLog_api_id_fkey" FOREIGN KEY ("api_id") REFERENCES "Api"("id") ON DELETE CASCADE ON UPDATE CASCADE;
