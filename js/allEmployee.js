const tableBody = document.getElementById("employeeTableBody");

async function getEmployees() {
    try {
        const res = await fetch("http://localhost:3000/employees");

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        tableBody.innerHTML = "";

        data.forEach(emp => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${emp.id}</td>
                <td>${emp.firstName} ${emp.lastName}</td>
                <td>${emp.email}</td>
                <td>${emp.mobile}</td>
                <td>${emp.city}</td>
                <td>
                    <button class="edit-btn" data-id="${emp.id}">Edit</button>
                    <button class="delete-btn" data-id="${emp.id}">Delete</button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {
        console.error(error);
        alert("Something went wrong while fetching employees.");
    }
}

tableBody.addEventListener("click", async (e) => {

    // DELETE EMPLOYEE
    if (e.target.classList.contains("delete-btn")) {
        const id = e.target.dataset.id;

        const confirmDelete = confirm("Are you sure you want to delete this employee?");
        if (!confirmDelete) return;

        try {
            const res = await fetch(`http://localhost:3000/employees/${id}`, {
                method: "DELETE"
            });

            if (!res.ok) {
                throw new Error("Delete failed");
            }

            e.target.closest("tr").remove();

        } catch (error) {
            console.error(error);
            alert("Failed to delete employee.");
        }
    }

    // EDIT EMPLOYEE
    if (e.target.classList.contains("edit-btn")) {
        const id = e.target.dataset.id;
        window.location.href = `editEmployee.html?id=${id}`;
    }
});

window.addEventListener("DOMContentLoaded", () => {
    getEmployees();
});