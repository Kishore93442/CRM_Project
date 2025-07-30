window.onload= function () {
    const userlogin=JSON.parse(localStorage.getItem("loginuser"));
    if(userlogin){
        document.getElementById("wel").innerHTML="Welcome " + userlogin.Name
    }
}