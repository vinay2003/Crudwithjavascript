const form = document.getElementById('studentForm');
const studentList = document.getElementById('studentList');

form.addEventListener('submit',function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const studentClass = document.getElementById('class').value;
    const roll = document.getElementById('roll').value;

    const row = document.createElement('tr');
    row.innerHTML = `
                <td class="border px-4 py-2">${name}</td>
                <td class="border px-4 py-2">${id}</td>
                <td class="border px-4 py-2">${studentClass}</td>
                <td class="border px-4 py-2">${roll}</td>
            `;

            studentList.appendChild(row);
            form.reset();
}) ;