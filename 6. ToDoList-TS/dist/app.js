"use strict";
//-------QuerySelector---------
const btnSubmit = document.querySelector(".todo-btn");
const inputTask = document.querySelector(".todo-input");
const formTask = document.querySelector(".todo-form");
const taskList = document.querySelector(".todo-list");
const btnDeleteAll = document.querySelector(".todo-delete-all");
//ON créé un tableau pour stocker toutes nos nouvelles tâches
const tasks = JSON.parse(localStorage.getItem("task") || "[]");
//Fonction qui sauvegarde les éléments dans le local storage
const saveTasks = () => {
    localStorage.setItem("task", JSON.stringify(tasks));
};
//Ajouter les nouvelles tâches au démarrage du DOM
window.addEventListener("DOMContentLoaded", () => {
    tasks.forEach(task => appendTask(task));
});
const handleSubmit = (e) => {
    e.preventDefault(); //Cela évite à ma page de se rafraîchir
    //Création d'un  nouvel objet newTask
    const newTask = {
        date: new Date(),
        task: inputTask.value,
        completed: false
    };
    //Sauvegarde la tâche dans le localStorage
    tasks.push(newTask);
    //Ajout de la fonction appendTask
    appendTask(newTask);
    //Sauvegarder l'envoi des tâches dans le localStorage
    saveTasks();
    //Vider l'input
    inputTask.value = "";
};
//On va gérer l'EventListener sur le form
formTask.addEventListener("submit", e => handleSubmit(e));
//Fonction d'ajout d'une nouvelle tâche
const appendTask = (newTask) => {
    const newLi = document.createElement("li");
    const checkB = document.createElement("input");
    const btnDel = document.createElement("button");
    btnDel.classList.add("todo-delete-one");
    btnDel.textContent = "Supprimer";
    checkB.type = "checkbox";
    checkB.checked = newTask.completed;
    if (checkB.checked === true) {
        newLi.style.textDecoration = "line-through";
    }
    else {
        newLi.style.textDecoration = "none";
    }
    checkB.addEventListener("change", () => {
        //console.log("Vérification");
        newTask.completed = checkB.checked;
        if (checkB.checked === true) {
            newLi.style.textDecoration = "line-through";
        }
        else {
            newLi.style.textDecoration = "none";
        }
        saveTasks();
    });
    newLi.append(newTask.task, checkB, btnDel);
    taskList.prepend(newLi);
    btnDel.addEventListener("click", () => {
        newLi.remove();
        //Ici on créé une boucle qui va supprimer une tâche dans le localStorage 
        for (let i = 0; i < tasks.length; i++) {
            //On utilise i pour un tableau, i++ ajoute +1 à chaque tour
            //si (objet.task===tâche[i].task)
            if (newTask.task === tasks[i].task) {
                //Splice va diviser le tableau
                tasks.splice(i, 1);
            }
            saveTasks();
        }
    });
};
//console.log("submit OK");
//Bouton TOUT EFFACER
const clearTasks = () => {
    //On vide la valeur du tableau
    const confirmDel = confirm("Etes-vous sûr de vouloir tout effacer ?");
    if (confirmDel === true) {
        tasks.length = 0;
        saveTasks();
        taskList.textContent = "";
    }
};
btnDeleteAll.addEventListener("click", clearTasks);
