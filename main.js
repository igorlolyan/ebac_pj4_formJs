
//Impedir a página de atualizar
const form = document.getElementById("Formulário")

form.addEventListener("submit", function(e){
    e.preventDefault();
})



form.addEventListener("submit", function(e){
    //Pegando os valores inseridos no input
    const A = parseFloat(document.getElementById("campo-A").value)
    const B = parseFloat(document.getElementById("campo-B").value)
    
    if (typeof A === "number" && typeof B === "number"){
        if ( A > B) {
            alert("Formulário Inválido")
        }
        if (A < B){
            alert("Formulário Válido")
        }
        if (A === B){
            alert("Formulário Inválido - Números iguáis")
        }
    } else {
        alert("Digite números válidos")
    }}
)