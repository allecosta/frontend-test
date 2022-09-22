// METHOD GET

// fetch('https://gorest.co.in/public/v2/users')
//     .then(response => response.json())
//     .then(data => console.log(data));


// METHOD POST

// fetch('https://gorest.co.in/public/v2/users?access-token=7e30ccd20624286382812be0ffb54616a89a208e70e3f09460a1710a6c4efec7', {
//     method: 'POST',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//         name: "test",
//         email: "test@hostmail.com",
//         gender: "male",
//         status: "active"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))


// METHOD PUT

// fetch('https://gorest.co.in/public/v2/users/3023?access-token=7e30ccd20624286382812be0ffb54616a89a208e70e3f09460a1710a6c4efec7', {
//     method: 'PUT',
//     headers: { 'content-type': 'application/json' },
//     body: JSON.stringify({
//         name: "test88",
//         email: "test@hostmail.uk",
//         gender: "male",
//         status: "active"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))



// METHOD DELETE

fetch('https://gorest.co.in/public/v2/users/3028?access-token=7e30ccd20624286382812be0ffb54616a89a208e70e3f09460a1710a6c4efec7', {
    method: "DELETE"
})
    .then(response => response.json())
    .then(data => console.log(data))


// CRIANDO A LINHAS NA TABELA
function createLine(data) {
    line = document.createElement('tr');
    tdID = document.createElement('td');
    tdName = document.createElement('td');
    tdEmail = document.createElement('td');
    tdAction = document.createElement('td');

    tdID.innerHTML = data.id;
    tdName.innerHTML = data.name;
    tdEmail.innerHTML = data.email;
    tdAction.innerHTML = `<button type="button" class="" id="edition">Editar</button>
                            <button type="button" class="" id="deleted">Excluir</button>`;

    line.appendChild(tdID);
    line.appendChild(tdName);
    line.appendChild(tdEmail);
    line.appendChild(tdAction);

    return line;

}


// // FUNÇÃO PRINCIPAL
// function main() {
//     // const API_URL_GET = get("https://gorest.co.in/public/v2/users");
//     // let dataAPI = JSON.parse(API_URL_GET);
//     let table = document.getElementById('table');

//     dataAPI.forEach(element => {
//         let line = createLine(element);
//         table.appendChild(line);
//     });

// }

// // main();


