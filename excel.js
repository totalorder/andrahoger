var kolumnNamn = "XEF";
var total = 0;

for(var i = 0; i < kolumnNamn.length; i++) {

    var position = kolumnNamn.length - 1 - i;
    var bokstavsVarde = kolumnNamn.charCodeAt(position);
    bokstavsVarde = bokstavsVarde - 64;
    var excelVarde = Math.pow(26, i) * bokstavsVarde;

    total += excelVarde;

    console.log(kolumnNamn.charAt(position) + " = " + bokstavsVarde + ", excel: " + excelVarde);
}

console.log("Totalt: " + total);