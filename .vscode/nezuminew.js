window.onload=function(){

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
  

};