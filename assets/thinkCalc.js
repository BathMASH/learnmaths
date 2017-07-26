
function phrases1(count, word1, word2){
    if(Math.abs(count)==undefined || count > 13){
	console.log('An error has occurred. (AK-thinking-results:' + count + ')');
    } else if (Math.abs(count) > 11) {
	return 'You almost always think '+ word1 + ' rather than ' + word2 + '.';
    } else if (Math.abs(count) > 9) {
	return 'You usually think ' + word1 + ' rather than ' + word2 + '.';
    } else if (Math.abs(count) > 7) {
	return 'You more often think ' + word1 + ' rather than ' + word2 + '.';
    } else if (Math.abs(count) > 5) {
	return 'You more often think ' + word1 + ' rather than ' + word2 + '.';
    } else if (Math.abs(count) > 3) {
	return 'You have a slight preference for thinking ' + word1 + ' rather than ' + word2 + '.';
    } else if (Math.abs(count) > 1) {
	return 'You possibly have a slight preference for thinking ' + word1 + ' rather than ' + word2 + ', but are fairly flexible.';
    } else {
	return 'You are flexible between thinking ' + word1 + ' and thinking ' + word2 + '.<br />Look at the hints and tips for both ways of thinking.';
    }
}

function thinkCalc(){
    var Acount = 0; // Active-Reflective
    var Bcount = 0; // Sensing-Intuitive
    var Ccount = 0; // Visual-Verbal
    var Dcount = 0; // Sequential-Global (need to be corrected to Global-Sequential for display)
    
    //Base calculation
    for(var ii = 1; ii <= 11; ii++){
	Acount += parseInt(document.getElementById("A" + ii).value);
	Bcount += parseInt(document.getElementById("B" + ii).value);
	Ccount += parseInt(document.getElementById("C" + ii).value);
	Dcount += parseInt(document.getElementById("D" + ii).value);
    }

    //Switch Dcount direction
    Dcount = -Dcount;

    //Calculations for output
    var words = {};
    var counts = {A: Acount, B: Bcount, C: Ccount, D: Dcount};
    var thinkactive, thinksensing, thinkvisual, thinksequential;
    if(counts['A'] > 0){
	words['A1'] = "in an active way";
	words['A2'] = "in a reflective way";
	thinkactive = true;
    } else {
	words['A2'] = "in an active way"; 
	words['A1'] = "in a reflective way";
	thinkactive = false;
    }
    if(counts['B'] > 0){
	words['B1'] = "in a sensing way"; 
	words['B2'] = "in an intuitive way";
	thinksensing=true;
    } else {
	words['B2'] = "in a sensing way"; 
	words['B1'] = "in an intuitive way";
	thinksensing=false;
    }
    if (counts['C'] > 0) {
	words['C1'] = "in a visual way"; 
	words['C2'] = "in a non-visual way";
	thinkvisual=true;
    } else {
	words['C2'] = "in a visual way"; 
	words['C1'] = "in a non-visual way";
	thinkvisual=false;
    }
    if (counts['D'] > 0) {
	words['D1'] = "in a global way"; 
	words['D2'] = "in a sequential way";
	thinksequential=true;
    } else {
	words['D2'] = "in a global way"; 
	words['D1'] = "in a sequential way";
	thinksequential=false;
    }

    words['A'] = phrases1(counts['A'], words['A1'], words['A2']);
    words['B'] = phrases1(counts['B'], words['B1'], words['B2']);
    words['C'] = phrases1(counts['C'], words['C1'], words['C2']);
    words['D'] = phrases1(counts['D'], words['D1'], words['D2']);

    var Aslide = -12*Acount;
    var Bslide = -12*Bcount;
    var Cslide = -12*Ccount;
    var Dslide = -12*Dcount;

    //Output
    var everything = document.getElementById("everything");
    var all = "";

    all += '<p>The results of your test to determine personal thinking styles:</p>';
    all += '<h3>Active/Reflective</h3>';
    all += '<div id="actref1" style="background-image:url(images/acti_refl_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all +=' <div id="actref2" style="background-image:url(images/pinkscale.png); position:relative; margin-top:-75px; border: none; background-position: ' + Aslide + 'px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all += '<div style="clear:both; font-weight:bold;">' + words['A'] + '</div>';
    all += '<h4>Active thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>likely to say, <strong>"Let\'s try it out and see how it works"</strong></li>';
    all += '<li>want to <strong>do something  with </strong>new information, whether that\'s trying problems, discussing a topic,  or explaining it to others</li>';
    all += '<li>more likely to enjoy <strong>working in a group</strong>, where you can discuss ideas and try  different approaches to problems together with other students</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>Find a group to study with and discuss ideas and work on exercise sheets together.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>When working on problem sheets, have your notes out in front of you, and once you\'ve tried a question use your notes to check you have understood correctly.</li>';
    all += '</ul>';
    all += '<h4>Reflective thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>likely to say, <strong>"Let\'s think it through first"</strong></li>';
    all += '<li>want to <strong>think about</strong> new information, considering the material in detail and thinking about possible  questions and applications</li>';
    all += '<li>more likely to enjoy <strong>working alone</strong>, where you have time and space to think  through the material and organise it in a way that makes sense to you</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>Go through your notes in the time between lectures, highlighting or rewriting the material in a way that makes sense to you.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>When looking through your notes, think about what you could be asked about the material. Use problem sheets to check whether you\'ve found all the applications.</li>';
    all += '</ul>';
    all += '<p>&nbsp;</p>';
    all += '<h3>Sensing/Intuitive</h3>';
    all += '<div id="senint1" style="background-image:url(images/sens_intu_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all += '<div id="senint2" style="background-image:url(images/bluescale.png); position:relative; margin-top:-75px; border: none; background-position: ' + Bslide + 'px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all += '<div style="clear:both; font-weight:bold;">' + words['B'] + '</div>';
    all += '<h4>Sensing thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>prefer learning <strong>hard facts</strong></li>';
    all += '<li>would rather solve problems by <strong>well-established methods</strong></li>';
    all += '<li>tend to be good at memorising <strong>facts and details</strong></li>';
    all += '<li>often prefer courses with an obvious connection to the <strong>real world</strong></li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>Spend time looking at examples in your notes, especially in abstract courses. You might be able to find more examples in a recommended textbook if the lecturer doesn\'t give you many.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>When looking at examples, have the notes for the relevant theory in front of you. Try to explain what the example shows about the concept.</li>';
    all += '</ul>';
    all += '<h4>Intuitive thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>prefer discovering <strong>relationships and possibilities</strong></li>';
    all += '<li>like problems which are <strong>not repetitive</strong>, preferring each question to be slightly different</li>';
    all += '<li>tend to be better at <strong>grasping new concepts</strong></li>';
    all += '<li>often don\'t like courses which are repetitive or involve lots of routine calculation</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>Look for varied applications of new concepts. Finding a range of examples or background information in a textbook or online might help make otherwise repetitive calculations more interesting.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>Look for patterns and connections while doing otherwise routine calculations. These may also be useful in checking whether you have make any silly mistakes while trying to rush through such questions in an exam.</li>';
    all += '</ul>';
    all += '<p>&nbsp;</p>';

    all += '<h3>Visual/Non-visual</h3>';
    all += '<div id="visver1" style="background-image:url(images/visu_verb_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all += '<div id="visver2" style="background-image:url(images/orangescale.png); position:relative; margin-top:-75px; border: none; background-position: ' + Cslide + 'px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div><div style="clear:both; font-weight:bold;">' + words['C'] + '</div>';
    all += '<h4>Visual thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>think about the topic in terms of <strong>pictures and applications</strong></li>';
    all += '<li>can sometimes understand what the solution to a problem is based on the visualisation, but may struggle to write it in a mathematical way</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>Look for pictures or diagrams which illustrate the material you are learning.</li>';
    all += '<li>Using pictures and diagrams when approaching a problem sheet may help you formulate a solution.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>Once you understand what a picture or diagram means, check you can write it in mathematical language. Use the illustration to figure out where each step in the mathematics comes from.</li>';
    all += '</ul>';
    all += '<h4>Non-visual thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>think about the topic in terms of <strong>definitions and theorems</strong></li>';
    all += '<li>might not see the solution to a problem immediately, but can often manipulate the definitions, equations and formulae to get a solution</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>When presented with charts or diagrams, translate them into words and formulae to help you understand them.</li>';
    all += '<li>Write down the relevant definitions and formulae for each problem sheet question, as this may give you some idea of where to start.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>When using definitions and theorems in answers to problem sheet questions, have your notes open at the relevant page to look at what the statements mean. You should also use your notes to make sure you know why you can make each step in the answer.</li>';
    all += '</ul>';
    all += '<p>&nbsp;</p>';

    all += '<h3>Global/Sequential</h3>';
    all += '<div id="gloseq1" style="background-image:url(images/glob_sequ_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all += '<div id="gloseq2" style="background-image:url(images/greenscale.png); position:relative; margin-top:-75px; border: none; background-position: ' + Dslide + 'px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div>';
    all += '<div style="clear:both; font-weight:bold;">' + words['D'] + '</div>';
    all += '<h4>Global thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>tend to learn in <strong>large jumps</strong> and won\'t necessarily see the connections between the material until they see <strong>the big picture</strong></li>';
    all += '<li>may be able to solve problems quickly once they have grasped the big picture but may have difficulty in explaining how they did it</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>If the lecturer makes notes available in advance, try reading over the chapter ahead to get an outline of the material.</li>';
    all += '<li>Look for links between topics, and try to find out how everything fits together.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>Look for related topics with similar sets of logical steps and look at the similarities and differences, and how the topics fit together.</li>';
    all += '<li>Write down any ideas you have for answering a problem sheet question and use your lecture notes to help you form these ideas into a series of logical steps which solve the problem.</li>';
    all += '</ul>';
    all += '<h4>Sequential thinkers</h4>';
    all += '<ul>';
    all += '<lh>Characteristics</lh>';
    all += '<li>like each step to <strong>follow logically </strong>from the previous one</li>';
    all += '<li>tend to solve problems by following a series of logical steps until they arrive at a solution</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Play to your strengths</lh>';
    all += '<li>Some lecturers will leave out steps for you to fill in  later. You may find it easier to understand the topic once these steps have  been carefully filled in.</li>';
    all += '<li>Before each lecture, quickly reading through the notes from the last lecture will help you remember the most recent steps.</li>';
    all += '<li>If a lecturer seems to be \'jumping around\' the material more than you like, it may be worth taking the time to organise your notes into an order that makes more sense to you.</li>';
    all += '</ul>';
    all += '<ul>';
    all += '<lh>Watch out for pitfalls</lh>';
    all += '<li>When you can see the first couple of logical steps on a problem sheet question, write these steps down as this will help you figure out what to do next.</li>';
    all += '<li>When learning a new topic, look for related topics with a similar flow of logical steps. Try to work out why any similarities and/or differences exist.</li>';
    all += '</ul>';
    all += '<p>&nbsp;</p>';

    everything.innerHTML = all;
    
    return false;
}
