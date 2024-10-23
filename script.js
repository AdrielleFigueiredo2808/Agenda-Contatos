document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    if (name && phone) {
        addContact(name, phone);
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
    }
});

function addContact(name, phone) {
    const table = document.getElementById('contactList');
    const row = document.createElement('tr');
    
    row.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
        <td>
            <i class="fas fa-edit" onclick="editContact(this)"></i>
            <i class="fas fa-trash" onclick="deleteContact(this)"></i>
        </td>
    `;
    
    table.appendChild(row);
}

function editContact(element) {
    const row = element.parentElement.parentElement;
    const name = row.children[0].textContent;
    const phone = row.children[1].textContent;
    
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    
    deleteContact(element);
}

function deleteContact(element) {
    const row = element.parentElement.parentElement;
    row.remove();
}
