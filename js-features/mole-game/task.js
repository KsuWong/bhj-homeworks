let winCounter = 0;
let lostCounter = 0;


function getHole(index) {
	return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 10; index++) {
	let hole = getHole(index);
	hole.onclick = () => {
		if (hole.classList.contains('hole_has-mole')) {
			winCounter += 1;
			document.getElementById("dead").textContent = winCounter;
            if (winCounter === 10) {
                alert("Вы победили!");
                next ();
            }
            
		} else {
			lostCounter += 1;
			document.getElementById("lost").textContent = lostCounter;
		    if (lostCounter === 5) {
			    alert("Вы проиграли");
                next ();
            }
		}

        function next(){
            winCounter = 0;
            lostCounter = 0;
            dead.textContent = winCounter;
            lost.textContent = lostCounter;
        }
	}
}