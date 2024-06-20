var lettres = ["abcdef", "GHIJKL", "mnopqr", "STUVWX", "yz0123","456789","<,?;.>", "/:§!*µ", "ù%*µ$£", "¤&é'(è","-_çà)=", "/*-+\\", "~#{[|`", "^@]}ëê", '^ûîà@"',"[()]","{ô}","ÊEeéèêë","/\\"];
var nbTests = 18;  // 19-1
var index = 0;

function verifie()
{
    console.log("index : " + index);

    if (index <= nbTests) {

        // Modification de la réponse attendue
        document.getElementById("reponseAttendue").textContent = lettres[index];
        console.log(lettres[index]);

        // Saisie réponse élève
        var v1 = $("#reponseEleve").val();

        // Saisie de la réponse attendue
        var v2 = document.getElementById("reponseAttendue").textContent;

        // comparaison entre la réponse élève et la réponse attendue
        if (v1 == v2) {
            alert("Bonne réponse !");
            document.getElementById("reponseEleve").value= "";
            index++;
            if (index > nbTests) {
                // On cache les éléments et on met un fond vert
                $("body").css("background-color" , "green");
                $("#blabla").hide();
                $("#reponseAttendue").hide();
                $("#reponseEleve").hide();
                $("#verification").hide();    
                
                alert("Fin du test !");
            } else {
                document.getElementById("reponseAttendue").textContent = lettres[index];
            }

        } else {
            alert("Mauvaise réponse ! Essayez encore !");  // Ne devrait pas arriver car les éléments ont été cachés auparavant
        }

    } else
    {
        alert("Fin du test !");
    }

}



function initialise()
{
    // Initialisation de la première réponse attendue
    index = 0;
    document.getElementById("reponseAttendue").textContent = lettres[index];

}



$(document).ready(function ()
{
    // association click sur le bouton = ayant pour id "egal"
    // appel de la fonction addi

    initialise();
    $("#verification").click(verifie);

});