
let booleanVar=false;

function scaryButton() {
    const cute = document.getElementById('cuteGhost');
    const scary = document.getElementById('scaryGhost');

    if (!booleanVar) {
        scary.style.display = "block";
        cute.style.display = "none";
        booleanVar = true;
    } else {
        scary.style.display = "none";
        cute.style.display = "block";
        booleanVar = false;
    }
}
