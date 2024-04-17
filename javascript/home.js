window.addEventListener("load" , function () {
    let search = document.getElementById("search");
    let searchbutton=document.getElementById('searchbutton');
    let python=document.getElementById('python');
    let bootstrap=document.getElementById('bootstrap');
    let javascript=document.getElementById('java_s');
    let css=document.getElementById('css');
    let java=document.getElementById('java');
    let cs=document.getElementById('cs');
    let php=document.getElementById('php');
    let java_s=document.getElementById('java_s');
    let html=document.getElementById('html');
    let django=document.getElementById('django');
    let react=document.getElementById('react');
    let nodejs=document.getElementById('nodejs');
    let cp=document.getElementById('cp');
    let empty=document.getElementById('empty');




});
function searchtopic()
{
  let topics= ['c++','python','django','c#','java','php','css','html','javascript','BOOTSTRAP','nodejs','react'];
 let text_search=document.getElementById("search").value;
 console.log(text_search);
 switch (text_search) {
   case 'C++':
    empty.innerHTML = cp.innerHTML;
     break;
    case 'PYTHON':
    empty.innerHTML = python.innerHTML;
    break;
    case 'DJANGO':
    empty.innerHTML = django.innerHTML;
      break;
    case 'C#':
    empty.innerHTML = cs.innerHTML;
    break;
    case 'JAVA':
    empty.innerHTML = java.innerHTML;
      break;
     case 'CSS':
       empty.innerHTML = css.innerHTML;
     break;
     case 'PHP':
      empty.innerHTML = php.innerHTML;
       break;
     case 'JAVASCRIPT':
  empty.innerHTML = java_s.innerHTML;;
     break;
     case 'BOOTSTRAP':
  empty.innerHTML = bootstrap.innerHTML;
     break;
     case 'bootstrap':
     empty.innerHTML = bootstrap.innerHTML;
     break;
     case 'c++':
         empty.innerHTML = cp.innerHTML;
       break;
      case 'python':
      empty.innerHTML = python.innerHTML;
      break;
      case 'django':
       empty.innerHTML = django.innerHTML;
        break;
      case 'c#':
      empty.innerHTML = cs.innerHTML;
      break;
      case 'java':
      empty.innerHTML = java.innerHTML;
        break;
       case 'css':
       empty.innerHTML = css.innerHTML;
       break;
       case 'php':
        empty.innerHTML = php.innerHTML;
         break;
       case 'javascript':
       empty.innerHTML = java_s.innerHTML;
       break;
    empty.innerHTML = bootstrap.innerHTML;
       break;
          case 'HTML':
              empty.innerHTML = html.innerHTML;
          break;
           case 'html':
              empty.innerHTML = html.innerHTML;
            break;
     default:
         alert("Search not found Please try again e.g JAVA or java");

 }

}
function searchtopic2()
{
 let text_search2=document.getElementById("search").value;
 console.log(text_search2);
 if(text_search2.length==0)
 {
    empty.innerHTML = "";
 }
 else {
 switch (text_search2) {
   case 'C++':
    empty.innerHTML = cp.innerHTML;
     break;
    case 'PYTHON':
    empty.innerHTML = python.innerHTML;
    break;
    case 'DJANGO':
    empty.innerHTML = django.innerHTML;
      break;
    case 'C#':
    empty.innerHTML = cs.innerHTML;
    break;
    case 'JAVA':
    empty.innerHTML = java.innerHTML;
      break;
     case 'CSS':
       empty.innerHTML = css.innerHTML;
     break;
     case 'PHP':
      empty.innerHTML = php.innerHTML;
       break;
     case 'JAVAS':
  empty.innerHTML = java_s.innerHTML;;
     break;
     case 'BOOTSTRAP':
  empty.innerHTML = bootstrap.innerHTML;
     break;
     case 'bootstrap':
     empty.innerHTML = bootstrap.innerHTML;
     break;
     case 'c++':
         empty.innerHTML = cp.innerHTML;
       break;
      case 'python':
      empty.innerHTML = python.innerHTML;
      break;
      case 'django':
       empty.innerHTML = django.innerHTML;
        break;
      case 'c#':
      empty.innerHTML = cs.innerHTML;
      break;
      case 'java':
      empty.innerHTML = java.innerHTML;
        break;
       case 'css':
       empty.innerHTML = css.innerHTML;
       break;
       case 'php':
        empty.innerHTML = php.innerHTML;
         break;
       case 'javas':
       empty.innerHTML = java_s.innerHTML;
       break;
       empty.innerHTML = bootstrap.innerHTML;
       break;
          case 'HTML':
              empty.innerHTML = html.innerHTML;
          break;
           case 'html':
              empty.innerHTML = html.innerHTML;
            break;
     default:


 }
}
}
