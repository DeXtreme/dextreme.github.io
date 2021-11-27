window.addEventListener('scroll', (e)=>{
  let header = document.querySelector('header');
  this.scrollY > 100 ? header.classList.add("sticky") : header.classList.remove("sticky");
});

let projects = document.getElementsByClassName("project")
let project_count = projects.length-1;
let i=0
let next = document.getElementById("next");
let prev = document.getElementById("previous");


next.addEventListener('click', (e)=>{
  i++;
  var project = projects[i];
  project.scrollIntoView();
  prev.style.display = 'block';
  console.log(i);
  if(i==project_count){
    next.style.display = 'none';
  }
});

prev.addEventListener('click', (e)=>{
  i--;
  var project = projects[i];
  project.scrollIntoView();
  next.style.display = 'block';
  if(i==0){
    prev.style.display = 'none';
  } 
});