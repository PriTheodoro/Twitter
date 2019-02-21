let btnInsert = document.getElementById("btn");
btnInsert.addEventListener('click', ()=>{
    insert();
});



function insert() {
    let getText = document.getElementById("insertText").value;

    document.getElementById("insertText").value = "";
    
    let printDateHour = document.getElementById('talks');
    let newDate = document.createElement('p');

    printDateHour.insertBefore(newDate, printDateHour.firstChild);
    newDate.innerHTML = momentTime();

    let twittes = document.getElementById('talks');
    let newText = document.createElement('p');
    
    twittes.insertBefore(newText, twittes.firstChild);
    newText.innerHTML = getText
    

  
}

function momentTime(){
    let date = new Date;
    let hour = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let finalDateHour = hour +":"+ minutes;

    return finalDateHour

}
