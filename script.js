const buttons = document.querySelector("#liveToastBtn")
const listdom = document.querySelector("#list")
const taskDOM = document.querySelector("#task")
const ullidom = document.getElementsByTagName("li");
const btnDeleteAll = document.querySelector('#btnDeleteAll');



for (let i = 0; i < ullidom.length; i++) {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullidom[i].append(closeButton);
    ullidom[i].onclick = check;
}

buttons.addEventListener('click', addnewitem)

function check() {
    this.classList.toggle("checked")
}

function removeButton() {
    this.parentElement.remove();
}


function deleteAllItems() {

    if (confirm('Tümünü silmek istediğine emin misin ?')) {
        listdom.innerHTML='';
        listdom.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
                return(li);
            }
        });
    }
   
}

btnDeleteAll.addEventListener('click', deleteAllItems)

function addnewitem() {

    if (taskDOM.value == "") {
        $(".error").toast("show")
    } else {
        $(".success").toast("show");

        let liDOM = document.createElement('li')
        listdom.appendChild(liDOM);
        liDOM.innerHTML = task.value;
        taskDOM.value = "";


        liDOM.onclick = check;

        let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listdom.append(liDOM);
        inputElement.value = ("");


    }
}    
