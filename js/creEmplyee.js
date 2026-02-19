const employeeFormEle = document.getElementById("employeeForm");

const firstName = document.getElementById("firstName");
const middleName = document.getElementById("middleName");
const lastName = document.getElementById("lastName");
const maritalStatus = document.getElementById("maritalStatus");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const street = document.getElementById("street");
const city = document.getElementById("city");
const state = document.getElementById("state");
const country = document.getElementById("country");
const zip = document.getElementById("zip");

employeeFormEle.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newEmployeeData = {
        firstName: firstName.value.trim(),
        middleName: middleName.value.trim(),
        lastName: lastName.value.trim(),
        maritalStatus: maritalStatus.value.trim(),
        dob: dob.value.trim(),
        email: email.value.trim(),
        mobile: mobile.value.trim(),
        address: {
            street: street.value.trim(),
            city: city.value.trim(),
            state: state.value.trim(),
            country: country.value.trim(),
            zip: zip.value.trim(),
        }
    };

    try {
        const res = await fetch("http://localhost:3000/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployeeData)
        });

        if (!res.ok) {
            throw new Error("Failed to create employee");
        }

        await res.json();

        alert("Employee Created Successfully!");
        employeeFormEle.reset();
        window.location.href = "allEmployee.html";

    } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }
});