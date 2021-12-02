// Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, 
// paklaustų ar reikalingas pristatymas, jei reikalingas - 
// paklaustų miesto į kurį reiks pristatyti;
// "Įveskite prekės kainą";
// "Ar reikalingas pristatymas į namus? (taip/ne)";
// "Į kurį miestą reiks pristatyti?"

// Jei prekės kaina daugiau arba lygu 50€ arba miestas yra "Vilnius"- pristatymas nemokamas. 
// Pristatymas kitur Lietuvoje: 20€;

// Galiausiai atspausdintų tokią informaciją:

// ---
// 1 variantas (be pristatymo)

// Prekės kaina: xx.xx €
// Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a


// ---
// 2 variantas (su pristatymu)

// Prekės kaina : xx.xx €
// Pristatymas: xx.xx €
// Iš viso: xx.xx €
// Prekę pristatysime į "įvestas miestas" per 1-3 dienas.

// ---
// 3 variantas (su nemokamu pristatymu)

// Prekės kaina : xx.xx €
// Prekę nemokamai pristatysime į "įvestas miestas" per 1-3 dienas.


var priceTag = prompt("Įveskite prekės kainą");
var delivery = confirm("Ar reikalingas pristatymas į namus?");

var priceTag = Number(priceTag);

if (delivery === false) // Jeigu pristatymo nereikia, spausdinam prekes kaina
                        //ir uzsakymo atsiemimo adresa
{
    console.log("Prekės kaina = " + priceTag.toFixed(2) + " EUR");
    console.log("Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a.");
} 

else if (delivery === true) // Jeigu pristatymas reikalingas - 
// issaukiam dar viena klausima - I kuri miesta reikia pristatyti
{
    var city = prompt("Į kurį miestą reikia pristatyti?");
    if ((priceTag >=50) || (city === "Vilnius")) //Tikriname dvi salygas - kaina >=50 arba miestas - Vilnius
    {
        var delivery = 0; //Jeigu bent viena salyga teisinga, atliekame siuos veiksmus
        var pricetag = priceTag.toFixed(2);
        console.log("Prekės kaina = " + priceTag + " EUR");
        console.log("Pristatymas = " + delivery + " EUR");
        console.log("Prekę nemokamai pristatysime į " + city + " per 1-3 darbo dienas.");   
    }

    else  //Jeigu salygos (kaina >=50 arba miestas - Vilnius), bent viena neteisinga, atliekame veiksmus
    {
        var delivery = 20;
        var pricetag = priceTag.toFixed(2);
        var total = priceTag + delivery;
        var total = total.toFixed(2);
        console.log("Prekės kaina = " + pricetag + " EUR");
        console.log("Pristatymas " + delivery + " EUR");
        console.log("Iš viso = " + total + " EUR");
        console.log("Prekę pristatysime į " + city + " per 1-3 darbo dienas."); 
    }
}

