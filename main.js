let card1 = document.getElementById("jobcard1")
let card2 = document.getElementById("jobcard2")
let card3 = document.getElementById("jobcard3")
let card4 = document.getElementById("jobcard4")
let like_b=document.getElementById("like");
let dislike_b=document.getElementById("dislike");
let l_d_div=document.getElementById("likeanddislike_div");
let l_div=document.getElementById("like-message-div");
let like_p=document.getElementById("like_p");
let close_b=document.getElementById("close_but")
let active=function (f) {
    card1 = document.getElementById("jobcard1")
    card2 = document.getElementById("jobcard2")
    card3 = document.getElementById("jobcard3")
    card4 = document.getElementById("jobcard4")
  if(f) {
    card2.style.marginLeft = "-25%";
    card3.style.marginLeft = "-25%";
    card4.style.marginLeft = "-25%";
    let event2;
    card1.addEventListener("mouseover", function (ev) {
      card2.style.marginLeft = "-3px";
    });
    card1.addEventListener("mouseout", function (ev) {
      card2.style.marginLeft = "-25%";
    });
    card2.addEventListener("mouseover", function (ev) {
      card3.style.marginLeft = "-3px";
    });
    card2.addEventListener("mouseout", function (ev) {
      card3.style.marginLeft = "-25%";
    });
    card3.addEventListener("mouseover", function (ev) {
      card4.style.marginLeft = "-3px";
    });
    card3.addEventListener("mouseout", function (ev) {
      card4.style.marginLeft = "-25%";
    });
    close_b.addEventListener("click",function (ev) {
      l_div.style.transition = '1.0s';
      dislike_b.style.transition = '1.0s';
      like_b.style.transition = '1.0s';
      l_div.style.transform='translateY(100%)';
      l_div.style.opacity="0.0";
      document.body.style.marginBottom="0";
    })
    console.log(`${like_b.getBoundingClientRect().height}`);
    //document.body.style.backgroundColor="#ffffff";
  }
  else{
    document.body.style.marginBottom="0";
    card2.style.marginLeft = "10px";
    card3.style.marginLeft = "10px";
    card4.style.marginLeft = "10px";
    card1.style.marginLeft = "10px";
    card1=undefined;
    card2=undefined;
    card3=undefined;
    card4=null;
    close_b.addEventListener("click",function (ev) {
      l_div.style.transition = '1.0s';
      dislike_b.style.transition = '1.0s';
      like_b.style.transition = '1.0s';
      l_div.style.transform='translateX(-100%)';
      l_div.style.opacity="0.0";
    })
  }
}
function check_cookie() {
  let cookies =document.cookie.split("; ");
  for(let cookie of cookies){
    if(cookie.startsWith("userLiked=")){
      return true;
    }
  }
  return false;
}
window.onload=function () {
  if(check_cookie()){
    l_div.style.opacity="0";
    l_div.style.display="none";
    document.body.style.marginBottom="0";
  } else {
    l_div.style.opacity="1";
    let ips = localStorage.getItem('ips');
    console.log(ips)
    like_p.innerHTML = `So far, ${ips} people have liked my resume. What do you think?`;
    if(window.innerWidth<576)
      document.body.style.marginBottom=l_div.getBoundingClientRect().height*1.2+"px";

  }
}
  if (window.innerWidth < 768 && window.innerWidth>270) {
    active(true);
  }
  else
    active(false)
  window.addEventListener('resize',function () {
    if (window.innerWidth < 768 && window.innerWidth>270) {
      active(true);
    }
    else
      active(false)
  })
