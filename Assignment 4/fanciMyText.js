

window.addEventListener('load', (event) => {
    const btn = document.getElementById("biggerBtn");
    const textInput = document.getElementById("textInput");
    const fancyBtn = document.getElementById("fancy");
    const boringBtn = document.getElementById("boring");
        const mooBtn = document.getElementById("moo");


    btn.onclick = bigger;
    fancyBtn.onchange = fancy;
    boringBtn.onchange = boring;
    mooBtn.onclick = moo;

});
 
 
function bigger()
{
    textInput.style.fontSize = "24pt";
}
 

 function fancy()
 {
 textInput.style.fontWeight = 'bold';
  textInput.style.color = 'blue';
    textInput.style.textDecoration = 'underline';


 }

 function boring()
 {
  textInput.style.fontWeight = 'normal';

 }

 function moo()
 {
 textInput.value = textInput.value.toUpperCase();

 var str = textInput.value;
 var parts = str.split('.');
  textInput.value = parts.join("-Moo");

 }
