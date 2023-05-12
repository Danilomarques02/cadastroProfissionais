/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cadastro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomecompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "celular" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "experiencia" TEXT NOT NULL,
    "aniversario" DATETIME NOT NULL,
    "genero" TEXT NOT NULL
);
