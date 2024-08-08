/*
  Warnings:

  - Added the required column `authors` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contents` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `datetime` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publisher` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `MyBook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `translators` to the `MyBook` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MyBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "isbn" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "contents" TEXT NOT NULL,
    "datetime" DATETIME NOT NULL,
    "authors" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "translators" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "rate" INTEGER,
    "note" TEXT,
    "imgs" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deledted_at" DATETIME,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "MyBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_MyBook" ("created_at", "deledted_at", "id", "imgs", "note", "rate", "updated_at", "userId") SELECT "created_at", "deledted_at", "id", "imgs", "note", "rate", "updated_at", "userId" FROM "MyBook";
DROP TABLE "MyBook";
ALTER TABLE "new_MyBook" RENAME TO "MyBook";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
