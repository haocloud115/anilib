var FirstPart = '<img src="';

var pics = [];
    pics[0]="./img/gesugao/01.jpg";
    pics[1]="./img/gesugao/02.jpg";
    pics[2]="./img/gesugao/03.jpg";
    pics[3]="./img/gesugao/04.jpg";
    pics[4]="./img/gesugao/05.jpg";
    pics[5]="./img/gesugao/06.jpg";
    pics[6]="./img/gesugao/07.jpg";
    pics[7]="./img/gesugao/08.jpg";
    pics[8]="./img/gesugao/09.jpg";
    pics[9]="./img/gesugao/10.jpg";
function shuffle(array) {
    for (i = array.length; i > 1; i--) {
        // Pick random element to swap. 
        var j = Math.ceil(Math.random() * (i-1));
        var tmp = array[j]; 
        array[j] = array[i-1]; 
        array[i-1] = tmp; 
    }
}

function printImages() {
    shuffle(pics);
    for (i=0; i<pics.length; i++)
	document.write(FirstPart + pics[i] + LastPart);
}