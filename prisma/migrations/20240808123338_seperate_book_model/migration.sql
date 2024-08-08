/*
  Warnings:

  - You are about to drop the column `authors` on the `MyBook` table. All the data in the column will be lost.
  - You are about to drop the column `contents` on the `MyBook` table. All the data in the column will be lost.
  - You are about to drop the column `datetime` on the `MyBook` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `MyBook` table. All the data in the column will be lost.
  - You are about to drop the column `thumbnail` on the `MyBook` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `MyBook` table. All the data in the column will be lost.
  - You are about to drop the column `translators` on the `MyBook` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isbn" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL,
    "authors" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "translators" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deledted_at" DATETIME
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rate" INTEGER,
    "note" TEXT,
    "imgs" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deledted_at" DATETIME,
    "userId" INTEGER NOT NULL,
    "isbn" TEXT NOT NULL,
    CONSTRAINT "MyBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MyBook_isbn_fkey" FOREIGN KEY ("isbn") REFERENCES "Book" ("isbn") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MyBook" ("created_at", "deledted_at", "id", "imgs", "isbn", "note", "rate", "updated_at", "userId") SELECT "created_at", "deledted_at", "id", "imgs", "isbn", "note", "rate", "updated_at", "userId" FROM "MyBook";
DROP TABLE "MyBook";
ALTER TABLE "new_MyBook" RENAME TO "MyBook";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");
