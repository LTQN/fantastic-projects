 // -----------------------
// Projet 4 - todo list
// -----------------------

const addTask = document.querySelector("#add-task");
const taskContainer = document.querySelector("#task-container");
const inputTask = document.querySelector("#input-task");


// event listener  pour le bouton + ( ajouter un tâche )

addTask.addEventListener("click", () =>{

    let task = document.createElement("div"); // je crée un div 
    task.classList.add("task"); // j'ajoute une classe "task" à ma div
    let li = document.createElement("li");// je crée une balise li
    li.innerText = `${inputTask.value}`; // je récupère la valeur de l'input
    task.appendChild(li) // Cela rajoute une balise li au sein de ma div 

    let checkBtn = document.createElement("button");
    checkBtn.classList.add("check-task");
    checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    task.appendChild(checkBtn);


    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-task");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    task.appendChild(deleteBtn);

    if(inputTask.value ===""){
        alert("Veuillez rentrer une tâche")
    }else{
         taskContainer.appendChild(task)
    }



   

    inputTask.value = ""; // permet de supprimer le texte de l'input apres avoir créé la task

    checkBtn.addEventListener("click",()=>{
        //ici on cible l'élément précendent, on navigue sur le parent
        //checkBtn.previousElementSibling.classList.toggle ("toggle-task");
        
        li.style.textDecoration = "line-through";
        //previousSiblings/NextSiblings/parentElement/childElement

        //li.classList.toggle("toggle-task");//le toggle implique de modifier le css

    })
    deleteBtn.addEventListener("click", ()=>{
        deleteBtn.parentElement.remove();
        icon
    })

}) 