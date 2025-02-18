/*butonu,paragrafı ve deger girecegin yeri almak gerek,onlar uzerınde ıslem yapacagız cunku */
/* ayriyeten sesleri de almalıyız */
let number=document.getElementById("number");
let tahminBtn=document.getElementById("btnGuess");
let result=document.getElementById("result");

var trueSound=new Audio("true.mp3");
var falseSound=new Audio("false.mp3");

/*Math.floor ile tam sayılar,Math.random ile ondalıklı sayılar uretilir */
let randomSayi=Math.floor(Math.random()*10+1); /*1 ile 10 arası tam sayıları random sayı uretir */
console.log(randomSayi);

tahminBtn.addEventListener("click",()=>{ /*tahminBtn'ye tıklandıgında bir tane fonksıyon olusturduk. */
var txt=number.value;

if(txt==""){
    result.innerHTML="Değer Girmediniz";
    result.style.fontSize="20px";
    result.style.backgroundColor="red";
}
else if(txt>randomSayi)
{
    result.innerHTML="Tahmin Büyük";
    result.style.fontSize="20px";
    result.style.border="2px solid crimson";
    falseSound.play();
}

else if(txt<randomSayi)
    {
        result.innerHTML="Tahmin Küçük";
        result.style.fontSize="20px";
        result.style.border="2px solid crimson";
        falseSound.play();        
    }
else{
    result.innerHTML="Tebrikler Doğru Cevap";
    result.style.fontSize="20px";
    result.style.border="2px solid green";
    trueSound.play();
}

})