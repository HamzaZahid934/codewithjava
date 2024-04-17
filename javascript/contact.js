window.addEventListener("load" , function () {
    let myForm = document.forms.myform;
    let phone=document.getElementById('phone');
  myForm.addEventListener('submit',function()
  {
   let x=myForm.phone.value;

   if (x.length!=11)
   {
     alert("Phone number contain 11 digits");
   }
})


});
