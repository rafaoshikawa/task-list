$(document).ready(function () { //todo o conteudo do jquery é importante estar tudo aqui dentro, ele só vai carregar o Jquery se todo o document estiver pronto
  var taskForm = $("#task-form");//coletando os valores do form
  var taskList = $("#task-list");//coletando valor do ul

  taskForm.submit(function (event) {
    event.preventDefault();//funçao de retirar o reload da pagina apos o submit 

    var taskName = $("#task").val();//recupera o valor do input 

    // Adiciona uma nova tarefa à lista, mesmo se o campo estiver vazio
    taskList.append("<li>" + taskName + "</li>");

    // Limpa o campo de input
    $("#task").val("");
  });

  taskList.on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});