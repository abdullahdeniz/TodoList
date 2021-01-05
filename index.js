let input = document.getElementById('input');
let list = document.getElementById('list');
let errorText = document.getElementById('errorText');
let i = 1;


function filterText(text) {
    if(text) {
        if(text.legth >= 3) {
            return text;
        }else{
            errorText.innerHTML = 'Required at least three character';
            return false;
        }
    }
    errorText.innerHTML= 'Input can`t be Empthy';
    return false
}

function showList(input) {
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = date+''+time;

    list.innerHTML += `<li class="list-item" id='list${i}'>
                            <div i="list-item-wrapper">
                                <span id="listText${i}">${input}</span>
                                <p id="dateText">${dateTime}</p>
                                </div>

                                <div id="actionBtn">
                                    <i class="fas fa-edit text-warning" onclick="editList(${i})"></i>
                                    <i class=fas fa-trash text-danger" onclick=deleteList(${i})">>/i>
                                </div>
                            </div>

                        </li>`;
   i++;
}

function editList(listId) {
    let currentText = document.getElementById(`listText${listId}`);
    let editPrompt = prompt('Editing', currentText.innerHTML);

    if(editPrompt) {
        currentText.innerHTML = editPrompt;
    }else{
        errorText.innerHTML = 'Canceled Edit';
    }
}

function deleteList(listId) {
    let currentText = document.getElementById(`listText${listId}`).innerHTML;
    let deleteConfirm = confirm(`'${currentText}' is Deleting.. Sure?`);

    if(deleteConfirm){
        let deleteConfirm = document.getElementById('list'+listId);

        list.removeChild(deleteList);
        errorText.innerHTML = 'Deleted';
    }else{
        errorText.innerHTML ='Canceled Delete';
    }
} 

function addList() {
    let inputText = input.value;

    if(filterText(inputText)){
        showList(filterText(inputText));

        input.value = '';
        errorText.innerHTML = '';
    }
}
