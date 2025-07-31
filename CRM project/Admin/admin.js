
// window.onload = function () {
//     const userlogin = JSON.parse(localStorage.getItem("loginuser"));
//     if (userlogin) {
//         document.getElementById("wel").innerHTML = "Welcome " + userlogin.Name
//     }
// }

window.onload = function () {
    let body = document.querySelector("#tablebody tbody");
    let value = JSON.parse(localStorage.getItem("user") || "[]");

    const filter = value.filter(user => user.Role !== "Admin")
    filter.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.Name}</td>
            <td>${user.Email}</td>
            <td>${user.Role}</td>
            <td>${user.Gender}</td>
            <td>${user.Age}</td>
            `;
        body.appendChild(row);
    });
    const userlogin = JSON.parse(localStorage.getItem("loginuser"));
    if (userlogin) {
        document.getElementById("wel").innerHTML = "Welcome " + userlogin.Name
    }
}