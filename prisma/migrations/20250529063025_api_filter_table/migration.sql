-- CreateEnum
CREATE TYPE "FilterType" AS ENUM ('BASIC', 'ADVANCED');

-- CreateTable
CREATE TABLE "ApiFilter" (
    "id" TEXT NOT NULL,
    "api_id" TEXT NOT NULL,
    "filter_type" "FilterType" NOT NULL,
    "filter_name" TEXT NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApiFilter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ApiFilter_api_id_is_active_idx" ON "ApiFilter"("api_id", "is_active");

-- CreateIndex
CREATE UNIQUE INDEX "ApiFilter_api_id_filter_name_key" ON "ApiFilter"("api_id", "filter_name");

-- AddForeignKey
ALTER TABLE "ApiFilter" ADD CONSTRAINT "ApiFilter_api_id_fkey" FOREIGN KEY ("api_id") REFERENCES "Api"("id") ON DELETE CASCADE ON UPDATE CASCADE;
