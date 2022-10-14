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
                 <li class="list-group-item"><i class="fa fa-exclamation-triangle" style="font-size:20px"></i><p class="importanceAmount">Priority level:<span class="bg-color" style="background: ${color(res.pLevel)};">${res.pLevel}</span> </p> <button class="importance-btn">Importance</button></li>
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
    document.getElementsByClassName("importanceAmount")[index].innerHTML = "Priority level:<span class='bg-color'>" + result[index].pLevel + "</span>";
    if(result[index].pLevel <= 1){
        document.getElementsByClassName("bg-color")[index].style.backgroundColor = "green";
    }else if(result[index].pLevel <=3) {
        document.getElementsByClassName("bg-color")[index].style.backgroundColor = "yellow";
    }else {
        document.getElementsByClassName("bg-color")[index].style.backgroundColor = "red";
    }
}
}
function color(qtty){
if(qtty<=1){
    return "green";
}else if(qtty <=3){
    return "yellow";
}else{
    return "red";
}
}

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
    result.sort((a, b) => b.pLevel - a.pLevel);
    document.getElementById("taskContent").innerHTML = "";
    
    update()
    addEvent()
    numbers()
   
}

