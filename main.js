var main = function() {

    var text = document.getElementById("text")
    var svar = document.getElementById("svar")
    //var text = document.createTextNode("");
    var vansterknapp = document.getElementById("vanster")
    var hogerknapp = document.getElementById("hoger")
    //var vansterknapp = document.createElement("button")
    //vansterknapp.innerText = "Vänster"
    //document.body.appendChild(text);
    //document.body.appendChild(vansterknapp)

    var poang = document.getElementById("poang")

    var gissa = function () {
        var slump = Math.random();
        console.log(slump)

        if (slump < 0.5) {
            text.innerText = "<"
        } else {
            text.innerText = ">"
        }

        hogerknapp.onclick = function () {
            if (slump < 0.5) {
                svar.innerText = "Loser"
            } else {
                svar.innerText = "Winner"

                var poangint = parseInt(poang.innerText)
                poang.innerText = poangint + 1
            }

            gissa()
        }

        vansterknapp.onclick = function () {
            if (slump < 0.5) {
                svar.innerText = "Winner"

                var poangint = parseInt(poang.innerText)
                poang.innerText = poangint + 1
            } else {
                svar.innerText = "Loser"
            }

            gissa()
        }
    }

    gissa()

    //for (var i = 0; i < 10; null) {
    //    i = i + 1
    //    console.log(i)
    //}
};





window.onload = function () {
  main();
};