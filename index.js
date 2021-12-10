const addBtn = document.querySelector('.addBtn');
const nameInput = document.querySelector('.nameInput');
const phoneInput = document.querySelector('.phoneInput');
const contactBoxs = document.querySelector('.contactBoxs');

addBtn.addEventListener('click', addContactFunc);

function addContactFunc() {
    const newContactBox = document.createElement('div');
    newContactBox.classList.add('contactBox');

    const newContactInner =
        `<span class="contactName">${nameInput.value}</span>
    <span class="contactPhone px-5 ml-5">${phoneInput.value}</span>
    <div class="iconBox">
        <i class='far fa-edit' style='color: #6D28D9;'></i>
        <i class='fas fa-trash-alt' style='color: #6D28D9;'></i>
    </div>`;

    newContactBox.innerHTML = newContactInner;
    contactBoxs.appendChild(newContactBox);

    saveLocalContacts();

    nameInput.value = "";
    phoneInput.value = "";
}

contactBoxs.addEventListener('click', editAndTrash);

function editAndTrash(e) {
    targetBox = e.target;
    const grandParent = targetBox.parentElement.parentElement;
    targetClassList = [...targetBox.classList];
    if (targetClassList[0] === 'fas') {
        grandParent.remove();
    } else {
        editPopUp(grandParent);
    }
}

function editPopUp(contactDiv) {
    console.log(contactDiv);
    let contactChild = contactDiv.children;
    console.log(contactChild);
    console.log(contactChild[0]);
    console.log(contactChild[0].innerText);

    let name = prompt('Edit name :');
    let phone = prompt('Edit phone :');

    if (name) {
        contactChild[0].innerText = "";
        contactChild[0].innerText = name;
    }

    if (phone) {
        contactChild[1].innerText = "";
        contactChild[1].innerText = phone;
    }
}


//localStorage

function saveLocalContacts(todo) {
    let savedConacts = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
    savedConacts.push(todo);
    localStorage.setItem('todos', JSON.stringify(savedConacts));
}