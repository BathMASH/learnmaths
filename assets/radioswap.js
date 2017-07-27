function swap(question,choice){
    var other = (choice + 1)%2; 
    console.log("I have chosen element with id: " + question + "_" + String(choice));
    console.log("I have NOT chosen element with id: " + question + "_" + String(other));
    var chosen = document.getElementById(question + "_" + String(choice));
    var notchosen = document.getElementById(question + "_" + String(other));
    if(!notchosen) 
	notchosen = document.getElementById(question);
    if(chosen && notchosen){
	chosen.id = chosen.name;
	notchosen.id = question + "_" + String(other);
    }else{
	console.log("I am missing a document element");
    }
}
