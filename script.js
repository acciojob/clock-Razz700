//your JS code here. If required.
let a=document.getElementById("timer");
let d=new Date();
setInterval(function() {
	d=new Date();
	a.innerHTML=d.toLocaleString();
},1000);