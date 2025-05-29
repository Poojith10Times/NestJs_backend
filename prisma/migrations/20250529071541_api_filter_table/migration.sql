-- CreateTable
CREATE TABLE "UserFilterAccess" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "filter_id" TEXT NOT NULL,
    "has_access" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFilterAccess_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "UserFilterAccess_user_id_has_access_idx" ON "UserFilterAccess"("user_id", "has_access");

-- CreateIndex
CREATE UNIQUE INDEX "UserFilterAccess_user_id_filter_id_key" ON "UserFilterAccess"("user_id", "filter_id");

-- AddForeignKey
ALTER TABLE "UserFilterAccess" ADD CONSTRAINT "UserFilterAccess_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserFilterAccess" ADD CONSTRAINT "UserFilterAccess_filter_id_fkey" FOREIGN KEY ("filter_id") REFERENCES "ApiFilter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
