document.querySelectorAll("nav ul li a").forEach(link=>{
    link.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });
        document.querySelector("nav ul").classList.remove("show");
    });
});

document.querySelector(".menu-btn").addEventListener("click",function(){
    document.querySelector("nav ul").classList.toggle("show");
});
