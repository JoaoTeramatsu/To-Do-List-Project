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
    let newTask = taskName
    localStorage.setItem("Tarefa " + JSON.stringify(localStorage.length + 1), newTask)

    //Cria Tarefa na Lista de Tarefas  
    var newLi = document.createElement("li");
    var liContent = document.createTextNode(taskName);
    newLi.appendChild(liContent);
    let lista = document.getElementById("lista");
    lista.appendChild(newLi);

    console.log(localStorage)
}
//Função para apagar cache do localStorage
function clearStorage() {
    localStorage.clear();
    console.log(localStorage);
}
//printa localStorage quando inicia página
console.log(localStorage);