dislike_b.addEventListener("mousemove",function (ev) {
  if(dislike_b.nextElementSibling===like_b) {
    l_div.style.transition = '0.3s';
    dislike_b.style.transition = '0.3s';
    like_b.style.transition = '0.3s';
    dislike_b.style.transform = `translateX(${l_d_div.getBoundingClientRect().width / 3 +dislike_b.getBoundingClientRect().width/3}px)`;
    like_b.style.transform = `translateX(${-1*(l_d_div.getBoundingClientRect().width / 3 +dislike_b.getBoundingClientRect().width/3)}px)`;
    setTimeout(()=> {
      l_div.style.transition = 'none';
      dislike_b.style.transition = 'none';
      like_b.style.transition = 'none';
      dislike_b.style.transform='translateX(0px)';
      like_b.style.transform='translateX(0px)';
      l_d_div.insertBefore(like_b,dislike_b);
    },100);
  }
  else{
    l_div.style.transition = '0.3s';
    dislike_b.style.transition = '0.3s';
    like_b.style.transition = '0.3s';
    dislike_b.style.transform = `translateX(${-1*(l_d_div.getBoundingClientRect().width / 3 +dislike_b.getBoundingClientRect().width/3)}px)`;
    like_b.style.transform = `translateX(${l_d_div.getBoundingClientRect().width / 3 +dislike_b.getBoundingClientRect().width/3}px)`;
    setTimeout(()=> {
      l_div.style.transition = 'none';
      dislike_b.style.transition = 'none';
      like_b.style.transition = 'none';
      dislike_b.style.transform='translateX(0px)';
       like_b.style.transform='translateX(0px)';
      l_d_div.insertBefore(dislike_b,like_b);
    },100);
  }
})
let arr_like = new Array(20).fill(null).map(() => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  let path2 = document.createElementNS("http://www.w3.org/2000/svg", 'path');

  svg.setAttribute('width', '24px');
  svg.setAttribute('height', '24px');

  path2.setAttribute('d', 'M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z');

  // Generate a random color and apply
  path2.setAttribute('fill', "rgb(255,255,255)");
  //`#${Math.floor(Math.random()*16777215).toString(16)}`

  svg.appendChild(path2);
  svg.style.stroke = "none"; // Corrected stroke attribute
  svg.style.transition = "cubic-bezier(0.2,0.3,0.4,0.4) 400ms"; // Transition for movement
  svg.style.position="absolute";
  svg.style.left="50%";
  svg.style.transform="translateX(-50%)"
  svg.style.opacity="0";
  return svg;
});
  like_b.style.overflow="hidden";
  for(let i=0;i<20;i++)
    l_d_div.appendChild(arr_like[i]);
like_b.addEventListener("mousedown",function(ev) {
  l_div.style.transition = ' .5s';
  dislike_b.style.transition = '.5s';
  like_b.style.transition = '.5s';
  if (dislike_b.nextElementSibling === like_b)
    like_b.style.transform = `translateX(${(dislike_b.getBoundingClientRect().width - 2 * like_b.getBoundingClientRect().width) / 3 - (dislike_b.getBoundingClientRect().width / 2 + like_b.getBoundingClientRect().width / 2)}px) scale(1.5) `;
  else {
    like_b.style.transform = `translateX(${-(dislike_b.getBoundingClientRect().width - 2 * like_b.getBoundingClientRect().width) / 3 + (dislike_b.getBoundingClientRect().width / 2 + like_b.getBoundingClientRect().width / 2)}px) scale(1.5) `;
  }
  dislike_b.style.opacity = "0";
  setTimeout(() => {
    for (let i = 0; i < 20; i++) {
      arr_like[i].style.opacity="1";
      let rot=parseInt(Math.random()*360)-180;
      //console.log("rot is"+rot);
      arr_like[i].style.transform = `translateX(${parseInt(Math.random() * 500)-250}px) translateY(${parseInt(Math.random()*500)-250}px) scale(${parseInt((Math.random()+1)*2)}) rotate(${rot}deg)`;
      setTimeout(()=>{
        arr_like[i].style.transition="cubic-bezier(1,0.2,0.4,1) 1s";
        const matrix = new DOMMatrix(arr_like[i].style.transform);
        //console.log(`rotate(${-1*parseInt(Math.atan2(matrix.m21,matrix.m11)*(180/Math.PI)*2)}deg)`);
        arr_like[i].style.transform=`translateX(${matrix.m41*2}px) translateY(${document.body.getBoundingClientRect().height}px) scale(${matrix.a*2}) rotate(${parseInt(Math.atan2(matrix.m21,matrix.m11)*(180/Math.PI)*-4)}deg)`;
        arr_like[i].style.opacity = "0";
        setTimeout(()=>{
          close_b.dispatchEvent(new Event('click'));
        },400);
        },400)
    }
  }, 300);
  let ips=localStorage.getItem('ips');
  if(ips=="NaN" || ips=="null")
    ips=0;
  localStorage.setItem('ips',parseInt(ips)+1);
  document.cookie="userLiked=true;path=/;";
  console.log(ips);
});
