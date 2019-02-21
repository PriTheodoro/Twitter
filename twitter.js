function insert() {
    let getText = document.getElementById("insertText").value;

    document.getElementById("insertText").value = "";

    let newList = document.createElement('p');
    let printList = document.createTextNode(getText);
    newList.appendChild(printList)
    document.body.appendChild(newList);

}