//CRIADO A PARTIR DA AULA DE 25/07/2024
const getToken = (req) =>{
const autHeader = req.headers.autorizacao
const token = autHeader.split("")[1]
return token

}

module.exports = getToken