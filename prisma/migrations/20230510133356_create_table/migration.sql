-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cadastro" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nomecompleto" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "profissao" TEXT NOT NULL,
    "celular" INTEGER NOT NULL,
    "endereco" TEXT NOT NULL,
    "experiencia" TEXT NOT NULL,
    "aniversario" TEXT NOT NULL,
    "genero" TEXT NOT NULL
);
INSERT INTO "new_cadastro" ("aniversario", "celular", "cpf", "endereco", "experiencia", "genero", "id", "nomecompleto", "profissao") SELECT "aniversario", "celular", "cpf", "endereco", "experiencia", "genero", "id", "nomecompleto", "profissao" FROM "cadastro";
DROP TABLE "cadastro";
ALTER TABLE "new_cadastro" RENAME TO "cadastro";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
