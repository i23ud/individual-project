$(document).ready(function () {
    $("#welcomeScreen").slideUp("fast");
    $(".playMode").show("fast");
    const $xPlayer = $("#xPlayer");
    const $oPlayer = $("#oPlayer");
    const $boxs = $(".box");
    let players = [$xPlayer, $oPlayer];
    let reminder = 0; //init
    const resetBtn =$("#resetBtn");


    const reset = function () {
        location.reload(); //reload a page!!
    }
    const boxHandle = function () {
        const tailSelected = $(this); //replace this with more meaningful var
        if (reminder % 2 == 0) {
            tailSelected.text(players[0]);
            tailSelected.addClass("green");
            if (validation("green")) {
                setTimeout(() => {
                    // $(".container").css("z-index","900");
                    $(".winningScreen").fadeIn("fast");
                }, 1000);
            }
        } else {
            tailSelected.text(players[1]);
            tailSelected.addClass("blue");
            if (validation("blue")) {
                alert("Computer won")
            }
        }
        reminder++;
        tailSelected.unbind(); //disable the current box;
    };
    const validation = function (color) {
        //row
        if ($(".t1").hasClass(color) && $(".t2").hasClass(color) && $(".t3").hasClass(color)) {
            $(".t1").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
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
    };
    players[0].click(handleBtn);
    players[1].click(handleBtn);
    $boxs.click(boxHandle);
    resetBtn.click(reset);
});