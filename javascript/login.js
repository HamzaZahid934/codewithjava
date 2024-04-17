window.addEventListener("load" , function () {
    let myForm = document.forms.myForm;
    let password=document.getElementById('password');
  let cpassword=document.getElementById('cpassword');
  console.log("joya");
  myForm.addEventListener('submit',function()
  {
   let x=myForm.password.value;
   let y=cpassword.value;
   if (x!=y)
   {
     alert("Password not match");
   }
})


});
