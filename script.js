const body = document.querySelector("body")
const ranginDivs = document.querySelectorAll(".rang")
const colors = ["white","green","red","blue","pink","orange","pink","yellow","brown","black","aqua",]
const main = document.getElementById("main")
const hbp = document.getElementById("hbp")

window.addEventListener('resize', function() {
    location.reload();
  });
  

function hh(){
    hbp.style.top=window.innerHeight/2 + "px"
}

hh()

ranginDivs.forEach(div => {
    setInterval(() => {
        div.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
    }, 1000);
});

setInterval(() => {
    document.querySelector("#ooo").style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
}, 1000);

setInterval(() => {
    var string1 = "rotatingok";
    var string2 = "rotatingnotok";
    var selectedString = Math.random() < 0.5 ? string1 : string2;
    var randoms = Math.random() * (1.5 - 0.7) + 0.7;
    var galb = document.createElement("div");
    galb.classList.add("heart");
    // galb.classList.add(selectedString);
    galb.style.scale = randoms;
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
    galb.style.left = x - 100  + "px";
    galb.style.top = y - 100  + "px";
    main.append(galb);
    galb.classList.add("fadein")
    setTimeout(() => {
        galb.classList.remove("fadein")
        galb.style.opacity="1"
    }, "1000");


    setTimeout(() => {
        galb.classList.add("fadeout")
        setTimeout(() => {
            galb.remove()
        }, "1000");
    }, 10000);
}, 200);


