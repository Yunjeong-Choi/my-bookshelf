-- CreateTable
CREATE TABLE "MyBook" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rate" INTEGER,
    "note" TEXT,
    "imgs" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "deledted_at" DATETIME,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "MyBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
