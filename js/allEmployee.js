const tableBody = document.getElementById("employeeTableBody");

fetch("http://localhost:3000/employees")
    .then(res => res.json())
    .then(data => {
        data.forEach(emp => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${emp.id}</td>
                <td>${emp.firstName} ${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.mobile}</td>
                <td>${emp.city}</td>
                <td>
                    <button onclick="deleteEmployee(${emp.id})">Delete</button>
                </td>
            `;

            tableBody.appendChild(row);
        });
    });

function deleteEmployee(id) {
    fetch(`http://localhost:3000/employees/${id}`, {
        method: "DELETE"
    }).then(() => location.reload());
}
