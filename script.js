addEventListener('submit',function(){
    event.preventDefault();
    let Firstname=document.querySelector('#Firstname').value;
    let LastName=document.querySelector('#Lastname').value;
    let DateofBirth=document.querySelector('#DOB').value;
    let phonenumber=document.querySelector('#PhoneNo').value;
    let email=document.querySelector('#Email').value;
    let newpass=document.querySelector('#newPass').value;
    let confirmpass=document.querySelector('#confirm').value;
    let country=document.querySelector('#country').value;
    console.log(Firstname);
    console.log(LastName);
    console.log(Firstname);
    console.log(DateofBirth);
    console.log(phonenumber);
    console.log(email);
    console.log(newpass);
    console.log(confirmpass);
    console.log(country);
    firstname(Firstname);
    firstname(LastName);
    phonenum(phonenumber);
    passwordCheck(newpass,confirmpass)
     arr=[Firstname,LastName,DateofBirth,phonenumber,email,newpass,confirmpass,country];
     document.getElementById('demo').innerHTML=arr+"-->";
})
function firstname(Firstname){
    if(containsSpecialChars(Firstname)){
        alert("UserName Contains Special Character");
    }
}
function phonenum(phonenum){
    if(phonenum.length<10){
        alert("Phone Should be leas than 10 digit");
    }
    if(phonenum.length>10){
        alert("Phone Should be greater than 10 digit");
    }
}
function passwordCheck(newpass,confirmpass){
    if(newpass!=confirmpass){
        alert("Confirm password and new Password is Not Equal");
    }
}
function emailcheck(emai){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emai.match(mailformat)){
        
    }
    else{
        alert("Email Id is Invalid");
    }
}
function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }
