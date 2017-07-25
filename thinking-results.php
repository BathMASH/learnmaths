<?php include ('head-menu.html'); ?>

        <?php
		
// calculate results! :)
// Active-Reflective
$Acount = $_POST['A1']+$_POST['A2']+$_POST['A3']+$_POST['A4']+$_POST['A5']+$_POST['A6']+$_POST['A7']+$_POST['A8']+$_POST['A9']+$_POST['A10']+$_POST['A11'];
// Sensing-Intuitive
$Bcount = $_POST['B1']+$_POST['B2']+$_POST['B3']+$_POST['B4']+$_POST['B5']+$_POST['B6']+$_POST['B7']+$_POST['B8']+$_POST['B9']+$_POST['B10']+$_POST['B11'];
// Visual-Verbal
$Ccount = $_POST['C1']+$_POST['C2']+$_POST['C3']+$_POST['C4']+$_POST['C5']+$_POST['C6']+$_POST['C7']+$_POST['C8']+$_POST['C9']+$_POST['C10']+$_POST['C11'];
// Sequential-Global
$Dcount = $_POST['D1']+$_POST['D2']+$_POST['D3']+$_POST['D4']+$_POST['D5']+$_POST['D6']+$_POST['D7']+$_POST['D8']+$_POST['D9']+$_POST['D10']+$_POST['D11'];
// Correct Sequential-Global to Global-Sequential for accurate display
$Dcount = -$Dcount;


// a few more calculations (for display)
$words=array();
$counts=array('A' => $Acount,'B' => $Bcount,'C' => $Ccount,'D' => $Dcount);
if ($counts['A']>0) {
	$words['A1'] = "in an active way"; $words['A2'] = "in a reflective way";
	$thinkactive=true;
} else {
	$words['A2'] = "in an active way"; $words['A1'] = "in a reflective way";
	$thinkactive=false;
}
if ($counts['B']>0) {
	$words['B1'] = "in a sensing way"; $words['B2'] = "in an intuitive way";
	$thinksensing=true;
} else {
	$words['B2'] = "in a sensing way"; $words['B1'] = "in an intuitive way";
	$thinksensing=false;
}
if ($counts['C']>0) {
	$words['C1'] = "in a visual way"; $words['C2'] = "in a non-visual way";
	$thinkvisual=true;
} else {
	$words['C2'] = "in a visual way"; $words['C1'] = "in a non-visual way";
	$thinkvisual=false;
}
if ($counts['D']>0) {
	$words['D1'] = "in a global way"; $words['D2'] = "in a sequential way";
	$thinksequential=true;
} else {
	$words['D2'] = "in a global way"; $words['D1'] = "in a sequential way";
	$thinksequential=false;
}

//calculate full phrases
function phrases1 ($count, $word1, $word2) {
	if (abs($count)==undefined || $count>13) {
		return 'An error has occurred. (AK-thinking-results:'.$count.')';
	} elseif (abs($count)>11) {
		return 'You almost always think '.$word1.' rather than '.$word2.'.';
	} elseif (abs($count)>9) {
		return 'You usually think '.$word1.' rather than '.$word2.'.';
	} elseif (abs($count)>7) {
		return 'You more often think '.$word1.' rather than '.$word2.'.';
	} elseif (abs($count)>5) {
		return 'You more often think '.$word1.' rather than '.$word2.'.';
	} elseif (abs($count)>3) {
		return 'You have a slight preference for thinking '.$word1.' rather than '.$word2.'.';
	} elseif (abs($count)>1) {
		return 'You possibly have a slight preference for thinking '.$word1.' rather than '.$word2.', but are fairly flexible.';
	} else {
		return 'You are flexible between thinking '.$word1.' and thinking '.$word2.'.<br />Look at the hints and tips for both ways of thinking.';
	}
}
$words['A']=phrases1($counts['A'],$words['A1'],$words['A2']);
$words['B']=phrases1($counts['B'],$words['B1'],$words['B2']);
$words['C']=phrases1($counts['C'],$words['C1'],$words['C2']);
$words['D']=phrases1($counts['D'],$words['D1'],$words['D2']);


// now display results...
?>
      <h2>Thinking Styles</h2>
        <p>The results of your test to determine personal thinking styles:</p>
        <h3>Active/Reflective</h3>
      <div id="actref1" style="background-image:url(images/acti_refl_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div id="actref2" style="background-image:url(images/pinkscale.png); position:relative; margin-top:-75px; border: none; background-position: <?php echo (-12*$Acount); ?>px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div style="clear:both; font-weight:bold;"><?php echo $words['A']; ?></div>
<h4>Active thinkers</h4>
<ul>
<lh>Characteristics</lh>
<li>likely to say, <strong>&quot;Let's try it out and see how it works&quot;</strong></li>
<li>want to <strong>do something  with </strong>new information, whether that's trying problems, discussing a topic,  or explaining it to others</li>
<li>more likely to enjoy <strong>working in a group</strong>, where you can discuss ideas and try  different approaches to problems together with other students</li>
</ul>
<ul>
<lh>Play to your strengths</lh>
<li>Find a group to study with and discuss ideas and work on exercise sheets together.</li>
</ul>
<ul>
<lh>Watch out for pitfalls</lh>
<li>When working on problem sheets, have your notes out in front of you, and once you've tried a question use your notes to check you have understood correctly.</li>
</ul>
<h4>Reflective thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>likely to say, <strong>&quot;Let's think it through first&quot;</strong></li>
  <li>want to <strong>think about</strong> new information, considering the material in detail and thinking about possible  questions and applications</li>
  <li>more likely to enjoy <strong>working alone</strong>, where you have time and space to think  through the material and organise it in a way that makes sense to you</li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>Go through your notes in the time between lectures, highlighting or rewriting the material in a way that makes sense to you.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>When looking through your notes, think about what you could be asked about the material. Use problem sheets to check whether you've found all the applications.</li>
  </ul>
