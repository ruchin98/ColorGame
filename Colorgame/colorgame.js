var numsq = 6;
var colors = generaterandomcolors(numsq);
console.log("asdad");
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var squares = document.querySelectorAll(".square");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click",function()
{
	colors = generaterandomcolors(3);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i =0;i<squares.length;i++)
	{
		if(colors[i])  
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.backgroundColor = steelblue;
		}
	}
	h1.style.backgroundColor = steelblue;
	numsq=3;
})
hardbtn.addEventListener("click",function()
{
	colors = generaterandomcolors(6);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = steelblue;
	numsq = 6;
})
colordisplay.textContent = pickedcolor;
resetbutton.addEventListener("click",function()
{
	colors = generaterandomcolors(numsq);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = steelblue;
})
for(var i = 0;i < squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function()
	{
		var clickedcolor = this.style.backgroundColor;
		if(clickedcolor === pickedcolor)
		{
			alert("correct!");
			changecolors(clickedcolor);
			h1.style.backgroundColor = clickedcolor;
			resetbutton.textContent = "Play again";
		}
		else 
		{
			this.style.backgroundColor = steelblue;
			messagedisplay.textContent = "Try again";
		}
	})
}

function changecolors(color)
{
	for( var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickcolor()
{
	var random = Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generaterandomcolors(num) {
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor()
{
	var r = Math.floor(Math.random()* 256);
	var g = Math.floor(Math.random()* 256);
	var b = Math.floor(Math.random()* 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
