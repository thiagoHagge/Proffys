// Procurar o botao
document.querySelector("#add-time")
// Quando clicar no botao
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    // Limpar os campos
        //Pegar os campos
        const fields = newFieldContainer.querySelectorAll('input')
        //Limpar cada campo
        fields.forEach(function(field) {
            field.value = '';
        });
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}