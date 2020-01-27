window.onload = function(){
    const canvasClass = document.getElementsByClassName("getcanvas");
    const canvasContext = canvasClass[0].getContext("2d");

    console.log(canvasContext);

    const rondoms =()=>{
        return Math.floor(Math.random()*1000);
    };

    console.log(rondoms());

    const changeCanvas=()=>{
        canvasContext.fillRect(rondoms(),rondoms(),rondoms(),rondoms(),200);
        canvasContext.strokeStyle=`rgb(255,0,0)`;
        canvasContext.fillStyle = 'rgb(255,00,00)';
    };
    for(let x=0;x<100;x++){
        changeCanvas();
    };
    
    
};
