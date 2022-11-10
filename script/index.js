$(document).ready(function(){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#FFF",
        fontWeight: "800",
        fontSize: "30px",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weigth: true,
    }, "tags")){
        $("#myCanvasContainer")
    }
})