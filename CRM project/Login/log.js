function yes(event) {
    event.preventDefault();

    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value


    var newuser = JSON.parse(localStorage.getItem("user") || "[]");
    const matchuser = newuser.find(user2 => user2.Email === email && user2.Password === pass)


    if (!matchuser) {
        alert("Invalid email or password")
        return
    }
    localStorage.setItem("loginuser", JSON.stringify(matchuser));

    alert("Login sucessfull as " + matchuser.Role)

    if (matchuser.Role === "Admin") {
        window.location.href = "../Admin/admin.html"
    }
    else if (matchuser.Role === "Buyer") {
        window.location.href = "../Buyer/buyer.html"
    }
    else if (matchuser.Role === "Seller") {
        window.location.href = "../Seller/seller.html"
    }
}
