-- DropIndex
DROP INDEX "projects_tags_key";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "secondName" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL;
