window["q2_V"]=true;
window["q2_K"]=true;
window["q4_V"]=true;
window["q7_A"]=true;
window["q8_K"]=true;
window["q10_R"]=true;
window["q12_R"]=true;
window["q13_A"]=true;
window["q13_K"]=true;
window["q14_V"]=true;
window["q14_A"]=true;
complete=new Array();

function hier (question, chosen, position, total) {
    var positionInput = position;
    window["q"+String(question)+"_"+chosen]=true;
    if (window["q"+String(question)+"_"+position]!=undefined) {
	hprev=window["q"+String(question)+"_"+position];
    } else {
	hprev=0;
    }
    window["q"+String(question)+"_"+position]=chosen;
    window["q"+String(question)+"_"+hprev]=false;
    position=Number(position)+1;
    while (position<=Number(total)) {
	//This is not a selection any more but could have been in the past so we need to undo that
	if(document.getElementById("q"+String(question)+"_"+String(position)) && (document.getElementById("q"+String(question)+"_"+String(position)).value == chosen)){
	    document.getElementById("q"+String(question)+"_"+String(position)).id = "q" + String(question) + "_" + chosen + String(position);
	    console.log("I put one back at the start of the loop");
	}
	relradio=document.getElementById("q"+String(question)+"_"+chosen+String(position));
	if (relradio.checked==true){
	    relradio.checked=false;
	    window["q"+String(question)+"_"+position]=false;
	}
	relradio.disabled=true;
	if (hprev!=0) {
	    console.log("Looking for id: q"+String(question)+"_"+String(positionInput)+"when hprev = " + hprev);
	    //This is not a selection any more but could have been in the past so we need to undo that
	    if(document.getElementById("q"+String(question)+"_"+String(positionInput))){ 
		document.getElementById("q"+String(question)+"_"+String(positionInput)).id = "q" + String(question) + "_" + document.getElementById("q"+String(question)+"_"+String(positionInput)).value + String(positionInput);
		console.log("I put one back when hprev = " + hprev);
	    }
	    relradio2=document.getElementById("q"+String(question)+"_"+hprev+String(position));
	    relradio2.disabled=false;
	}
	position+=1;
    }
    //Now we have undone anything we need to we can set the current selection
    if(document.getElementById("q"+String(question)+"_"+chosen+String(positionInput))){
	document.getElementById("q"+String(question)+"_"+chosen+String(positionInput)).id = document.getElementById("q"+String(question)+"_"+chosen+String(positionInput)).name;
	console.log("I set the new selection");
    }

    //fill in fourth
    counter=0;
    if (window["q"+String(question)+"_V"]==true) {
	counter+=1;
    } else {
	hold="V";
    }
    if (window["q"+String(question)+"_A"]==true) {
	counter+=1;
    } else {
	hold="A";
    }
    if (window["q"+String(question)+"_R"]==true) {
	counter+=1;
    } else {
	hold="R";
    }
    if (window["q"+String(question)+"_K"]==true) {
	counter+=1;
    } else {
	hold="K";
    }
    if (counter==3){
	if (!window["q"+String(question)+"_1"]) {
	    document.getElementById("q"+String(question)+"_"+hold+"1").checked=true;
	    hier(question,hold,1,total);
	} else if (!window["q"+String(question)+"_2"]) {
	    document.getElementById("q"+String(question)+"_"+hold+"2").checked=true;
	    hier(question,hold,2,total);
	} else if (!window["q"+String(question)+"_3"]) {
	    document.getElementById("q"+String(question)+"_"+hold+"3").checked=true;
	    hier(question,hold,3,total);
	} else if (!window["q"+String(question)+"_4"]) {
	    document.getElementById("q"+String(question)+"_"+hold+"4").checked=true;
	    hier(question,hold,4,total);
	}
	complete[Number(question)]=true;
    }
}
function submitCheck () {
    for (ii=1; ii<15; ii++) {
	if (!complete[ii]) {
	    alert ('You seem to have missed a question. Please choose your preferences in all 14 questions.');
	    return false;
	}
    }
    return true;
}
