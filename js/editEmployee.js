document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("editEmployeeForm");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    alert("No employee ID found!");
    window.location.href = "allEmployee.html";
    return;
  }

  try {
    // 1️⃣ Fetch old employee data
    const res = await fetch(`http://localhost:3000/employees/${id}`);

    if (!res.ok) {
      throw new Error("Employee not found");
    }

    const emp = await res.json();

    // 2️⃣ Fill form with old data
    document.getElementById("firstName").value = emp.firstName || "";
    document.getElementById("middleName").value = emp.middleName || "";
    document.getElementById("lastName").value = emp.lastName || "";
    document.getElementById("maritalStatus").value = emp.maritalStatus || "";
    document.getElementById("dob").value = emp.dob || "";
    document.getElementById("email").value = emp.email || "";
    document.getElementById("mobile").value = emp.mobile || "";
    document.getElementById("street").value = emp.street || "";
    document.getElementById("city").value = emp.city || "";
    document.getElementById("state").value = emp.state || "";
    document.getElementById("country").value = emp.country || "";
    document.getElementById("zip").value = emp.zip || "";
  } catch (error) {
    console.error(error);
    alert("Failed to load employee data");
  }

  // 3️⃣ Update employee
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const updatedEmployee = {
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
      zip: document.getElementById("zip").value,
    };

    try {
      const res = await fetch(`http://localhost:3000/employees/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedEmployee),
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        throw new Error("Update failed");
      }

      console.log("Update successful");

      if (!res.ok) {
        throw new Error("Update failed");
      }

      window.location.href = "allEmployee.html";
    } catch (error) {
      console.error("ERROR:", error);
      alert("Something went wrong while updating.");
    }
  });
});
