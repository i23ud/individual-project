$(document).ready(function () {
    $("#welcomeScreen").slideUp("fast");
    $(".playMode").show("fast");
    const $xPlayer = $("#xPlayer");
    const $oPlayer = $("#oPlayer");
    const $boxs = $(".box");
    let players = [$xPlayer, $oPlayer];
    let turn = 0; //init
    let playerTurnDiv = $("#playerTurn");
    const resetBtn = $("#resetBtn");
    const $container = $(".container");
    const reset = function () {
        location.reload(); //reload a page!!
    }
    const boxHandle = function () {
        const tailSelected = $(this); //replace $(this) with more meaningful var
        //this if block is for checking which player and if game finished or not
        if (turn % 2 == 0) {
            playerTurnDiv.text(players[1] + " Turn");
            tailSelected.text(players[0]);
            tailSelected.addClass("green");
            if (checkWins("green")) {
                //blinking 
                $boxs.unbind();
                playerTurnDiv.text("");
                $container.fadeIn("fast").fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast");
                $(".winningScreen h2").text("X player won");
                setTimeout(() => {
                    $(".winningScreen").fadeIn("fast");
                }, 500);
            } else {
                if (turn === 8) { //check moves if all btn's been clicked
                    $boxs.unbind();
                    $container.fadeIn("fast").fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast");
                    $(".winningScreen h2").text(" Draw");
                    setTimeout(() => {
                        $(".winningScreen h2").fadeIn("fast");
                    }, 500);
                }
            }
        } else {
            tailSelected.text(players[1]);
            playerTurnDiv.text(players[0] + " Turn");
            tailSelected.addClass("blue");
            if (checkWins("blue")) {
                playerTurnDiv.text("");
                $boxs.unbind();
                $container.fadeIn("fast").fadeOut("fast").fadeIn("fast").fadeOut("fast").fadeIn("fast");
                $(".winningScreen h2").text("O player won");
                setTimeout(() => {
                    $(".winningScreen h2").fadeIn("fast");
                }, 500);
            }
        }
        turn++;
        tailSelected.unbind(); //disable the current box;
    };

    //
    const checkWins = function (color) {
        //row
        if ($(".t1").hasClass(color) && $(".t2").hasClass(color) && $(".t3").hasClass(color)) {
            return true;
        } else if ($(".t4").hasClass(color) && $(".t5").hasClass(color) && $(".t6").hasClass(color)) {
            return true;
        } else if ($(".t7").hasClass(color) && $(".t8").hasClass(color) && $(".t9").hasClass(color)) {
            return true;
        }
        //column 
        else if ($(".t1").hasClass(color) && $(".t4").hasClass(color) && $(".t7").hasClass(color)) {
            return true;
        } else if ($(".t2").hasClass(color) && $(".t5").hasClass(color) && $(".t8").hasClass(color)) {
            return true;
        } else if ($(".t3").hasClass(color) && $(".t6").hasClass(color) && $(".t9").hasClass(color)) {
            return true;
        }
        //diagnois
        else if ($(".t1").hasClass(color) && $(".t5").hasClass(color) && $(".t9").hasClass(color)) {
            return true;
        } else if ($(".t3").hasClass(color) && $(".t5").hasClass(color) && $(".t7").hasClass(color)) {
            return true;
        } else {
            return false;
        }
    };
    const handleBtn = function () {
        $container.css("display", "flex");
        if ($(this).text() == "X") {
            user = "X";
            computer = "O";
            playerTurnDiv.text("X Turn");
        } else {
            user = "O";
            computer = "X";
            playerTurnDiv.text("O Turn");
        }
        players = [user, computer];
        console.log(players)
        // $boxs.click(boxHandle);
        $(".playMode").fadeOut();
    };
    players[0].click(handleBtn);
    players[1].click(handleBtn);
    $boxs.click(boxHandle);
    resetBtn.click(reset);
});