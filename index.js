const $nomeinput=document.querySelector("#nomecompleto")
const $cpfinput=document.querySelector("#cpf")
const $profissaoinput=document.querySelector("#profissao")
const $celularinput=document.querySelector("#number")
const $enderencoinput=document.querySelector("#enderenco")
const $experienciainput=document.querySelector("#experiencia")
const $datainput=document.querySelector("#data_nascimento")
const $sexoinput=document.querySelector("#sexo")


const $submitinput=document.querySelector("#submit")

$submitinput.addEventListener("click", function(e){
    e.preventDefault()
    const dados={
        nomecompleto: $nomeinput.value,
        cpf: $cpfinput.value,
        profissao: $profissaoinput.value,
        celular: parseInt($celularinput.value),
        endereco: $enderencoinput.value,
        experiencia: $experienciainput.value,
        aniversario: $datainput.value,
        genero: $sexoinput.value,
    }

  axios.post("http://localhost:3000/create",{
        nomecompleto: dados.nomecompleto,
        cpf: dados.cpf,
        profissao: dados.profissao,
        celular: dados.celular,
        endereco: dados.endereco,
        experiencia: dados.experiencia,
        aniversario: dados.aniversario,
        genero: dados.genero,
  }).then((res)=>{
    console.log(res.status)
  })

    
})









