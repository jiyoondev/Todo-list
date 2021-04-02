let input = prompt("what would tou like to do?");
const todos = ["collect eggs", "clean litter box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***********");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("***********");
  } else if (input === "new") {
    const newTodo = prompt("what is the new todo");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("enter the index"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`ok, deleted ${deleted[0]}`);
    } else {
      console.log("unknown index");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("ok.quit the app");
