$(document).ready(function () {
  var taskForm = $("#task-form");
  var taskList = $("#task-list");

  taskForm.submit(function (event) {
    event.preventDefault();

    var taskName = $("#task").val();

    if (taskName.trim() !== "") {
      taskList.append("<li>" + taskName + "</li>");
      $("#task").val("");
    }
  });

  taskList.on("click", "li", function () {
    $(this).toggleClass("completed");
  });
});
