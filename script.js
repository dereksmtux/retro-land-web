//array for item ids, can be expanded as needed
var sections = ["a", "b", "c","d", "e"];
// makes page clear at start up then display greeter
for(x in sections) {

		document.getElementById(sections[x]).style.display = "none";
	}
document.getElementById("a").style.display = "block";


function show(n) {
	
	for(x in sections) {

		document.getElementById(sections[x]).style.display = "none";
	}

	document.getElementById(n).style.display = "block";
	
}