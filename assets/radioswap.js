function swap(question,choice){
    var other = (choice + 1)%2; 
    var chosen = document.getElementbyId(question + "_" + String(choice));
    var notchosen = document.getElementbyId(question + "_" + String(other));
    if(chosen && notchosen){
	chosen.id = chosen.name;
	notchosen.id = question + "_" + String(other);
    }else{
	console.log("I am missing a document element");
    }
}
