//? To Do list App

// let toDo = ["study to code"];
// let NEW = [];
// let userInput = prompt("What do you want to do?");
// console.log(toDo);

// if (userInput === "new") {
//   newToDo = prompt("Enter a new to do list:");
//   toDo.push(newToDo);
//   console.log(toDo);
// }

let input = prompt("what do you want to do?(q for exit)");
const toDos = ["study to code", "learning js"];
const completed = [];
while (input !== "q" && input !== "quit") {
  if (input === "list") {
    console.log("******To Do********");
    for (let i = 0; i < toDos.length; i++) {
      console.log(`${i}: ${toDos[i]}`);
    }
    console.log("******List*********");
  } else if (input === "new") {
    newTodo = prompt("okay. What is the new TO Do!");
    toDos.push(newTodo);
    console.log(`${newTodo} added to the list.`);
  } else if (input === "completed") {
    let j = parseInt(
      prompt("Good! what do you want to delete, enter the index: ")
    );
    if (!Number.isNaN(j)) {
      const deleted = toDos.splice(j, 1);
      completed.push(deleted);
      console.log(`ok you completed this task: ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  } else if (input === "show") {
    console.log("#####Completed#####");
    for (let i = 0; i < completed.length; i++) {
      console.log(`${i}: ${completed[i]}`);
    }
    console.log("########List#######");
  } else if (input === "delete") {
    let i = parseInt(
      prompt("Good! what do you want to delete, enter the index: ")
    );
    if (!Number.isNaN(i)) {
      const deleted = toDos.splice(i, 1);
      console.log(`ok deleted ${deleted[0]}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("what do you want to do?");
}
console.log("Okay You Quit the App");
