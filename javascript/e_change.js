
window.addEventListener("load" , function () {
    let abody=document.getElementById('abody');
    let my_body=document.getElementById('my_body');
      let change_me=document.getElementById('change_me');
            let backgound=document.getElementById('backgound');
    let j=0;
    change.addEventListener("click" , function () {
      if(j==0)
      {
        abody.style.backgroundColor="black";
          footer.style.color="white";
        j=1;
      }
      else {
        abody.style.backgroundColor="#8FBC8F";
        footer.style.color="white";
        j=0;
      }
      });
      change.addEventListener("click" , function () {
        if(j==0)
        {
          my_body.style.backgroundColor="black";
            footer.style.color="white";
          j=1;
        }
        else {
          my_body.style.backgroundColor="#8FBC8F";
          footer.style.color="white";
          j=0;
        }
        });
        change.addEventListener("click" , function () {
          if(j==0)
          {
            change_me.style.backgroundColor="black";
              footer.style.color="white";
          
            j=1;
          }
          else {
            change_me.style.backgroundColor="#8FBC8F";
            footer.style.color="white";

            j=0;
          }
          });
});
