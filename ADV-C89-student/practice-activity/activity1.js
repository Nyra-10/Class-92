var score=0;
function updatescore(){
    score+=1;
    document.getElementById("Score").innerHTML="Score:"+score;
    }
    function savescore(){
        localStorage.setItem("Score",score);
    }
    function nextpage(){
        window.location="activity_2.html";
    }