function click_p1() {
	let ele=document.querySelector('#p1');
	ele.addEventListener('click',(e)=>{
		console.log(1);
		ele.style.color="red";	
	})

}

function click_p2() {
	let ele=document.querySelector('#p2'); 
	ele.addEventListener('click',(e)=>{
		console.log(2);
		let date=new Date();
		let newdate = date.getFullYear() + "-" 
		+ (date.getMonth() + 1) 
		+ "-" + date.getDate();
		document.querySelector('h1').innerHTML=newdate;	
	})
}

function click_p3() {
	let ele=document.querySelector('#p3')
	ele.addEventListener('click',(e)=>{
		console.log(3);
		ele.classList.add("fn-active");
	})
}

function click_p4() {
	let ele=document.querySelector('#p4');
	ele.addEventListener('click',(e)=>{
		console.log(4);
		let em=document.querySelector('#p8')
		em.parentNode.removeChild(em);
	})
}

function click_p5() {
	let ele=document.querySelector('#p5')
	ele.addEventListener('click',(e)=>{
		console.log(5);
		window.open("https://www.taobao.com/");
	})
}

function click_p6() {
	let ele=document.querySelector('#p6')
	ele.addEventListener('click',(e)=>{
		console.log(6);
		var para=document.createElement("li");
		var node=document.createTextNode("p9");
		para.appendChild(node);
		var grandpa=document.querySelector('ul');
		grandpa.appendChild(para);
		flag=1;
	})
}

function click_p7() {
	let ele=document.querySelector('#p7');
	ele.addEventListener('click',(e)=>{
		console.log(7);
		var box=document.querySelector('.m-box');
		box.style.width=screen.availWidth+'px';
	})
}

var ul = document.querySelectorAll('ul')[0];
var li = ul.getElementsByTagName('li');

ul.onclick = function(e) {
	var e = e || window.event, target = e.target || e.srcElement;
	for(var s in li){
		if(target == li[s]){
		s = parseInt(s)+1;
		alert("NUM :"+s);
		break;
		}
	}
}

click_p1();click_p4();

click_p2();click_p5();

click_p3();click_p6();click_p7();


