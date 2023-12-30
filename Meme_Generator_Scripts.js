function ShowMeme() {

    // Declare Selected Meme Option Elements
    var selected = document.getElementById("SelectMeme");

    const memePhoto = document.getElementById("SelectedMeme");

    // Render Meme photo based on selected option
    if (selected.value == 1){
        memePhoto.src = "meme photos/annoyed.jpg"
    }

    else if (selected.value == 2){
        memePhoto.src = "meme photos/content.jpg"
    }

    else if (selected.value == 3){
        memePhoto.src = "meme photos/dread.jpg"
    }

    else if (selected.value == 4){
        memePhoto.src = "meme photos/happy.webp"
    }

    else if (selected.value == 5){
        memePhoto.src = "meme photos/sad.jpg"
    }

    else{
        memePhoto.src = "meme photos/none.jpg"
    }

    // Declare Const Elements
    const canvas = document.getElementById("MemeText");
    const TopTextInput = document.querySelector("#TopTextInput").value;
    const BottomTextInput = document.querySelector("#BottomTextInput").value;
    const ctx = canvas.getContext("2d");
    const height = memePhoto.height;
    const width = memePhoto.width;
    const yOffSet = height / 25
    const fontSize = Math.floor(width / 15);

    // Match Canvas Size to Meme Photo Size and Placement Thereof
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(memePhoto, 0, 0, width, height);
    
    // Prepare Text Style and Font
    ctx.strokeStyle = "black";
    ctx.lineWidth = (fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";
    ctx.font = `${fontSize}px sans-serif`;

    // Adding Top Text to Selected Meme Photo
    ctx.textBaseline = "top";
    ctx.strokeText(TopTextInput, width / 2, yOffSet);
    ctx.fillText(TopTextInput, width / 2, yOffSet);

    // Adding Bottom Text to Selected Meme Photo
    ctx.textBaseline = "bottom";
    ctx.strokeText(BottomTextInput, width / 2, height - yOffSet);
    ctx.fillText(BottomTextInput, width / 2, height - yOffSet);
}
