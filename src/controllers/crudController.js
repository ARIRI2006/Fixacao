function listarDados(request, response) {
    response.send('listar produtos');
}

function cadastrarDados(request, response) {
    response.send('cadastrar produtos');
}

function editarDados(request, response) {
    response.send('editar produtos');
}

function deletarDados(request, response) {
    response.send('deletar produtos');
}

module.exports = {
    listarDados,
    cadastrarDados, 
    editarDados, 
    deletarDados
}