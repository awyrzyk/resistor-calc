var firstColor = document.getElementById("firstColor"),
	secondColor = document.getElementById("secondColor"),
	thirdColor = document.getElementById("thirdColor"),
	fourthColor = document.getElementById("fourthColor"),
	firstBandTop = document.getElementById("firstBandTop"),
	firstBandBottom = document.getElementById("firstBandBottom"),
	secondBandTop = document.getElementById("secondBandTop"),
	secondBandBottom = document.getElementById("secondBandBottom"),
	thirdBandTop = document.getElementById("thirdBandTop"),
	thirdBandBottom = document.getElementById("thirdBandBottom"),
	fourthBandTop = document.getElementById("fourthBandTop"),
	fourthBandBottom = document.getElementById("fourthBandBottom"),
	result = document.getElementsByTagName("span")[0],
	button = document.getElementById("button");
	
button.addEventListener("click", showResult);

var bands=[
			{name: "no band",
			color: "rgb(0,0,0,0)",
			tolerance: 20},
			{name: "silver",
			color: "rgb(191, 191, 191)",
			number: -2,
			tolerance: 10},
			{name: "gold",
			color: "rgb(255, 215, 0)",
			number: -1,
			tolerance: 5},
			{name: "black",
			color: "rgb(0, 0, 0)",
			number: 0,
			tolerance: "-"},
			{name: "brown",
			color: "rgb(165, 42, 42)",
			number: 1,
			tolerance: 1},
			{name: "red",
			color: "rgb(255, 0, 0)",
			number: 2,
			tolerance: 2},
			{name: "orange",
			color: "rgb(255, 165, 0)",
			number: 3,
			tolerance: "-"},
			{name: "yellow",
			color: "rgb(255, 255, 0)",
			number: 4,
			tolerance: "-"},
			{name: "green",
			color: "rgb(0, 128, 0)",
			number: 5,
			tolerance: 0.5},
			{name: "blue",
			color: "rgb(0, 0, 255)",
			number: 6,
			tolerance: 0.25},
			{name: "purple",
			color: "rgb(128, 0, 128)",
			number: 7,
			tolerance: 0.1},
			{name: "gray",
			color: "rgb(128, 128, 128)",
			number: 8,
			tolerance: 0.05},
			{name: "white",
			color: "rgb(255, 255, 255)",
			number: 9,
			tolerance: "-"}
		   ];

firstColor.addEventListener("change", function(){
	bands.forEach(function(band){
		if (band.name == firstColor.value){
			firstBandTop.style.background = "linear-gradient(to top, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			firstBandBottom.style.background =  "linear-gradient(to bottom, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			return firstResult = band.number;
		}
	})
});

secondColor.addEventListener("change", function(){
	bands.forEach(function(band){
		if (band.name == secondColor.value){
			secondBandTop.style.background =  "linear-gradient(to top, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			secondBandBottom.style.background =  "linear-gradient(to bottom, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			return secondResult = band.number;
		}
	})
});

thirdColor.addEventListener("change", function(){
	bands.forEach(function(band){
		if (band.name == thirdColor.value){
			thirdBandTop.style.background =  "linear-gradient(to top, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			thirdBandBottom.style.background =  "linear-gradient(to bottom, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			return thirdResult = band.number;
		}
	})
});

fourthColor.addEventListener("change", function(){
	bands.forEach(function(band){
		if (band.name == fourthColor.value){
			fourthBandTop.style.background =  "linear-gradient(to top, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			fourthBandBottom.style.background =  "linear-gradient(to bottom, rgb(255,255,255,0.04) 13%, "+band.color+", rgb(0,0,0,0.04))";
			return fourthResult = band.tolerance;
		}
	})
});

function showResult(){
	var numbers = String(firstResult)+String(secondResult);
	return result.innerHTML=numbers*Math.pow(10, thirdResult)/1000+ "k&#937 "+"Tolerance: " +fourthResult+"%";
}

