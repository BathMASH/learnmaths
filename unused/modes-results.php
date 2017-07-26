<?php include ('head-menu.html'); ?>

       
          <?php
// calculate results! :)
// for each question
$lengths=array(0,4,2,4,3,4,4,3,3,4,3,4,3,2,2);
$results1=array('VA'=>0,'VR'=>0,'VK'=>0,'AV'=>0,'AR'=>0,'AK'=>0,'RV'=>0,'RA'=>0,'RK'=>0,'KV'=>0,'KA'=>0,'KR'=>0);
$answers=array();

for ($ii=1;$ii<15;$ii++) {
	for ($jj=1;$jj<$lengths[$ii];$jj++) {
		for ($kk=$jj;$kk<$lengths[$ii];$kk++){
			$results1[$_POST['q'.$ii._.$jj].$_POST['q'.$ii._.($kk+1)]]++;
		}
	}
}

$myV=$results1['VA']+$results1['VR']+$results1['VK']-$results1['AV']-$results1['RV']-$results1['KV'];
$myA=$results1['AV']+$results1['AR']+$results1['AK']-$results1['VA']-$results1['RA']-$results1['KA'];
$myR=$results1['RV']+$results1['RA']+$results1['RK']-$results1['VR']-$results1['AR']-$results1['KR'];
$myK=$results1['KV']+$results1['KA']+$results1['KR']-$results1['VK']-$results1['AK']-$results1['RK'];
$repV=$myV+27;
$repA=$myA+27;
$repR=$myR+27;
$repK=$myK+27;
?>
          
          
      <h2>Learning Modes</h2>
      <p>The results of your test to determine personal learning preferences: </p>
      <div class="logoco" >
        <div id="vis_bar" class="chart" style="background-image:url(images/vis_bar.gif)" >
        <div id="vis_rate" class="chart2" style="height:<?php echo (108-$repV*2); ?>px;margin:0px;">&nbsp;</div></div>
      <?php echo $repV; ?></div>
      <div class="logoco" >
      <div id="aud_bar" class="chart" style="background-image:url(images/aud_bar.gif)" >
      <div id="aud_rate" class="chart2" style="height:<?php echo (108-$repA*2); ?>px;margin:0px;">&nbsp;</div></div>
      <?php echo $repA; ?></div>
      <div class="logoco" >
      <div id="raw_bar" class="chart" style="background-image:url(images/raw_bar.gif)" >
      <div id="raw_rate" class="chart2" style="height:<?php echo (108-$repR*2); ?>px;margin:0px;">&nbsp;</div></div>
      <?php echo $repR; ?></div>
      <div class="logoco" >
      <div id="kin_bar" class="chart" style="background-image:url(images/kin_bar.gif)" >
      <div id="kin_rate" class="chart2" style="height:<?php echo (108-$repK*2); ?>px;margin:0px;">&nbsp;</div></div>
      <?php echo $repK; ?></div>
      <div class="logoco" style="min-width:200px; vertical-align:middle; margin-left:30px; height:150px;" >
      <div id="scores1" class="chart2" style="border: solid thin #603; min-width:200px;">
      Scores:<br /><a href="#vis_desc"><strong>Visual: </strong><?php echo $repV; ?></a><br /><a href="#aud_desc"><strong>Auditory: </strong><?php echo $repA; ?></a><br /><a href="#raw_desc"><strong>Reading/Writing: </strong><?php echo $repR; ?></a><br /><a href="#kin_desc"><strong>Kinaesthetic: </strong><?php echo $repK; ?></a>
      </div></div>
      <p style="clear:both;">These results are not definitive, but you should use them to think about how you can adapt your learning to suit you better. Remember you will always learn best if you use a mixture of learning styles, but playing to your strengths may help with more difficult topics.</p>
      <p style="clear:both;">The list below gives some advice on how you can adapt your learning. Ideas and examples are available in the <a href="some-ideas.shtml">some ideas</a> section.</p>
