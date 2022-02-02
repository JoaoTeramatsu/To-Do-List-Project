//Função retorna todos itens armazenados do localStorage para o HTML assim que a página carrega.
function onloadTasks() {

    var keys = Object.keys(localStorage), i = keys.length;

    while (i--) {
        let taskName = localStorage.getItem(keys[i]);

        let li = document.createElement("li");  

        let liContent = document.createTextNode(taskName);
        li.appendChild(liContent);

        let lista = document.getElementById("lista");
        lista.appendChild(li);

    }
}

//Função cria Nova Tarefa na lista e no localStorage
function addTask() {
    //salva a tarefa no localStorage
    let taskName = document.getElementById('task').value;
    let newTask = taskName;
    localStorage.setItem("Tarefa " + JSON.stringify(localStorage.length + 1), newTask);

    //Cria Tarefa na Lista de Tarefas  
    let newLi = document.createElement("li");
    let liContent = document.createTextNode(taskName);
    newLi.appendChild(liContent);
    //Cria Botão para excluir tarefa
    let newButton = document.createElement("input");
    newButton.type = "button";
    newButton.value = "X";
    newButton.id  = "removeButton"
    //Função que supostamente apagaria tarefa
    newButton.onclick = function removeItem(){
        console.log("ainda não sei fazer isso");
    }
    let br = document.createElement("br");
    //Joga no HTML tudo criado até então
    let lista = document.getElementById("lista");
    lista.appendChild(newLi);
    lista.appendChild(newButton);
    lista.appendChild(br);

    console.log(localStorage)
}
//Função para apagar cache do localStorage
function clearStorage() {
    //apaga os elementos HTML criados dentro da lista 
    const lista = document.getElementById("lista")
    while (lista.firstChild) {
    lista.firstChild.remove()
}
    localStorage.clear();
    console.log(localStorage);
}
//printa localStorage quando inicia página
console.log(localStorage);

