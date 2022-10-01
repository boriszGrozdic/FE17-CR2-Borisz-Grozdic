// CHANGING COLORS

// let changingColor = document.getElementsByClassName("importanceAmount")

// printColor = () => {
//     changingColor.innerHTML= "";
//     var colors = "";
//     for (let index in result) {
//         if(result[index].pLevel <= 1){
//             colors = "bg-success";
//         }else if (result[index].pLevel <= 3){
//             colors = "bg-warning";
//         }else {
//             colors = "bg-danger"
//         }
//     }
// }


// function changingColorFun (){
//     let priorityNumber = document.getElementsByClassName("importanceAmount");
//         if (priorityNumber.innerText <=1){
//             priorityNumber.classList.add("bg-succes");
//         } else if (priorityNumber.innerText <=3){
//             priorityNumber.classList.add("bg-warning");
//         } else {
//             priorityNumber.classList.add("bg-danger");
//         }}


// Didnt manage to change color



// ADDING OBJECTS 

let result = JSON.parse(tasks);

function update(){
for (let res of result){
    document.getElementById("taskContent").innerHTML += `
    <div class="col p-2">
        <div class="card" style="width: 18rem;">
            <img src="${res.img}" class="card-img-top">
            <div class="card-body">
                 <h5 class="card-title">${res.taskName}</h5>
                <p class="card-text">${res.description}</p>
            </div>
            <ul class="list-group list-group-flush">
                 <li class="list-group-item"><i class="fa fa-exclamation-triangle" style="font-size:20px"></i><p class="importanceAmount">Priority level:${res.pLevel} </p> <button class="importance-btn">Importance</button></li>
                <li class="list-group-item">Deadline:${res.deadline}</li>
            </ul>
            <div class="card-body">
                <button type="button" class="btn btn-success">Done</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    `
}}
update();
addEvent();


// MAX TILL 10

function numbers(index){
    if(result[index].pLevel !=10){
    result[index].pLevel++;
    document.getElementsByClassName("importanceAmount")[index].innerHTML = "Priority level:" + result[index].pLevel;
}}

// ADDING NUMBERS

function addEvent(){
    let importanceBtn = document.getElementsByClassName("importance-btn");
    for(let i = 0; i<importanceBtn.length; i++){
    importanceBtn[i].addEventListener("click", function(){
        numbers(i);
    })
    
    
}}

// SORT FUNCTION

document.getElementById("sortBtn").onclick = sortByValue
function sortByValue(){
    result.sort((a, b) => a.pLevel - b.pLevel);
    document.getElementById("taskContent").innerHTML = "";
    update();
    addEvent();
}

