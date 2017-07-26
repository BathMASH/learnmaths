function printvis(num) {
    return "hallo " + num;
}

function printaud(num) {
    return "aud " + num;
}


function printraw(num) {
    return "raw " + num;
}


function printkin(num) {
    return "kins " + num;
}

function modesCalc() {
    var lengths = [0, 4, 2, 4, 3, 4, 4, 3, 3, 4, 3, 4, 3, 2, 2];
    var results1 = {VA: 0, VR: 0, VK: 0, AV: 0, AR: 0, AK: 0, RV: 0, RA: 0, RK: 0, KV: 0, KA: 0, KR: 0};

    if(!submitCheck()){
	console.log("ARGH!");
    }

    for (var ii=1;  ii<lengths.length; ii++) {
	for (var jj=1;jj<lengths[ii];jj++) {
	    for (var kk=jj;kk<lengths[ii];kk++){
		var key = document.getElementById("q" + ii + "_" + jj).value +
		    document.getElementById("q" + ii + "_" + (kk+1)).value;
		if(!results1.hasOwnProperty(key)){
		    console.log("Bad value" + key);
		}
		results1[key]++;
	    }
	}
    }
    var myV = results1['VA'] + results1['VR'] + results1['VK'] - results1['AV'] - results1['RV'] - results1['KV'];
    var myA = results1['AV'] + results1['AR'] + results1['AK'] - results1['VA'] - results1['RA'] - results1['KA'];
    var myR = results1['RV'] + results1['RA'] + results1['RK'] - results1['VR'] - results1['AR'] - results1['KR'];
    var myK = results1['KV'] + results1['KA'] + results1['KR'] - results1['VK'] - results1['AK'] - results1['RK'];
    var repV = myV + 27;
    var repA = myA + 27;
    var repR = myR + 27;
    var repK = myK + 27;
    var barV = 108 - repV * 2;
    var barA = 108 - repA * 2;
    var barR = 108 - repR * 2;
    var barK = 108 - repK * 2;

    var everything = document.getElementById("everything");
    console.log("Visual: " + repV + ". Auditory: " + repA + ". Reading/Writing: " + repR + ". Kinaesthetic: " + repK + ".");

    var all = "<h2>Learning Modes</h2>";
    all += "<p>The results of your test to determine personal learning preferences: </p>";
    all += '<div class="logoco" >';
    all += '<div id="vis_bar" class="chart" style="background-image:url(images/vis_bar.gif)" >';
    all += '<div id="vis_rate" class="chart2" style="height:' + barV + 'px;margin:0px;">&nbsp;</div></div>';
    all += repV + "</div>";
    all += '<div class="logoco" >';
    all += '<div id="aud_bar" class="chart" style="background-image:url(images/aud_bar.gif)" >';
    all += '<div id="aud_rate" class="chart2" style="height:' + barA + 'px;margin:0px;">&nbsp;</div></div>';
    all += repA + "</div>";
    all += '<div class="logoco" >';
    all += '<div id="raw_bar" class="chart" style="background-image:url(images/raw_bar.gif)" >';
    all += '<div id="raw_rate" class="chart2" style="height:' + barR + 'px;margin:0px;">&nbsp;</div></div>';
    all += repR + "</div>";
    all += '<div class="logoco" >';
    all += '<div id="kin_bar" class="chart" style="background-image:url(images/kin_bar.gif)" >';
    all += '<div id="kin_rate" class="chart2" style="height:' + barK + 'px;margin:0px;">&nbsp;</div></div>';
    all += repK + "</div>";
    all += '<div class="logoco" style="min-width:200px; vertical-align:middle; margin-left:30px; height:150px;" >';
    all += '<div id="scores1" class="chart2" style="border: solid thin #603; min-width:200px;">';
    all += 'Scores:<br /><a href="#vis_desc"><strong>Visual: </strong>' + repV + '</a><br /><a href="#aud_desc"><strong>Auditory: </strong>' + repA + '</a><br /><a href="#raw_desc"><strong>Reading/Writing: </strong>' + repR + '</a><br /><a href="#kin_desc"><strong>Kinaesthetic: </strong>' + repK + '</a></div></div>';

    all += '<p style="clear:both;">These results are not definitive, but you should use them to think about how you can adapt your learning to suit you better. Remember you will always learn best if you use a mixture of learning styles, but playing to your strengths may help with more difficult topics.</p>';
    all += '<p style="clear:both;">The list below gives some advice on how you can adapt your learning. Ideas and examples are available in the <a href="some-ideas.shtml">some ideas</a> section.</p>';

    var reses = new Array();

    reses.push({fn: printvis, val: repV});
    reses.push({fn: printaud, val: repA});
    reses.push({fn: printraw, val: repR});
    reses.push({fn: printkin, val: repK});

    reses.sort(function (a, b) {
	return b.val - a.val;
    });


    for (var i = 0; i < reses.length; i++) {
	all += reses[i].fn(reses[i].val) + "<p>";
    }

    everything.innerHTML = all;
    return false;
}
