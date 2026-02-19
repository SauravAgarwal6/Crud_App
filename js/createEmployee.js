const form = document.getElementById("employeeForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const employee = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        maritalStatus: document.getElementById("maritalStatus").value,
        dob: document.getElementById("dob").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        street: document.getElementById("street").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value,
        zip: document.getElementById("zip").value
    };

    fetch("https://crud-app-backend-yhm8.onrender.com/employees", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
    .then(res => res.json())
    .then(() => {
        alert("Employee Created Successfully!");
        form.reset();
        window.location.href = "allEmployee.html";
    })
    .catch(err => console.log(err));
});
