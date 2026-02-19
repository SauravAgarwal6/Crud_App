async function getAllEmployee() {
    try {
        let resp = await fetch("https://crud-app-backend-yhm8.onrender.com/employees")
        let data = await resp.json()
        console.log(data)
    } catch (err) {
        console.log(err)
        alert("Something Went Wrong")
    }
}

window.addEventListener("DOMContentLoaded", () => {
    getAllEmployee()
})

function displayEmployees(allEmployees){
    allEmployees.map((emp) => {
        const empCard = document.createElement("article")
        empCard.innerHTML=`
        `
    })
}