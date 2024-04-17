window.addEventListener("load" , function () {
    let change = document.getElementById("change");
    let backgound = document.getElementById("backgound");
    let courses=document.getElementById('Courses');
    let me = document.getElementById("me");
    let footer=document.getElementById("footer");
    let body=document.getElementById('body');
    let abody=document.getElementById('abody');
    let i=0;
    change.addEventListener("click" , function () {
      if(i==0)
      {
        backgound.style.backgroundColor="black";
        me.style.backgroundColor="black";
        courses.style.color="white";
        footer.style.color="white";
        i=1;
      }
      else {
        backgound.style.backgroundColor="#282A35";
        me.style.backgroundColor="#D9EEE1";
        courses.style.color="black";
        footer.style.color="white";
        i=0;
      }
      });
      change.addEventListener("click" , function () {
        if(i==0)
        {
          body.style.backgroundColor="black";
            footer.style.color="white";

          i=1;
        }
        else {
          body.style.backgroundColor="#D9EEE1";
          footer.style.color="white";
          i=0;
        }
        });
});
