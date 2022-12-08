const formTodo = document.querySelector("#todoForm");
const todoInput = document.querySelector("#newElement");
const todoList = document.querySelector("#todoList");






const arr = [];







function createTodoElement(A) {

    //making the thing
    let todoElement = {
        name : A, 
        status : false,
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
    const listAdding = arr.map((todoObject, index) => (
            
        `
            <li>
                <h3>${todoObject.name}</h3>
                <button data-index ="${1000000 + index}">Check</button>
                <button data-index ="${index}">Remove</button>
            </li>   
        `
    )).join(" ");
    todoList.innerHTML = listAdding;
}

manifest();


   




//THIS SUPPOSEDLY BRINGS EVERYTHING TO THE PAGE


formTodo.addEventListener("submit", function(event) {
    event.preventDefault();
    createTodoElement(todoInput.value);
    manifest();


    


    console.log(arr);
})






    todoList.addEventListener("click", function(event) {
        if(event.target.matches("button")) {
            const index = event.target.dataset.index;
            arr.splice(index, 1);
            manifest();
            console.log(arr);
        }
        if(event.target.matches("button")) {
           const index = event.target.dataset.index;
           const harnovog = index - 1000000;
           arr[harnovog["status"]] = !arr[harnovog["status"]]; 
//i tried getting the status key from the objects in every way that i could think of... 
//i tried for more than 5 hours and no matter what, the "status" would keep being UNDEFINED...
//i'm just very frustrated, but i think i'll give up on making it work...
           manifest();
           console.log(arr);
        }
    })
