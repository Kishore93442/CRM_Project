function handleSubmit(event) {
    event.preventDefault();

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const pass = document.getElementById("pass").value
    const cpass = document.getElementById("cpass").value
    const sel = document.getElementById("sel").value

    let gender = ""
    if (document.getElementById("male").checked) {
        gender = "male"
    }
    else if (document.getElementById("female").checked) {
        gender = "female"
    }

    const age = document.getElementById("num").value

    if (pass != cpass) {
        alert("Password are not match")
        return;
    }
    const user = {
        Name: name,
        Email: email,
        Password: pass,
        Confirm_Password: cpass,
        Role: sel,
        Gender: gender,
        Age: age
    };
    let newuser = JSON.parse(localStorage.getItem("user") || "[]");

    let exit = newuser.some(user1 => user1.Email === email)
    if (exit) {
        alert("This email is already Registered!")
        return;
    }

    if (user.Role === "Admin" && user.Gender === "female") {
        alert("Female Admins are not allowed.");
        return;
    }

    if (user.Role === "Admin") {
        const adminexit=newuser.some(user1 => user1.Role === "Admin")
        if(adminexit){
            alert("Admin Already Exists")
            return
        }
    }

    if (user.Role === "Seller" && Number(user.Age) < 50) {
        alert("Seller is not allowed age is below 50");
        return;
    }
    newuser.push(user);
    localStorage.setItem("user", JSON.stringify(newuser))
    alert("Form data saved to localStorage!");
    window.location.href = "../Login/log.html"

}
