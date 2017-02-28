/*window.onload = function(){
  setTimeout(function(){
    document.body.setAttribute("class", "");
  }, 1500);
};*/
window.onscroll = function() {
	var temp = document.getElementById('stop').getBoundingClientRect();
	if(temp.bottom<=window.innerHeight){
		document.getElementById("logo").setAttribute("class", "l2");
		document.getElementById("header").setAttribute("class", "h2");
		document.getElementById("quote").setAttribute("class", "q2");
	}else{
		if(document.getElementById("header").className === "h2"){
			document.getElementById("logo").setAttribute("class", "ln");
			document.getElementById("header").setAttribute("class", "h1 h1t");
			document.getElementById("quote").setAttribute("class", "qn");
		}
	}
}