let form=document.querySelector(".form");
let error=document.querySelector(".dname");
let dgenderr=document.querySelector(".dgender");
let demail=document.querySelector(".demail");
let daddress=document.querySelector(".daddress");
let ddob=document.querySelector(".ddob");
let dcollege=document.querySelector(".dcollege");
let dcourse=document.querySelector(".dcourse");
let dpasswordr=document.querySelector(".dpassword");
let dp=document.querySelector(".submit");
form.addEventListener("submit",function(event) {
    event.preventDefault(); 
    let name=document.querySelector(".name").value;
    if(name===""){
    }else{
        dname.innertext=`name:${name}`;
    }
    const gender = form.querySelectorAll(".gender").value;
    dgender.innertext=`gender:${gender}`;
    const address = form.querySelectorAll(".address").value;
    daddress.innertext=`address:${address}`;
    const dob= form.querySelectorAll(".dob").value;
    ddob.innertext=`date of birth:${dob}`;
    const email= form.querySelectorAll(".email").value;
    demail.innertext=`email:${email}`;
    const password= form.querySelectorAll(".password").value;
    const ex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(ex.test(password)){
    dpassword.innertext=`password:${password}`;
    }else{
        error.innertext="password should contains atleast one";
    }
    const college= form.querySelectorAll(".college").value;
    dcollege.innertext=`college:${college}`;
    const course= form.querySelectorAll(".course").value;
    dcourse.innertext=`course:${course}`;
    form.reset();

});