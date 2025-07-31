// window.onload = function () {
//     const userlogin = JSON.parse(localStorage.getItem("loginuser"));
//     if (userlogin) {
//         document.getElementById("wel").innerHTML = "Welcome " + userlogin.Name
//     }
// }
window.onload = function () {
    let body = document.querySelector("#name tbody");
    let value = JSON.parse(localStorage.getItem("user") || "[]");

    const filter = value.filter(kishore => kishore.Role !== "Admin" && kishore.Role !== "Seller")
    filter.forEach(user => {
        const val = document.createElement("tr")

        val.innerHTML =
            `<td>${user.Name}</td>
        `
        body.appendChild(val);
    });
    const userlogin = JSON.parse(localStorage.getItem("loginuser"));
    if (userlogin) {
        document.getElementById("wel").innerHTML = "Welcome " + userlogin.Name
    }
}
