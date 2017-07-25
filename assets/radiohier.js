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
		relradio=document.getElementById("q"+String(question)+"_"+chosen+String(position));
		if (relradio.checked==true){
			relradio.checked=false;
			window["q"+String(question)+"_"+position]=false;
		}
		relradio.disabled=true;
		if (hprev!=0) {
			relradio2=document.getElementById("q"+String(question)+"_"+hprev+String(position));
			relradio2.disabled=false;
		}
		position+=1;
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