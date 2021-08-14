player1_name=localStorage.getItem("player1name");
player2_name=localStorage.getItem("player2name");
player1_score=0;
player2_score=0;
question_turn="player-1";
answer_turn="player-2";
document.getElementById("player1name").innerHTML=player1_name+":";
document.getElementById("player2name").innerHTML=player2_name+":";
document.getElementById("player1score").innerHTML=player1_score+":";
document.getElementById("player2score").innerHTML=player2_score+":";
document.getElementById("player_question").innerHTML="question turn: "+player1_name;
document.getElementById("player_answer").innerHTML="answer turn: "+player2_name;
function send(){ 
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase()
    f1=word.charAt(1);
    middle=Math.floor(word.length/2);
    f2=word.charAt(middle);
    last=word.length-1;
    f3=word.charAt(last);
    replace1=word.replace(f1,"_");
    replace2=replace1.replace(f2,"_");
    replace3=replace2.replace(f3,"_");
    question_word="<h4 id='worddisplay'>Q. "+replace3+"</h4>";
    inputbox="<br>answer: <input type='text' id='answer'>";
    checkbutton="<br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_word+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}
function check(){
    answer=document.getElementById('answer').value;
    answer=answer.toLowerCase();
    if(answer==word){
        if(answer_turn=="player-1"){
            player1_score+=1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else{player2_score+=1;
            document.getElementById("player2score").innerHTML=player2_score;}
    }
    if(question_turn=="player-1"){
        question_turn="player-2";
        document.getElementById("player_question").innerHTML="Question turn: "+player2_name;
    }
    else{question_turn="player-1";
    document.getElementById("player_question").innerHTML="Question turn: "+player1_name;}
    if(answer_turn=="player-1"){
        answer_turn="player-2";
        document.getElementById("player_answer").innerHTML="Answer turn: "+player2_name;
    }
    else{answer_turn="player-1";
    document.getElementById("player_answer").innerHTML="Answer turn: "+player1_name;}
    document.getElementById("output").innerHTML="";
}