<?php
$reses = array("printvis" => $repV, "printaud" => $repA, "printraw" => $repR, "printkin" => $repK);
arsort($reses);
foreach ($reses as $key => $val) {
    $key($val);
	echo '<p>If you would like help to think more about the different ways you can study, why not attend <a href="workshops.shtml">one of our workshops</a>?<br />For suggestions on how to learn, see <a href="some-ideas.shtml">Some Ideas</a><br />
For more information, see <a href="further-reading.shtml">Further Reading</a></p>';
}

function printvis ($rep1) {
      echo '<div id="vis_desc">
      <div class="logofloat"><img src="images/vis_sing.gif" alt="" width="100" height="100" /></div>
        <h3>Visual Learners</h3>
        <p><strong>have a preference for learning from graphs and diagrams representing information</strong></p>
        <p>Your score for the visual learning style: '.strval($rep1).'        </p>
        <ul>
          <lh>Visual learners...</lh>
          <li>like information presented in graphs, charts,  diagrams etc.</li>
          <li>will be as comfortable reading and using symbols  as the text they replace</li>
        </ul>
        <ul>
        <lh>If this appeals to you, you could...</lh>
          <li>try using diagrams, graphs or charts to help  understand new topics. Look for ways to alter the diagrams to show different  examples, special cases, etc. </li>
          <li>use different colours to make your notes easier  to read.<br />
            e.g. underline definitions in one colour, examples in a second colour and  theorems in a third      </li>
        </ul>
      </div>';
}
function printaud ($rep1){
      echo '<div id="aud_desc">
      <div class="logofloat"><img src="images/aud_sing.gif" alt="" width="100" height="100" /></div>
        <h3>Auditory Learners</h3>
        <p><strong>have a preference for learning by listening and discussion</strong></p>
        <p>Your score for the auditory learning style: '.strval($rep1).'        </p>
        <ul>
          <lh>Auditory learners...</lh>
          <li>like lecturers to speak about the topic in  detail</li>
          <li>like learning through discussion with tutors and  fellow students</li>
        </ul>
        <ul>
        <lh>If this appeals to you, you could...</lh>
          <li>try discussing new topics with a group of fellow  students, or take turns to explain the concepts to each other.</li>
          <li>talk through examples to better understand  what&#39;s happening.</li>
        </ul>
      </div>';
}
function printraw ($rep1){
      echo '<div id="raw_desc">
      <div class="logofloat"><img src="images/raw_sing.gif" alt="" width="100" height="100" /></div>
        <h3>Reading/Writing Learners</h3>
        <p><strong>have a preference for learning from information presented as text</strong></p>
        <p>Your score for the reading/writing learning style: '.strval($rep1).'        </p>
        <ul>
          <lh>Reading/Writing learners...</lh>
          <li>like information presented as words - this may  be blocks of text or lists of bullet points</li>
<li>will read mathematical symbols and operators as if they are text</li>
        </ul>
        <ul>
        <lh>If this appeals to you, you could...</lh>
          <li>make a short summary of a new concept and read  it back. Using different words and phrases where possible will help you ensure  you don&#39;t just copy parrot-fashion.</li>
          <li>when faced with a diagram, label it using words  and write a brief description of what it shows.</li>
        </ul>
      </div>';
}
function printkin ($rep1){
      echo '<div id="kin_desc">
      <div class="logofloat"><img src="images/kin_sing.gif" alt="" width="100" height="100" /></div>
        <h3>Kinaesthetic Learners</h3>
        <p><strong>have a preference for learning from practice and movement</strong></p>
        <p>Your score for the kinaesthetic learning style: '.strval($rep1).'</p>
        <ul>
          <lh>Kinaesthetic learners...</lh>
          <li>like learning by using practical examples</li>
          <li>like using interactivity and/or physical props as appropriate</li>
        </ul>
        <ul>
        <lh>If this appeals to you, you could...</lh>
          <li>when starting a new topic, look for applications  and examples, preferably in the real world, and try to understand how they fit  with the theory</li>
          <li>when trying to learn a process, write each step  on a separate card and practice putting them in order until it becomes easy</li>
<li>keep a supply of modelling materials such as plasticine or drinking straws. You may find you are able to make a model instead of just visualising something.</li>
        </ul>
      </div>';
}
	  ?>
    <?php include ('footer.html'); ?>