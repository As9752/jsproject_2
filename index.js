const bt=document.querySelector("button");
const bd=document.body;
bt.addEventListener("click",()=>{
	const red=Math.floor(Math.random()*255);
	const green=Math.floor(Math.random()*255);
	const blue=Math.floor(Math.random()*255);
	const rgb=`rgb(${red},${green},${blue})`;
	bd.style.background=rgb;
});