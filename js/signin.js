function handleClick(){
    var email = document.getElementById('inputEmail').value;
    var pw = document.getElementById('inputPassword').value;
    if (email == 'admin@trans-pro.com'  &&  pw == 'admin'){
        window.location.href = 'dashboard.html';
    } else if (email == 'a@com'  &&  pw == 'a'){
        window.location.href = 'dashboard.html';
    } else {
        alert('Wrong!');
    }
}