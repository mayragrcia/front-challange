//Object NewUser
var NewUser = {
    firstName: '',
    Phone: '',
    Email: '',
    Password: '',
    RepeatPassword: ''
};

//Form Validation
var btn = document.querySelector(".registerNormal");

btn.addEventListener("click", function() {

    NewUser.firstName = document.querySelector(".FName").value;
    NewUser.Phone = document.querySelector(".Phone").value;
    NewUser.Email = document.querySelector(".EmailAdd").value;
    NewUser.Password = document.querySelector(".Password").value;
    NewUser.RepeatPassword = document.querySelector(".RepeatPassword").value;

    if (ValidatePassword(NewUser.Password, NewUser.RepeatPassword)) {
        alert(
            'Your entries has been validated!' + '\n\n' +
            'Name: ' + NewUser.firstName + '\n' +
            'Phone: ' + NewUser.Phone + '\n' +
            'Mail: ' + NewUser.Email + '\n' +
            'Password: ' + NewUser.Password + '\n' +
            'Re-Password: ' + NewUser.RepeatPassword
        );
    }
});

//Phone Validation
var phone = document.querySelector(".Phone");

phone.onkeypress = function() {
    // var tel = phone.value;
    // var regex = new RegExp('^(\(11\) [9][0-9]{4}-[0-9]{4})|(\(1[2-9]\) [5-9][0-9]{3}-[0-9]{4})|(\([2-9][1-9]\) [5-9][0-9]{3}-[0-9]{4})$');
    // return regex.test(tel);
    return event.charCode >= 48 && event.charCode <= 57;
};

//Password Validation
function ValidatePassword(pss1, pss2) {
    if (pss1 != pss2) {
        alert("The Passwords doesn't match!");
        return false;
    } else {
        return true;
    }
};
