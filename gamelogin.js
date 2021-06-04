function addname(){
    player1_name = document.getElementById("player1_input").value;
    player2_name = document.getElementById("player2_input").value;
    localStorage.setItem("player1_key", player1_name);
    localStorage.setItem("player2_key", player2_name);
    window.location = "gamepage.html";
}