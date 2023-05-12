import { Router } from "express";
import { prisma } from "./prisma";

export const rotas = Router()

rotas.get('/', async (req, res) => {
const cadastros = await prisma.cadastro.findMany()
res.json(cadastros)
})

rotas.post('/create', async (req, res) => { 
    const {nomecompleto,cpf,profissao,celular,endereco,experiencia,aniversario,genero} = req.body
   
    const cadastrar =await prisma.cadastro.create({
        data:{
            aniversario:aniversario,
            celular:celular,
            cpf:cpf,
            endereco:endereco,
            experiencia:experiencia,
            genero:genero,
            nomecompleto:nomecompleto,
            profissao:profissao
        }
   
    })
    res.json(cadastrar)
    

})
rotas.delete('/delete/:id', async (req, res) => {
    const {id} = req.params
    const cancelarcadastro = await prisma.cadastro.delete({
        where: {
            id:id 
        }
    })
    res.json("dado excluido!")
 })
rotas.put('/edit/:id', async (req, res) => { 
    const{id} = req.params
    const{endereco} = req.body
    const editarcadastro = await prisma.cadastro.update({
        where:{
            id: id
        },
        data:{
            endereco: endereco
        }
    })
res.json("editado!")
})


