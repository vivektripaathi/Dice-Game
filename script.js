        var playerA = prompt("First Player Name");
        var playerB = prompt("Second Player Name");
        // document.querySelector(".player1").innerHTML = playerA;
        // document.querySelector(".player2").innerHTML = playerB;
        function rollDice() {
            var a = Math.floor(Math.random()*6)+1;
            var b = Math.floor(Math.random()*6)+1;
            switch (a) {
                case 1:
                    document.querySelector(".image1").src = "images/dice1.png";
                    break;
                case 2:
                    document.querySelector(".image1").src = "images/dice2.png";
                    break;
                case 3:
                    document.querySelector(".image1").src = "images/dice3.png";
                    break;
                case 4:
                    document.querySelector(".image1").src = "images/dice4.png";
                    break;
                case 5:
                    document.querySelector(".image1").src = "images/dice5.png";
                    break;
                case 6:
                    document.querySelector(".image1").src = "images/dice6.png";
                    break;
            }
            switch (b) {
                case 1:
                    document.querySelector(".image2").src = "images/dice1.png";
                    break;
                case 2:
                    document.querySelector(".image2").src = "images/dice2.png";
                    break;
                case 3:
                    document.querySelector(".image2").src = "images/dice3.png";
                    break;
                case 4:
                    document.querySelector(".image2").src = "images/dice4.png";
                    break;
                case 5:
                    document.querySelector(".image2").src = "images/dice5.png";
                    break;
                case 6:
                    document.querySelector(".image2").src = "images/dice6.png";
                    break;
            }
            if(a>b) document.querySelector("h1").innerHTML = "&#128681; " + playerA + " Win &#127881";
            else if(a<b) document.querySelector("h1").innerHTML = "&#128681; " + playerB + " Win &#127881";
            else document.querySelector("h1").innerHTML = "&#128588; Match Draw &#128588";
        }