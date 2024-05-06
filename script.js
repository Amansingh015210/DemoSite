window.addEventListener("load",()=>{
let anchors=document.querySelectorAll(".nav a");
for(let a of anchors)
{
if(a.href==location.href)
{
//a.className="active";
a.classList.add("active");
}
}
});


