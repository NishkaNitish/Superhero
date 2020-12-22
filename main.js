var canvas = new fabric.Canvas('myCanvas');
player_x = 10;
player_y = 10;
block_image_width = 30;
block_image_height = 30;
var player_object = "";
var block_image_object = "";
function player_update() {
    fabric.Image.fromURL("avenger_bg.jpg", function (Img) {
        player_object = Img;
        share_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({ top: player_y, left: player_x });
        canvas.add(player_object);
    });
    function new_image(get_image) {
        fabric.Image.fromURL(get_image, function (Img) {
            block_image_object = Img;
            block_image_object.scaleToWidth(block_image_width); block_image_object.scaleToHeight(block_image_height);
            block_image_object.set({ top: player_y, left: player_x }); canvas.add(block_image_object);
        });
    }
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    if (e.shiftKey == true && keypressed == '80') {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey == true && keypressed == '77') {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '38') {
        up(); console.log("up");
    }
    if (keypressed == '40') {
        down(); console.log("down");
    }
    if (keypressed == '37') {
        left(); console.log("left");
    }
    if (keypressed == '39') {
        right(); console.log("right");
    }
    if (keypressed == '87') {
        new_image('thor_face.png');
        console.log("t");
    }
    if (keypressed == '71') {
        new_image('thor_left_hand.png');
        console.log("t");
    }
    if (keypressed == '76') {
        new_image('thor_right.png');
        console.log("t");
    }
    if (keypressed == '84') {
        new_image('spideman_right_hand.png');
        console.log("s");
    }
    if (keypressed == '82') {
        new_image('spideman_left_hand.png');
        console.log("s");
    }
    if (keypressed == '89') {
        new_image('spideman_legs.png');
        console.log("s");
    }
    if (keypressed == '68') {
        new_image('spideman_face.png');
        console.log("s");
    }
    if (keypressed == '85') {
        new_image('spideman_body.png');
        console.log("s");
    }

}
if (keypressed == '67') {
    new_image('player.png');
    console.log("p");
}
if (keypressed == '68') {
    new_image('ironman_right_hand.png');
    console.log("i");
} if (keypressed == '67') {
    new_image('ironman_left_hand.png');
    console.log("i");
} if (keypressed == '69') {
    new_image('ironman_legs.png');
    console.log("i");
} if (keypressed == '70') {
    new_image('ironman_face.png');
    console.log("i");
} if (keypressed == '71') {
    new_image('ironman_body.png');
    console.log("i");
}
if (keypressed == '72') {
    new_image('hulkd_body.png');
    console.log("h");
}
if (keypressed == '73') {
    new_image('hulk_right_hand.png');
    console.log("h");
} if (keypressed == '74') {
    new_image('hulk_left_hand.png');
    console.log("h");
} if (keypressed == '75') {
    new_image('hulk_face.png');
    console.log("h");
} if (keypressed == '76') {
    new_image('Final_output.png');
    console.log("f");
} if (keypressed == '77') {
    new_image('captain_america_left_hand.png');
    console.log("c");
} if (keypressed == '98') {
    new_image('avenger_bg.png');
    console.log("a");
}
