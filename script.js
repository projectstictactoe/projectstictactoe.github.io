var game = document.getElementById("game"),
    result = document.querySelector(".result"),
    move = 1;

for(var i = 0; i < 9; i++) {
    game.innerHTML += '<div class="block"></div>';
}

game.addEventListener("click", function(e) {
    if(e.target.className = "block") {
        if(move & 1) {
            e.target.innerHTML = "✖";
        } else {
            e.target.innerHTML = "O";
        }
        move++;
        checkWinner();
    }
    function checkWinner() {
        var allblocks = document.querySelectorAll(".block");
        if(allblocks[0].innerHTML === "✖" && allblocks[1].innerHTML === "✖" && allblocks[2].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[3].innerHTML === "✖" && allblocks[4].innerHTML === "✖" && allblocks[5].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[6].innerHTML === "✖" && allblocks[7].innerHTML === "✖" && allblocks[8].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[0].innerHTML === "✖" && allblocks[3].innerHTML === "✖" && allblocks[6].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[1].innerHTML === "✖" && allblocks[4].innerHTML === "✖" && allblocks[7].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[2].innerHTML === "✖" && allblocks[5].innerHTML === "✖" && allblocks[8].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[0].innerHTML === "✖" && allblocks[4].innerHTML === "✖" && allblocks[8].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[2].innerHTML === "✖" && allblocks[4].innerHTML === "✖" && allblocks[6].innerHTML === "✖")
            result.innerHTML = "Победили крестики";
        if(allblocks[0].innerHTML === "O" && allblocks[1].innerHTML === "O" && allblocks[2].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[3].innerHTML === "O" && allblocks[4].innerHTML === "O" && allblocks[5].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[6].innerHTML === "O" && allblocks[7].innerHTML === "O" && allblocks[8].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[0].innerHTML === "O" && allblocks[3].innerHTML === "O" && allblocks[6].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[1].innerHTML === "O" && allblocks[4].innerHTML === "O" && allblocks[7].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[2].innerHTML === "O" && allblocks[5].innerHTML === "O" && allblocks[8].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[0].innerHTML === "O" && allblocks[4].innerHTML === "O" && allblocks[8].innerHTML === "O")
            result.innerHTML = "Победили нолики";
        if(allblocks[2].innerHTML === "O" && allblocks[4].innerHTML === "O" && allblocks[6].innerHTML === "O")
            result.innerHTML = "Победили нолики";
    }
});





// https://youtu.be/-YWO-YFW9Ag