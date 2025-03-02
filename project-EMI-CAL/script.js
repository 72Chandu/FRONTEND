function AmountChange(){
    document.getElementById("txtAmount").value=document.getElementById("rangeAmount").value;
}
function YearChange(){
    document.getElementById("txtYears").value=document.getElementById("rangeYears").value;
}
function RateChange(){
    document.getElementById("txtRate").value=document.getElementById("rangeRate").value;
}
function CalculateEMI(){
    var p=parseInt(document.getElementById("txtAmount").value);
    var n=parseInt(document.getElementById("txtYears").value)*12; //for 2 years = 2 * 12 = 24 months
    var r=parseFloat(document.getElementById("txtRate").value)/12/100; //(12 / 12) / 100 = 0.01 (1% per month).
    var emi=(p*r*Math.pow(1+r,n))/(Math.pow(1+r,n)-1);
    document.getElementById("result").innerHTML = "Your monthy installment amount is <b> <span class='text-primary'> &#8377;" + Math.round(emi) + "</span></b> for " + p + " in " + (n/12) + " years."; //𝐸𝑀𝐼=𝑃×𝑅×(1+𝑅)^𝑁 / (1+𝑅)^𝑁−1
}

function AmountTextBoxChanged(){ 
    document.getElementById("rangeAmount").value = document.getElementById("txtAmount").value; 
} 
function YearTextBoxChanged(){ 
    document.getElementById("rangeYears").value = document.getElementById("txtYears").value; 
} 
function RateTextBoxChanged(){ 
    document.getElementById("rangeRate").value = document.getElementById("txtRate").value; 
}