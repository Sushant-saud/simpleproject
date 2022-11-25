let logo=document.getElementById("myImg");
let imgModal=document.getElementById("imgModal");
let close=document.getElementById("close");
let img=document.getElementById("img");
let description=document.getElementById("description");

logo.addEventListener("click",()=>
{
  imgModal.style.display="block";
  description.innerHTML="Our services";
  img.src="pexels-ola-dapo-3345882.jpg";
});
close.addEventListener('click',()=>{
imgModal.style.display="none";
});