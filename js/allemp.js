async function getAllEmployee() {
    try {
        let resp = await fetch("http://localhost:3000/employees")
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