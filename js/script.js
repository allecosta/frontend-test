// METHOD GET

fetch("https://gorest.co.in/public/v2/users")
    .then((data) => {
        // console.log(data);
        return data.json();
    }).then((objectData) => {
        // console.log(objectData[0].name);
        let tableData = "";
        objectData.map((values) => {
            tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.email}</td>
            <td>
                <button type="button" class="button green" onclick="fetchPut();">Editar</button>
                <button type="button" class="button red" onclick="fetchDelete();">Excluir</button>
            </td>
            </tr>`;
        });

        document.getElementById('table-body').innerHTML = tableData;
    }).catch((err) => {
        console.log(err);
    });



// // METHOD POST
function fetchPost() {
    fetch('https://gorest.co.in/public/v2/users?access-token=7e30ccd20624286382812be0ffb54616a89a208e70e3f09460a1710a6c4efec7', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            name: "test500",
            email: "test500@hostmail.com",
            gender: "female",
            status: "active"
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))

}


// METHOD PUT

function fetchPut() {
    fetch('https://gorest.co.in/public/v2/users/3705?access-token=7e30ccd20624286382812be0ffb54616a89a208e70e3f09460a1710a6c4efec7', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            name: "test700",
            email: "test700@hostmail.uk",
            gender: "male",
            status: "inactive"
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))

}


// METHOD DELETE

function fetchDelete() {
    fetch('https://gorest.co.in/public/v2/users/3705?access-token=7e30ccd20624286382812be0ffb54616a89a208e70e3f09460a1710a6c4efec7', {
        method: "DELETE"
    })
        .then(data => console.log(data))

}


// MODAL

const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('name').dataset.index = 'new'
}


// Eventos
document.getElementById('newRegister')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)