<p>&nbsp;</p>
<h3>Sensing/Intuitive</h3>
<div id="senint1" style="background-image:url(images/sens_intu_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div id="senint2" style="background-image:url(images/bluescale.png); position:relative; margin-top:-75px; border: none; background-position: <?php echo (-12*$Bcount); ?>px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div style="clear:both; font-weight:bold;"><?php echo $words['B']; ?></div>
<h4>Sensing thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>prefer learning <strong>hard facts</strong></li>
  <li>would rather solve problems by <strong>well-established methods</strong></li>
  <li>tend to be good at memorising <strong>facts and details</strong></li>
  <li>often prefer courses with an obvious connection to the <strong>real world</strong></li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>Spend time looking at examples in your notes, especially in abstract courses. You might be able to find more examples in a recommended textbook if the lecturer doesn't give you many.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>When looking at examples, have the notes for the relevant theory in front of you. Try to explain what the example shows about the concept.</li>
</ul>
<h4>Intuitive thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>prefer discovering <strong>relationships and possibilities</strong></li>
  <li>like problems which are <strong>not repetitive</strong>, preferring each question to be slightly different</li>
  <li>tend to be better at <strong>grasping new concepts</strong></li>
  <li>often don't like courses which are repetitive or involve lots of routine calculation</li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>Look for varied applications of new concepts. Finding a range of examples or background information in a textbook or online might help make otherwise repetitive calculations more interesting.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>Look for patterns and connections while doing otherwise routine calculations. These may also be useful in checking whether you have make any silly mistakes while trying to rush through such questions in an exam.</li>
</ul>
<p>&nbsp;</p>
      <h3>Visual/Non-visual</h3>
<div id="visver1" style="background-image:url(images/visu_verb_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div id="visver2" style="background-image:url(images/orangescale.png); position:relative; margin-top:-75px; border: none; background-position: <?php echo (-12*$Ccount); ?>px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div><div style="clear:both; font-weight:bold;"><?php echo $words['C']; ?></div>
<h4>Visual thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>think about the topic in terms of <strong>pictures and applications</strong></li>
  <li>can sometimes understand what the solution to a problem is based on the visualisation, but may struggle to write it in a mathematical way</li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>Look for pictures or diagrams which illustrate the material you are learning.</li>
  <li>Using pictures and diagrams when approaching a problem sheet may help you formulate a solution.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>Once you understand what a picture or diagram means, check you can write it in mathematical language. Use the illustration to figure out where each step in the mathematics comes from.</li>
</ul>
<h4>Non-visual thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>think about the topic in terms of <strong>definitions and theorems</strong></li>
  <li>might not see the solution to a problem immediately, but can often manipulate the definitions, equations and formulae to get a solution</li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>When presented with charts or diagrams, translate them into words and formulae to help you understand them.</li>
  <li>Write down the relevant definitions and formulae for each problem sheet question, as this may give you some idea of where to start.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>When using definitions and theorems in answers to problem sheet questions, have your notes open at the relevant page to look at what the statements mean. You should also use your notes to make sure you know why you can make each step in the answer.</li>
</ul>
<p>&nbsp;</p>
      <h3>Global/Sequential</h3>
<div id="gloseq1" style="background-image:url(images/glob_sequ_expanded.png); border: none; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div id="gloseq2" style="background-image:url(images/greenscale.png); position:relative; margin-top:-75px; border: none; background-position: <?php echo (-12*$Dcount); ?>px 0px; background-repeat:no-repeat; width:450px; height:75px;"></div>
<div style="clear:both; font-weight:bold;"><?php echo $words['D']; ?></div>
<h4>Global thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>tend to learn in <strong>large jumps</strong> and won't necessarily see the connections between the material until they see <strong>the big picture</strong></li>
  <li>may be able to solve problems quickly once they have grasped the big picture but may have difficulty in explaining how they did it</li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>If the lecturer makes notes available in advance, try reading over the chapter ahead to get an outline of the material.</li>
  <li>Look for links between topics, and try to find out how everything fits together.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>Look for related topics with similar sets of logical steps and look at the similarities and differences, and how the topics fit together.</li>
  <li>Write down any ideas you have for answering a problem sheet question and use your lecture notes to help you form these ideas into a series of logical steps which solve the problem.</li>
</ul>
<h4>Sequential thinkers</h4>
<ul>
  <lh>Characteristics</lh>
  <li>like each step to <strong>follow logically </strong>from the previous one</li>
  <li>tend to solve problems by following a series of logical steps until they arrive at a solution</li>
</ul>
<ul>
  <lh>Play to your strengths</lh>
  <li>Some lecturers will leave out steps for you to fill in  later. You may find it easier to understand the topic once these steps have  been carefully filled in.</li>
  <li>Before each lecture, quickly reading through the notes from the last lecture will help you remember the most recent steps.</li>
  <li>If a lecturer seems to be 'jumping around' the material more than you like, it may be worth taking the time to organise your notes into an order that makes more sense to you.</li>
</ul>
<ul>
  <lh>Watch out for pitfalls</lh>
  <li>When you can see the first couple of logical steps on a problem sheet question, write these steps down as this will help you figure out what to do next.</li>
  <li>When learning a new topic, look for related topics with a similar flow of logical steps. Try to work out why any similarities and/or differences exist.</li>
</ul>
<p>&nbsp;</p>


<?php include ('footer.html'); ?>