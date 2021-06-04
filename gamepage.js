player1_name = localStorage.getItem("player1_key");
player2_name = localStorage.getItem("player2_key");
player1_score = 0;
player2_score = 0;
document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score; 
document.getElementById("player_question").innerHTML = "Question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "Answer turn - "+player2_name;
function send(){
get_item = document.getElementById("word").value;
lowercase_word = get_item.toLowerCase();
console.log(lowercase_word);
lt_2 = lowercase_word.charAt(1);
console.log(lt_2);
word_lnt = lowercase_word.length - 1;
lt_last = lowercase_word.charAt(word_lnt);
console.log(lt_last); 
index_middle = Math.floor(lowercase_word.length/2);
lt_middle = lowercase_word.charAt(index_middle);
console.log(lt_middle);
output1 = lowercase_word.replace(lt_2, "_");
output2 = output1.replace(lt_middle, "_");
output3 = output2.replace(lt_last, "_");
console.log(output3);
qusetion_word = "<h4 id='word_display'> Question : "+output3+"</h4> <br>";
answer_word = "<h4> Answer : </h4> <input type='text' id='word_answer'> <br> <br>";
check_button = "<button class='btn btn-info' id='answer_btn' onclick='check()'> Check </button>";
row = qusetion_word+answer_word+check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
question_turn = "p1";
answer_turn = "p2";
function check(){
    get_answer = document.getElementById("word_answer").value;
    answer = get_answer.toLowerCase();
    console.log("The lowercase version of player 1's word is : "+answer);
    if(answer == lowercase_word){
        if(answer_turn == "p1"){
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "p1"){
        question_turn = "p2";
        document.getElementById("player_question").innerHTML = "Question Turn = " + player2_name;
    }
    else{
        question_turn = "p1";
        document.getElementById("player_question").innerHTML = "Question Turn = "+player1_name;
    }
    if(answer_turn == "p1"){
        answer_turn = "p2";
        document.getElementById("player_answer").innerHTML = "Answer Turn = "+player2_name;
    }
    else{
        answer_turn = "p1";
        document.getElementById("player_answer").innerHTML = "Answer Turn = "+player1_name;
    }
    document.getElementById("output").innerHTML = ""
}


