/*
  Warnings:

  - Added the required column `publisher` to the `Book` table without a default value. This is not possible if the table is not empty.

*/

-- Add the column with a default value
ALTER TABLE "Book" ADD COLUMN "publisher" TEXT DEFAULT 'Unknown Publisher';

-- Update existing records so that they're not NULL
UPDATE "Book" SET "publisher" = 'Unknown Publisher' WHERE "publisher" IS NULL;

-- Alter the column to be NOT NULL
ALTER TABLE "Book" ALTER COLUMN "publisher" SET NOT NULL;
