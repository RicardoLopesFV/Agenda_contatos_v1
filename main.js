
const inputNomeUsuario = document.getElementById('nome')
const inputTelefoneUsuario = document.getElementById('telefone')
const form = document.getElementById('form')

const botaoCriarContato = document.getElementById('criar-contato')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    criarContato()
})

function criarContato() {
    const nome = inputNomeUsuario.value
    const telefone = inputTelefoneUsuario.value

    corpoTabela = document.getElementById('corpo-tabela')
    corpoTabela.innerHTML += `<tr>
                                <td><img src="images/google-contacts.png"</td>
                                <td>${nome}</td>
                                <td>${telefone}</td>
                            </tr>`
    nome = ''
    telefone = ''
}
