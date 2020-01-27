window.onload = function () {

const classTop = document.getElementsByClassName("top");
classTop[0].className = "topArufa";

const classContents = document.getElementsByClassName("contents");
classContents[0].className = "contentsArufa";

const classMenubox = document.getElementsByClassName("menubox");
classMenubox[0].className = "menuboxArufa"

    const flames = [document.getElementsByClassName("flame1"),document.getElementsByClassName("flame2"),
    document.getElementsByClassName("flame3"),document.getElementsByClassName("flame4"),
    document.getElementsByClassName("flame5")];
    const changeFont = "flameX";

    flames[0][0].onmouseover =()=>{
        setClassOn(0);
    };
    flames[0][0].onmouseleave =()=>{
        setClassLeave(0,"flame1");
    };
    flames[1][0].onmouseover =()=>{
        setClassOn(1);
    };
    flames[1][0].onmouseleave =()=>{
        setClassLeave(1,"flame2");
    };
    flames[2][0].onmouseover =()=>{
        setClassOn(2);
    };
    flames[2][0].onmouseleave =()=>{
        setClassLeave(2,"flame3");
    };
    flames[3][0].onmouseover =()=>{
        setClassOn(3);
    };
    flames[3][0].onmouseleave =()=>{
        setClassLeave(3,"flame4");
    };
    flames[4][0].onmouseover =()=>{
        setClassOn(4);
    };
    flames[4][0].onmouseleave =()=>{
        setClassLeave(4,"flame5");
    };

const setClassOn=(classNumber)=>{
    flames[classNumber][0].className = changeFont;
    flames.splice(classNumber,1,document.getElementsByClassName(changeFont));
};

const setClassLeave=(classNumber,flameName)=>{
    flames[classNumber][0].className = flameName;
    flames.splice(classNumber,1,document.getElementsByClassName(flameName));

};


const Texts = [document.getElementsByClassName("mainText1"),document.getElementsByClassName("mainText2"),document.getElementsByClassName("mainText3")];
const textSplit = [Texts[0][0].textContent.split(""),Texts[1][0].textContent.split(""),Texts[2][0].textContent.split("")];
let getCurText;
const textsLength=Texts.length;
let getText="";

const eraseText=(number)=>{
    Texts[number][0].innerHTML="";
};

for(let a=0;a<Texts.length;a+=1){
    eraseText(a);
}

const chsp = 1000;

const textOpningAdd=function(){
    Texts[0][0].textContent = "_" ;
};


const textOpningErase=function(){
    Texts[0][0].textContent = "";
};

let countSet=0;
let endGurd=0;
const textOpningUnite=function(){
    countSet++;
    if(countSet<7){
        if (countSet%2==0){
            console.log(countSet);
            //textOpningAdd();
            //setTimeout(textOpningUnite,chsp);
        }else{
            console.log(countSet+"r");
            //textOpningErase();
            //setTimeout(textOpningUnite,chsp);
        };
    };
};


const addtext =(i,j)=>{
    Texts[i][0].textContent =  getText;
    Texts[i][0].textContent = Texts[i][0].textContent + textSplit[i][j]+"_";
    getCurText = Texts[i][0].textContent.split("");
    getCurText.splice(getCurText.length-1,1);
    getText = getCurText.join("");
        if (j==textSplit[i].length-1){
            Texts[i][0].textContent =  getText;
        };
};

const txsp=200;
let count = 0;let j = 0;let i = 0;
const setText = function(){
if (i<Texts.length){
    if(j<textSplit[i].length){
        addtext(i,j);
        j++;
        setTimeout(setText, txsp);
    }else{
        getText="";
        i++;j=0;setText();
    };
}else{
    return;
};
};


var promise = new Promise(function(resolve){
});
promise.then(textOpningUnite()).then(setText());
    

const setUnder=document.getElementsByClassName("underbox");
setUnder[0].className="underboxArufa";

};
