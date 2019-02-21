let btnInsert = document.getElementById("btn");
btnInsert.addEventListener('click', insert);
btnInsert.addEventListener('mouseover', btnNone)


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

function btnNone (){ 
    let textNone = document.getElementById("insertText").value;
    
    if (textNone.length === 0 || textNone.length > 140){
        document.getElementById("btn").disabled = true
    } else  {
        document.getElementById("btn").disabled = false
    }
}

document.getElementById("insertText").addEventListener('keyup', counter);    

function counter(){
    let textMax = 140;
    let contText = document.getElementById("insertText").value.length;
    let reduce = textMax - contText;
    let contStyle = document.getElementById('counter');
    document.getElementById('counter').innerHTML = reduce;


    if (contText >= 120) {
        contStyle.style.color = 'orange';

    } if (contText >= 130){
        contStyle.style.color = 'red';

    } if (contText < 120){
        contStyle.style.color = 'black';
    }
}
counter();

function momentTime(){
    let date = new Date;
    let hour = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let finalDateHour = hour +":"+ minutes;

    return finalDateHour
}

document.getElementById("insertText").addEventListener('keydown', textSize)

function textSize (){
    let messageArea = document.getElementById("insertText");
    messageArea.style.height = 'auto';
    messageArea.style.height = messageArea.scrollHeight + 'px';
}

