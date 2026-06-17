const particles = document.getElementById("particles");

for(let i=0;i<70;i++){

let p = document.createElement("div");

p.classList.add("particle");

p.style.position="absolute";

p.style.width="4px";

p.style.height="4px";

p.style.background="#00d4ff";

p.style.borderRadius="50%";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.opacity=Math.random();

p.style.animation=`move ${5+Math.random()*10}s infinite linear`;

particles.appendChild(p);

}

const style = document.createElement("style");

style.innerHTML=`

@keyframes move{

0%{

transform:translateY(0px);

}

50%{

transform:translateY(-100px);

}

100%{

transform:translateY(0px);

}

}

`;

document.head.appendChild(style);