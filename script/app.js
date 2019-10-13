$(document).ready(function () {
    $("#welcomeScreen").slideUp("fast");
    $(".playMode").show("fast");
    const $xPlayer = $("#xPlayer");
    const $oPlayer = $("#oPlayer");
    const $boxs = $(".box");

    let userChoices = "";
    let computerChoices = "";
    let players = [$xPlayer, $oPlayer];
    let reminder = 0; //init

    const validation = function () {
        if (userC) {
            
        }
    }
    const boxHandle = function () {
        // $(this).css("background-color", "green");
        if (reminder % 2 == 0) {
            $(this).text(players[0]);
            $(this).addClass(".green");
        } else {
            $(this).text(players[1]);
            $(this).css("background-color", "blue");
        }
        console.log($(this))
        reminder++;
        $(this).unbind();
    }

    const handleBtn = function () {
        $(".container").css("display", "flex")

        if ($(this).text() == "X") {
            user = "X";
            computer = "O";
        } else {
            user = "O";
            computer = "X";
        }
        players = [user, computer];
        console.log(players)
        // $boxs.click(boxHandle);
        $(".playMode").fadeOut();
    }
    players[0].click(handleBtn);
    players[1].click(handleBtn);

    $boxs.click(boxHandle);
});