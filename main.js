const formTodo = document.querySelector("#todoForm");
const todoInput = document.querySelector("#newElement");
const todoList = document.querySelector("#todoList");






const arr = [];







function createTodoElement(A) {

    //making the thing
    let todoElement = {
        name : A, 
        complete : false,
    };

    //to see if the thing works
    console.log(todoElement);

    if(todoElement.name == "" || todoElement.name == " ") {
        alert("Don't submit without typing something in!");
        alert("BTW, if you try to type only spaces you'll just be making your IQ drop.");
        return;
    }
     arr.push(todoElement)


}

function manifest() {
    for(let i = 0; i < arr.length; i++) {
                //bringing the thing to html



const template =  `
        <li id="${i}"><h3>${arr[i].name}</h3></li> <button id ="${1000000 + i}">Check</button> <button id ="${2000000 + i}">Remove</button> 
    `;



    todoList.innerHTML = template;
    

    }

}

function createButtons() {

    for(let j = 0; j < arr.length; j++){

        const buttonCheck = document.getElementById(1000000 + j);

        buttonCheck.addEventListener("click", function() {
            arr[j].complete = true;
        });



        const buttonDelete = document.getElementById(2000000 + j);
      
        buttonDelete.addEventListener("click", function() {
            arr.splice(j, 1);
            console.log(arr);
            manifest();
        })

    }
}


    

//THIS SUPPOSEDLY BRINGS EVERYTHING TO THE PAGE


formTodo.addEventListener("submit", function(event) {
    event.preventDefault();
    createTodoElement(todoInput.value);
    manifest();
    window.onload = function() {
        createButtons();
    }

    console.log(arr);
})





