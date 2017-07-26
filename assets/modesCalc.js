function printvis(num) {
    var vis = "";

    vis += '<div id="vis_desc">';
    vis += '<div class="logofloat"><img src="images/vis_sing.gif" alt="" width="100" height="100" /></div>';
    vis += '<h3>Visual Learners</h3>'
    vis += '<p><strong>have a preference for learning from graphs and diagrams representing information</strong></p>';
    vis += "<p>Your score for the visual learning style: " + num + "</p>";
    vis += '<ul>';
    vis += '<lh>Visual learners...</lh>';
    vis += '<li>like information presented in graphs, charts,  diagrams etc.</li>';
    vis += '<li>will be as comfortable reading and using symbols  as the text they replace</li>';
    vis += '</ul>';
    vis += '<ul>';
    vis += '<lh>If this appeals to you, you could...</lh>';
    vis += '<li>try using diagrams, graphs or charts to help  understand new topics. Look for ways to alter the diagrams to show different  examples, special cases, etc. </li>';
    vis += '<li>use different colours to make your notes easier  to read.<br /> e.g. underline definitions in one colour, examples in a second colour and  theorems in a third      </li>';
    vis += '</ul>';
    vis += '</div>';
    return vis;
}

function printaud(num) {
    var aud = "";
    aud += '<div id="aud_desc">';
    aud += '<div class="logofloat"><img src="images/aud_sing.gif" alt="" width="100" height="100" /></div>';
    aud += '<h3>Auditory Learners</h3>'
    aud += '<p><strong>have a preference for learning by listening and discussion</strong></p>';
    aud += "<p>Your score for the auditory learning style: " + num + "</p>";
    aud += '<ul>';
    aud += '<lh>Auditory learners...</lh>';
    aud += '<li>like lecturers to speak about the topic in  detail</li>';
    aud += '<li>like learning through discussion with tutors and  fellow students</li>';
    aud += '</ul>';
    aud += '<ul>';
    aud += '<lh>If this appeals to you, you could...</lh>';
    aud += '<li>try discussing new topics with a group of fellow  students, or take turns to explain the concepts to each other.</li>';
    aud += '<li>talk through examples to better understand  what&#39;s happening.</li>';
    aud += '</ul>';
    aud += '</div>';

    return aud;
}


function printraw(num) {
    var raw = "";
    raw += '<div id="raw_desc">';
    raw += '<div class="logofloat"><img src="images/raw_sing.gif" alt="" width="100" height="100" /></div>';
    raw += '<h3>Reading/Writing Learners</h3>';
    raw += '<p><strong>have a preference for learning from information presented as text</strong></p>';
    raw += "<p>Your score for the reading/writing learning style: " + num + "</p>";
    raw += '<ul>';
    raw += '<lh>Reading/Writing learners...</lh>';
    raw += '<li>like information presented as words - this may  be blocks of text or lists of bullet points</li>
<li>will read mathematical symbols and operators as if they are text</li>';
    raw += '</ul>';
    raw += '<ul>';
    raw += '<lh>If this appeals to you, you could...</lh>';
    raw += '<li>make a short summary of a new concept and read  it back. Using different words and phrases where possible will help you ensure  you don&#39;t just copy parrot-fashion.</li>';
    raw += '<li>when faced with a diagram, label it using words  and write a brief description of what it shows.</li>';
    raw += '</ul>';
    raw += '</div>';

    return raw;
}


function printkin(num) {
    var kin = "";
    kin += '<div id="kin_desc">';
    kin += '<div class="logofloat"><img src="images/kin_sing.gif" alt="" width="100" height="100" /></div>';
    kin += '<h3>Kinaesthetic Learners</h3>';
    kin += '<p><strong>have a preference for learning from practice and movement</strong></p>';
    kin += "<p>Your score for the kinaesthetic learning style: " + num + "</p>";
    kin += '<ul>';
    kin += '<lh>Kinaesthetic learners...</lh>';
    kin += '<li>like learning by using practical examples</li>';
    kin += '<li>like using interactivity and/or physical props as appropriate</li>';
    kin += '</ul>';
    kin += '<ul>';
    kin += '<lh>If this appeals to you, you could...</lh>';
    kin += '<li>when starting a new topic, look for applications  and examples, preferably in the real world, and try to understand how they fit  with the theory</li>';
    kin += '<li>when trying to learn a process, write each step  on a separate card and practice putting them in order until it becomes easy</li>';
    kin += '<li>keep a supply of modelling materials such as plasticine or drinking straws. You may find you are able to make a model instead of just visualising something.</li>';
    kin += '</ul>';
    kin += '</div>';

    return kin;
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
	all += reses[i].fn(reses[i].val);
    }

    all += '<p>For suggestions on how to learn, see <a href="some-ideas.shtml">Some Ideas</a><br />For more information, see <a href="further-reading.shtml">Further Reading</a></p>';

    everything.innerHTML = all;
    return false;
}
