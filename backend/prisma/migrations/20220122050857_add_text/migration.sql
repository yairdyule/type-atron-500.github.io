-- CreateTable
CREATE TABLE "Text" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Text_pkey" PRIMARY KEY ("id")
);
