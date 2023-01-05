stanut = "";
coca = [];

function preload() {
    vivo = createCapture(VIDEO);
    vivo.hide();

}


function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();


}

function playwifi() {
    modelcoco = ml5.objectDetector("cocssd", modelcocnut);
    document.getElementById("stawi").innerHTML = "I am ready to spy";
    coca_nom=document.getElementById("ion").value;
   
}

function draw() {
    image(vivo, 0, 0, 480, 380);
    if (stanut != "") {
        modelcoco.detect(vivo, recoc);
        for (i = 0; i < coca.length; i++) {
             if (coca[i].label == coca_nom) {
        document.getElementById("stawi").innerHTML = coca_nom + " has been found"
    }
        }

    }
}

function recoc(e, r) {
    if (e) {
        console.error(e);
    } else {
        console.log(r);
        coca = r;
    }
}

function modelcocnut() {
    console.log("YAYAYAYAYAYAYAYAYAYAYAYAYAYAYAY!!!!!!!");
    stanut = true;
    vivo.loop();
    vivo.volume(0);
    vivo.speed(1);
}