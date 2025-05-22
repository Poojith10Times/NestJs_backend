/*
  Warnings:

  - You are about to drop the column `ip` on the `ApiUsageLog` table. All the data in the column will be lost.
  - The `api_response_time` column on the `ApiUsageLog` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[api_name]` on the table `Api` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[token]` on the table `ApiToken` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id,api_id]` on the table `UserApiAccess` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ip_address` to the `ApiUsageLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Api" ALTER COLUMN "default_daily_limit" SET DEFAULT 100;

-- AlterTable
ALTER TABLE "ApiUsageLog" DROP COLUMN "ip",
ADD COLUMN     "ip_address" TEXT NOT NULL,
DROP COLUMN "api_response_time",
ADD COLUMN     "api_response_time" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Api_api_name_key" ON "Api"("api_name");

-- CreateIndex
CREATE INDEX "Api_is_active_idx" ON "Api"("is_active");

-- CreateIndex
CREATE UNIQUE INDEX "ApiToken_token_key" ON "ApiToken"("token");

-- CreateIndex
CREATE INDEX "ApiToken_user_id_idx" ON "ApiToken"("user_id");

-- CreateIndex
CREATE INDEX "ApiUsageLog_user_id_api_id_created_at_idx" ON "ApiUsageLog"("user_id", "api_id", "created_at");

-- CreateIndex
CREATE INDEX "ApiUsageLog_created_at_idx" ON "ApiUsageLog"("created_at");

-- CreateIndex
CREATE INDEX "ApiUsageLog_user_id_api_id_status_code_idx" ON "ApiUsageLog"("user_id", "api_id", "status_code");

-- CreateIndex
CREATE INDEX "UserApiAccess_user_id_has_access_idx" ON "UserApiAccess"("user_id", "has_access");

-- CreateIndex
CREATE UNIQUE INDEX "UserApiAccess_user_id_api_id_key" ON "UserApiAccess"("user_id", "api_id");
