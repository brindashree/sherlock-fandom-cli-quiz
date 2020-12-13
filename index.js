var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.yellow.bold.underline('Welcome to SHERLOCK FANDOM QUIZ '));
console.log('\n');
var user = readlineSync.question("What is you name ? ");
console.log('\n');
console.log("Welcome "+ user + "! let's see how much of a fan you are! How much do you know about " + chalk.cyan.bold('Sherlock ') +"? " );
var score = 0;

function quiz(question,answer){
  var ans = readlineSync.question(chalk.cyan.bold(question));
  console.log('\n');
  if(ans == answer){
    console.log(chalk.green.bold('You are right!'));
score++;
console.log(chalk.green.bold('Current score: ' + score));

console.log('\n');
  }
  else{
     console.log(chalk.red.bold('You are wrong!'));
score--;
console.log(chalk.red.bold('Current score: ' + score));

console.log('\n');

  }
}


var questionOne = {
  question:"When did the television show SHERLOCK premiere ? a.2010 b.2011 c.2012 ? ",
  answer:"a"
}
var questionTwo = {
  question:"Which broadcasting company produces SHERLOCK ? a.CBS b.NETFLIX c.BBC ? ",
  answer:"c"
}
var questionThree = {
  question:"Which actor plays the title character in SHERLOCK ? a.Jonny Lee Miller b.Jude Law c.Benedict Cumberbatch ? ",
  answer:"c"
}
var questionFour = {
  question:"Which author wrote the original SHERLOCK HOLMES series ? a.Agatha Christie b.Sir Arthur Conan Doyle c.Thomas Hardy ? ",
  answer:"b"
}
var questionFive = {
  question:"Which actor plays the role Dr.John Watson ? a.Martin Freeman b.Colin Firth c.Joseph Fiennes ?  ",
  answer:"a"
}
var questionSix= {
  question:"What is the name of Sherlock's landlady ? a.Mrs.Stubbs b.Mrs.Hudson c.Mrs.Hooper ?  ",
  answer:"b"
}
var questionSeven= {
  question:"What is the adress of the london flat where sherlock lives ? a.331B Baker St b.221B Baker St c.321B Baker St ? ",
  answer:"b"
}
var questionEight = {
  question:"Dr.Watson is a veteran of which war? a.Afghanistan b.Irag c.Falkland Islands ?  ",
  answer:"a"
}
var questionNine = {
  question:"What is the first name of sherlocks brother ? a.Mycroft b.Nigel c.William ? ",
  answer:"a"
}
var questionTen = {
  question:"Which character is the primary antagonist in the series ? a.Lestrade b.Anderson c.Moriarty ? ",
  answer:"c"
}

var que = [questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

for(var i=0;i<que.length;i++){
  quiz(que[i].question,que[i].answer);
}
console.log("-------------------");

console.log(chalk.yellow.bold('Final score : ') + chalk.red.bold(score));




