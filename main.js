canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
NASA_Image=["NASA_Image_1.jpg","NASA_Image_2.jpg","NASA_Image_3.jpg","NASA_Image_4.jpg,NASA_Image_5.jpg"];
random_number = Math.floor(Math.random() * 5);
rover_width=100;
rover_height=90;

rover_X=10;
rover_Y=10;

background_image=NASA_Image[random_number];
rover_image="ROM.png";

function add(){
background_imgTag=new Image();
background_imgTag.onload=uploadBackground;
background_imgTag.src=background_image;

rover_imgTag=new Image();
rover_imgTag.onload=uploadRover;
rover_imgTag.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height);
    }

    window.addEventListener("keydown", my_keydown);
    function my_keydown(e){
keypress=e.keyCode;
console.log(keypress);

if(keypress=='38'){
up();
console.log("up");
}
if(keypress=='40'){
    down();
    console.log("down");
    }
    if(keypress=='37'){
        left();
        console.log("left");
        }
        if(keypress=='39'){
            right();
            console.log("right");
            }
    }

    function up(){
if(rover_Y>=0){
rover_Y=rover_Y-3;
uploadBackground();
uploadRover();
}

}
function down(){
    if(rover_Y<=500){
    rover_Y=rover_Y+3;
    uploadBackground();
    uploadRover();
    }
    
}
    
function left(){
    if(rover_X>=0){
    rover_X=rover_X-3;
    uploadBackground();
    uploadRover();
    }
    
    }

    function right(){
        if(rover_X<=700){
        rover_X=rover_X+3;
        uploadBackground();
        uploadRover();
        }
        
        }