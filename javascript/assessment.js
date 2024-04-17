window.addEventListener("load" , function () {
    let cp = document.getElementById("cp");
    let python= document.getElementById("python");
    let java = document.getElementById("java");
    let djnago= document.getElementById("djnago");
    let php = document.getElementById("php");
    let html= document.getElementById("html");
    let js = document.getElementById("js");
    let css= document.getElementById("css");
    let cs = document.getElementById("cs");
    let boot= document.getElementById("boot");
    let empty_box=document.getElementById('empty_box');
    let i = 0;
    console.log("yellow");
    cp.addEventListener("click" , function () {
          if(i == 0){
             cp.src = "images/yellow_star.png";
              i = 1;
             let h3 = document.createElement("h3");
             h3.setAttribute("id","h1")
             h3.innerHTML = "Learning C++"
             h3.style.color="white";
             let x = document.createElement("A");
              x.setAttribute("id","link")
              x.style.color="white";
              x.style.marginLeft="5%";
             let t = document.createTextNode("Learning C++");
             x.setAttribute("href", "learn_c++.html");
             x.appendChild(t);
             empty_box.append(h3);
             empty_box.append(x);
          }
          else{
              cp.src = "images/star.png";
              i=0;
              const h1=document.getElementById('h1');
              const x1=document.getElementById('link');
              h1.remove();
              x1.remove();
          }

      });
      let r=0;
      python.addEventListener("click" , function () {
            if(r == 0){
                python.src = "images/yellow_star.png";
                r = 1;
                let h3 = document.createElement("h3");
                h3.setAttribute("id","python1")
                h3.innerHTML = "Learning Python"
                h3.style.color="white";
                let x = document.createElement("A");
                 x.setAttribute("id","linkk")
                 x.style.color="white";
                 x.style.marginLeft="5%";
                let t = document.createTextNode("Learning Python");
                x.setAttribute("href", "learn_python.html");
                x.appendChild(t);
                empty_box.append(h3);
                empty_box.append(x);
            }
            else{
                python.src = "images/star.png";
                r=0;
                const h1=document.getElementById('python1');
                const x1=document.getElementById('linkk');
                h1.remove();
                x1.remove();
            }

        });
        let a=0
        java.addEventListener("click" , function () {
              if(a == 0){
                  java.src = "images/yellow_star.png";
                  a = 1;
                  let h3 = document.createElement("h3");
                  h3.setAttribute("id","java1")
                  h3.innerHTML = "Learning JAVA"
                  h3.style.color="white";
                  let x = document.createElement("A");
                   x.setAttribute("id","linkw")
                   x.style.color="white";
                   x.style.marginLeft="5%";
                  let t = document.createTextNode("Learning Java");
                  x.setAttribute("href", "learn_java.html");
                  x.appendChild(t);
                  empty_box.append(h3);
                  empty_box.append(x);
              }
              else{
                  java.src = "images/star.png";
                  a=0;
                  const h1=document.getElementById('java1');
                  const x1=document.getElementById('linkw');
                  h1.remove();
                  x1.remove();
              }

          });
          let d=0
          djnago.addEventListener("click" , function () {
                if(d == 0){
                    djnago.src = "images/yellow_star.png";
                    d = 1;
                    let h3 = document.createElement("h3");
                    h3.setAttribute("id","Django1")
                    h3.innerHTML = "Learning DJANGO"
                    h3.style.color="white";
                    let x = document.createElement("A");
                     x.setAttribute("id","linkd")
                     x.style.color="white";
                     x.style.marginLeft="5%";
                    let t = document.createTextNode("Learning DJANGO");
                    x.setAttribute("href", "learn_django.html");
                    x.appendChild(t);
                    empty_box.append(h3);
                    empty_box.append(x);
                }
                else{
                    djnago.src = "images/star.png";
                    d=0;
                    const h1=document.getElementById('Django1');
                    const x1=document.getElementById('linkd');
                    h1.remove();
                    x1.remove();
                }

            });
            let p=0
            php.addEventListener("click" , function () {
                  if(p == 0){
                      php.src = "images/yellow_star.png";
                      p= 1;
                      let h3 = document.createElement("h3");
                      h3.setAttribute("id","PHPP")
                      h3.innerHTML = "Learning PHP"
                      h3.style.color="white";
                      let x = document.createElement("A");
                       x.setAttribute("id","linkO")
                       x.style.color="white";
                       x.style.marginLeft="5%";
                      let t = document.createTextNode("Learning Php");
                      x.setAttribute("href", "learn_php.html");
                      x.appendChild(t);
                      empty_box.append(h3);
                      empty_box.append(x);
                  }
                  else{
                      php.src = "images/star.png";
                      p=0;
                      const h1=document.getElementById('PHPP');
                      const x1=document.getElementById('linkO');
                      h1.remove();
                      x1.remove();
                  }

              });
              let k=0
              html.addEventListener("click" , function () {
                    if(k == 0){
                        html.src = "images/yellow_star.png";
                        k = 1;
                        let h3 = document.createElement("h3");
                        h3.setAttribute("id","htmlr")
                        h3.innerHTML = "Learning HTML"
                        h3.style.color="white";
                        let x = document.createElement("A");
                         x.setAttribute("id","linkh")
                         x.style.color="white";
                         x.style.marginLeft="5%";
                        let t = document.createTextNode("Learning HTML");
                        x.setAttribute("href", "learn_html.html");
                        x.appendChild(t);
                        empty_box.append(h3);
                        empty_box.append(x);
                    }
                    else{
                        html.src = "images/star.png";
                        k=0;
                        const h1=document.getElementById('htmlr');
                        const x1=document.getElementById('linkh');
                        h1.remove();
                        x1.remove();
                    }

                });
                let c=0;
                css.addEventListener("click" , function () {
                      if(c == 0){
                          css.src = "images/yellow_star.png";
                          c = 1;
                          let h3 = document.createElement("h3");
                          h3.setAttribute("id","cssr")
                          h3.innerHTML = "Learning CSS"
                          h3.style.color="white";
                          let x = document.createElement("A");
                           x.setAttribute("id","linkc")
                           x.style.color="white";
                           x.style.marginLeft="5%";
                          let t = document.createTextNode("Learning CSS");
                          x.setAttribute("href", "learn_html.html");
                          x.appendChild(t);
                          empty_box.append(h3);
                          empty_box.append(x);
                      }
                      else{
                          css.src = "images/star.png";
                          c=0;
                          const h1=document.getElementById('cssr');
                          const x1=document.getElementById('linkc');
                          h1.remove();
                          x1.remove();
                      }

                  });
                  let j=0;
                  js.addEventListener("click" , function () {
                        if(j == 0){
                            js.src = "images/yellow_star.png";
                            j = 1;
                            let h3 = document.createElement("h3");
                            h3.setAttribute("id","jss")
                            h3.innerHTML = "Learning JAVASCRIPT"
                            h3.style.color="white";
                            let x = document.createElement("A");
                             x.setAttribute("id","linkj")
                             x.style.color="white";
                             x.style.marginLeft="5%";
                            let t = document.createTextNode("Learning javascript");
                            x.setAttribute("href", "learn_js.html");
                            x.appendChild(t);
                            empty_box.append(h3);
                            empty_box.append(x);
                        }
                        else{
                            js.src = "images/star.png";
                            j=0;
                            const h1=document.getElementById('jss');
                            const x1=document.getElementById('linkj');
                            h1.remove();
                            x1.remove();
                        }

                    });
                    let cq=0;
                    cs.addEventListener("click" , function () {
                          if(cq == 0){
                              cs.src = "images/yellow_star.png";
                              cq = 1;
                              let h3 = document.createElement("h3");
                              h3.setAttribute("id","boots")
                              h3.innerHTML = "Learning C#"
                              h3.style.color="white";
                              let x = document.createElement("A");
                               x.setAttribute("id","linkb")
                               x.style.color="white";
                               x.style.marginLeft="5%";
                              let t = document.createTextNode("Learning C#");
                              x.setAttribute("href", "learn_CS.html");
                              x.appendChild(t);
                              empty_box.append(h3);
                              empty_box.append(x);
                          }
                          else{
                              cs.src = "images/star.png";
                              cq=0;
                              const h1=document.getElementById('boots');
                              const x1=document.getElementById('linkb');
                              h1.remove();
                              x1.remove();
                          }

                      });
                      let b=0;
                      boot.addEventListener("click" , function () {
                            if(b== 0){
                                boot.src = "images/yellow_star.png";
                                b= 1;
                                let h3 = document.createElement("h3");
                                h3.setAttribute("id","csss")
                                h3.innerHTML = "Learning BOOTSTRAP"
                                h3.style.color="white";
                                let x = document.createElement("A");
                                 x.setAttribute("id","links")
                                 x.style.color="white";
                                 x.style.marginLeft="5%";
                                let t = document.createTextNode("Learning BOOTSTRAP");
                                x.setAttribute("href", "learn_boot.html");
                                x.appendChild(t);
                                empty_box.append(h3);
                                empty_box.append(x);
                            }
                            else{
                                boot.src = "images/star.png";
                                b=0;
                                const h1=document.getElementById('csss');
                                const x1=document.getElementById('links');
                                h1.remove();
                                x1.remove();
                            }

                        });
});
function myfun()
{
        if(i== 0){
            django.src = "images/yellow_star.png";
            i= 1;
        }
        else{
            django.src = "images/star.png";
            i=0;

        }

}
