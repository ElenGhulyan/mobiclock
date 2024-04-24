// import { randomSortingArray, closeNearColumns, randomSorting } from "./play.js";

let tableItems = document.querySelectorAll('.my-desk td');
let playTableItems = [];
let ship_count_number = 0;
let ship_count = 0;
let playButton = document.querySelector('.play');
let thTagName = document.querySelectorAll('.my-desk th');


tableItems.forEach((item) => {
    playTableItems.push(item.id);
});

let total_ships = 0

let selectedIds = [];
console.log(selectedIds)


//bolor dashter@ dardznum e kanach

let initShipElements = document.querySelectorAll('.initships');
initShipElements.forEach((item) => {
    item.addEventListener('click', initShip);
});

function initShip(event) {

    ship_count_number = ship_count = event.target.dataset.count; // 0 = 0 = data-count-i qnakin orinak 4
    total_ships = event.target.dataset.total;

    tableItems.forEach((item) => {
        if (item.textContent === '') {
            item.style.background = '#f9f9f9';
        }
    });

}


//table-i vra sexmeluc ashxaum e es functian

tableItems.forEach((item) => {
    item.addEventListener('click', tableClick)
});

let closedShipIndexes = [];
 function tableClick(event) {

    let nextSiblingItem = event.target.nextElementSibling;
    let previousSiblingItem = event.target.previousElementSibling;




    let nextRow = event.target.dataset.nextrow;
    let prevRow = event.target.dataset.prevrow;
    let currentIndex = parseInt(event.target.id.split('-')[1]);



    if (total_ships > 0) {
        if (ship_count > 0) {
            if (!selectedIds.includes(event.target.id)) {
                let rowIndex, columnIndex;
                [ rowIndex , columnIndex] = event.target.id.split('-');
                closedShipIndexes.push(parseInt(columnIndex));
                event.target.style.background = '#f9f9f9';
                // event.target.innerHTML = `<img src="images/ship.png" alt="" style="width: 40px">`;
                event.target.innerHTML = 'x';


                selectedIds.push(event.target.id);

                ship_count--;
                let pointerEvents = false;
                if (ship_count == 0) {
                    total_ships--;
                    ship_count = ship_count_number;
                    pointerEvents = true;
                }
                if(ship_count_number == 1){
                    setNearDisabledOne(event.target, pointerEvents);
                }
                else if (ship_count_number == 2){

                    setNearDisabledForTwo(event.target, pointerEvents);

                }
                else if(ship_count_number == 3){
                    setNearDisabledForThree(event.target, pointerEvents);
                }
                else if(ship_count_number == 4){
                    setNearDisabledForFore(event.target, pointerEvents);
                }

                //verdznum e ir koxqi elemetner@








                console.log(selectedIds + '   4444444444444411111111111111')

                if(selectedIds.length == 4){ //19

                    playButton.classList.add('disablid_play_button')
                    if(playButton.classList.contains("disablid_play_button")){
                        playButton.addEventListener("click", startGame)
                    }
                }





                //setNearDisabled(event.target, pointerEvents);

            } else {
                event.target.style.background = '#f9f9f9';
                event.target.innerHTML = '';




                selectedIds = selectedIds.filter((item) => {
                    return item !== event.target.id;

                })
                if (ship_count == ship_count_number) {
                    total_ships++
                }

                if (ship_count_number == 2){
                    setNearDisabledOne(event.target, false, false);
                }
                else if (ship_count_number == 3){
                    setNearDisabledForThree(event.target, false, false);
                }
                else if (ship_count_number == 4){
                    setNearDisabledForFore(event.target, false, false);
                }

                //verdznum e ir koxqi elemetner@
                //setNearDisabled(event.target, false, false);
            }
        }
    } else {
        alert('limit 0');
        let selectedShipCountElement = document.getElementById('ship' + ship_count_number);
        selectedShipCountElement.style.display = 'none';
    }

}

function startGame() {      // knopken sexmeluc random sharum e navakner@
    randomSorting(4, 1);
    randomSorting(3, 2);
    randomSorting(2, 3);
    randomSorting(1, 4);

    for(let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++){
            let cElement = document.getElementById('c-' + i + '-' + j);
            if (randomSortingArray[i][j] != 9 && randomSortingArray[i][j] != 0){
                cElement.innerText = 'X';
            }
        }
    }
}

function setNearDisabledOne(eventTargetElement, pointerEvents,  type = true) {
    eventTargetElement.style.pointerEvents = 'none';

    let elementId = eventTargetElement.id;

    let bgColor = '#f9f9f9';

    if (type) {
        bgColor = '#dedede';
    }


    let currentIndex = parseInt(eventTargetElement.id.split('-')[1]);

    let nextRow = eventTargetElement.dataset.nextrow;
    let prevRow = eventTargetElement.dataset.prevrow;


    let nextSiblingItem = eventTargetElement.nextElementSibling;
    let previousSiblingItem = eventTargetElement.previousElementSibling;

    if (nextSiblingItem && previousSiblingItem) {
        if(!selectedIds.includes(nextSiblingItem.id)){
            nextSiblingItem.style.background = bgColor;

            if(!nextSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    nextSiblingItem.classList.add('disabled');
                }else {
                    nextSiblingItem.classList.remove('disabled');
                }
            }
            if(previousSiblingItem.tagName == 'TH'){

                previousSiblingItem.classList.remove('disabled');
                previousSiblingItem.classList.add('th')
                console.log(previousSiblingItem)

            }


        }
        if(!selectedIds.includes(previousSiblingItem.id)){
            previousSiblingItem.style.background = bgColor;
            if(!previousSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    previousSiblingItem.classList.add('disabled');
                }else {
                    previousSiblingItem.classList.remove('disabled');
                }
            }


        }


    } else if (!nextSiblingItem) {
        if(!selectedIds.includes(previousSiblingItem.id)){
            previousSiblingItem.style.background = bgColor;
            if(!previousSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    previousSiblingItem.classList.add('disabled');
                }else {
                    previousSiblingItem.classList.remove('disabled');
                }
            }

        }

    }


    if (nextRow) {
        for (let i = currentIndex - 1; i <= currentIndex + 1; i++) {

            if(!selectedIds.includes(nextRow + i) && document.getElementById(nextRow + '-' + i)){
                document.getElementById(`${nextRow}-${i}`);

                if(!document.getElementById(nextRow + '-' + i).classList.contains('disabled')){
                    document.getElementById(nextRow + '-' + i).classList.add('disabled');
                }
            }

        }
    }
    if (prevRow) {
        for (let j = currentIndex - 1; j <= currentIndex + 1; j++) {

            if(!selectedIds.includes(prevRow + j) && document.getElementById(prevRow + '-' + j)){
                document.getElementById(`${prevRow}-${j}`);

                if(!document.getElementById(prevRow + '-' + j).classList.contains('disabled')){
                    document.getElementById(prevRow + '-' + j).classList.add('disabled')
                }
            }
        }
    }

}

function setNearDisabledForTwo(eventTargetElement, pointerEvents,  type = true){  //ete tayp@ true e uremn x@ drvac e
    eventTargetElement.style.pointerEvents = 'none';
    let currentIndex = parseInt(eventTargetElement.id.split('-')[1]);

    let nextRow = eventTargetElement.dataset.nextrow;
    let prevRow = eventTargetElement.dataset.prevrow;

    let nextSiblingItem = eventTargetElement.nextElementSibling;
    let previousSiblingItem = eventTargetElement.previousElementSibling;

    if (nextSiblingItem && previousSiblingItem) {
        if(!selectedIds.includes(nextSiblingItem.id)){

            if(!nextSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    nextSiblingItem.classList.add('disabled');
                }else {
                    nextSiblingItem.classList.remove('disabled');
                }
            }


        }
        if(!selectedIds.includes(previousSiblingItem.id)){

            if(!previousSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    previousSiblingItem.classList.add('disabled');
                }else {
                    previousSiblingItem.classList.remove('disabled');
                }
            }

        }



    } else if (!nextSiblingItem) {
        if(!selectedIds.includes(previousSiblingItem.id)){
            //previousSiblingItem.style.background = bgColor;

            if(!previousSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    previousSiblingItem.classList.add('disabled');
                }else {
                    previousSiblingItem.classList.remove('disabled');
                }
            }


        }

    }

    if (nextRow) {
        for (let i = currentIndex - 1; i <= currentIndex + 1; i+=2) {

            if(!selectedIds.includes(nextRow + i) && document.getElementById(nextRow + '-' + i)){
                document.getElementById(`${nextRow}-${i}`);
                if(!document.getElementById(nextRow + '-' + i).classList.contains('disabled')){
                    document.getElementById(nextRow + '-' + i).classList.add('disabled');
                }
             }

            if(ship_count == 2 ){
               let nextRowCurrentIndex = (`${nextRow}-${currentIndex}`);


                if(document.getElementById(nextRowCurrentIndex).textContent != '') {
                    let nextSecondStep = document.getElementById(nextRowCurrentIndex).dataset.nextrow;
                    if(nextSecondStep && !document.getElementById(nextSecondStep + "-"+ currentIndex).classList.contains('disabled')) {
                        document.getElementById(nextSecondStep + "-"+ currentIndex).classList.add('disabled');
                    }

                } else {
                    if(!document.getElementById(nextRowCurrentIndex).classList.contains('disabled')){
                        document.getElementById(nextRowCurrentIndex).classList.add('disabled');
                    }
                }

             }

        }
    }
    if (prevRow) {
        for (let j = currentIndex - 1; j <= currentIndex + 1; j+=2) {

            if(!selectedIds.includes(prevRow + j) && document.getElementById(prevRow + '-' + j)){
                document.getElementById(`${prevRow}-${j}`);
                if(!document.getElementById(prevRow + '-' + j).classList.contains('disabled')){
                    document.getElementById(prevRow + '-' + j).classList.toggle('disabled')
                }
            }

            if(ship_count == 2 ){

                let prevRowCurrentIndex = (`${prevRow}-${currentIndex}`);

                if(document.getElementById(prevRowCurrentIndex).textContent != '') {
                    let a = document.getElementById(prevRowCurrentIndex).dataset.prevrow;
                    if(a && !document.getElementById(a + "-"+ currentIndex).classList.contains('disabled')) {
                        document.getElementById(a + "-"+ currentIndex).classList.add('disabled');
                    }

                } else {
                    if(!document.getElementById(prevRowCurrentIndex).classList.contains('disabled')){
                        document.getElementById(prevRowCurrentIndex).classList.add('disabled');
                    }

                }

            }

        }
    }

    if(pointerEvents && nextSiblingItem?.textContent != '' ) {
        if(!nextSiblingItem?.nextElementSibling?.classList.contains('disabled')){
            nextSiblingItem?.nextElementSibling?.classList.add('disabled');
        }

    }
    if (pointerEvents && previousSiblingItem.textContent != '') {
        if(!previousSiblingItem.previousElementSibling.classList.contains('disabled')){
            previousSiblingItem.previousElementSibling.classList.add('disabled');
        }
    }
    thTagName.forEach((item) =>{
        console.log(item)
        if(item.tagName == 'TH'){
            item.classList.remove('disabled')
            item.classList.add('th')
        }
    })

}



function setNearDisabledForThree(eventTargetElement, pointerEvents,  type = true) {


    eventTargetElement.style.pointerEvents = 'none';
    let currentIndex = parseInt(eventTargetElement.id.split('-')[1]);

    let nextRow = eventTargetElement.dataset.nextrow;
    let prevRow = eventTargetElement.dataset.prevrow;


    let neextRow = eventTargetElement.dataset.nextrow;
    let preevRow = eventTargetElement.dataset.prevrow;

    console.log(neextRow + '777888')




        // console.log(document.getElementById(`${nextRow}-${i}`))


    console.log(preevRow + '9999555')
    // debugger


    let nextSiblingItem = eventTargetElement.nextElementSibling;
    let previousSiblingItem = eventTargetElement.previousElementSibling;



    if (nextSiblingItem && previousSiblingItem) {
        if(!selectedIds.includes(nextSiblingItem.id)){

            if(!nextSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    nextSiblingItem.classList.add('disabled');

                }else {
                    nextSiblingItem.classList.remove('disabled');
                }
            }
        }



        if(!selectedIds.includes(previousSiblingItem.id)){

            if(!previousSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {

                    previousSiblingItem.classList.add('disabled');
                }else {
                    previousSiblingItem.classList.remove('disabled');
                }
            }

        }




     } else if (nextSiblingItem) {
        if(!selectedIds.includes(nextSiblingItem.id)){


            if(!nextSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    nextSiblingItem.classList.add('disabled');
                }else {
                    nextSiblingItem.classList.remove('disabled');
                }
            }


        }

    }

    if (nextRow) {
        for (let i = currentIndex - 1; i <= currentIndex + 1; i+=2) {

            if(!selectedIds.includes(nextRow + i) && document.getElementById(nextRow + '-' + i)){
                document.getElementById(`${nextRow}-${i}`);

                if(!document.getElementById(nextRow + '-' + i).classList.contains('disabled')){
                    document.getElementById(nextRow + '-' + i).classList.add('disabled');

                }
            }

            if(ship_count == 3 ){
                let nextRowCurrentIndex = (`${nextRow}-${currentIndex}`);
                let prevRowCurrentIndex = (`${prevRow}-${currentIndex}`);

                if(document.getElementById(nextRowCurrentIndex).textContent != '') {
                    let nextSecondStep = document.getElementById(nextRowCurrentIndex).dataset.nextrow;
                    let ggg
                    if(nextSecondStep && document.getElementById(nextSecondStep + "-"+ currentIndex).hasChildNodes()) {
                        ggg = document.getElementById(nextSecondStep + "-"+ currentIndex).dataset.nextrow
                        document.getElementById(ggg + "-"+ currentIndex).classList.add('disabled');
                    }

                } else {
                    if(!document.getElementById(nextRowCurrentIndex).hasChildNodes()){
                        document.getElementById(nextRowCurrentIndex).classList.add('disabled');
                    }
                }

            }

        }
    }

    if (prevRow) {
        console.log(prevRow  + ' pr')

        for (let j = currentIndex - 1; j <= currentIndex + 1; j+=2) {

            if(!selectedIds.includes(prevRow + j) && document.getElementById(prevRow + '-' + j)){
                document.getElementById(`${prevRow}-${j}`);
                if(!document.getElementById(prevRow + '-' + j).classList.contains('disabled')){
                    document.getElementById(prevRow + '-' + j).classList.toggle('disabled')


                }
            }

            if(ship_count == 3 ){

                let prevRowCurrentIndex = (`${prevRow}-${currentIndex}`);

                if(document.getElementById(prevRowCurrentIndex).textContent != '') {
                    let prevSecondStep = document.getElementById(prevRowCurrentIndex).dataset.prevrow;
                    let ggg1


                    if(prevSecondStep && document.getElementById(prevSecondStep + "-"+ currentIndex).hasChildNodes()) {
                        console.log('ooooo')
                        console.log( document.getElementById(prevSecondStep + "-"+ currentIndex).dataset.prevrow)
                        ggg1 = document.getElementById(prevSecondStep + "-"+ currentIndex).dataset.prevrow
                        console.log('ooooo')
                        document.getElementById(ggg1 + "-"+ currentIndex)?.classList.add('disabled');
                    }

                } else {
                    if(!document.getElementById(prevRowCurrentIndex).hasChildNodes()){
                        document.getElementById(prevRowCurrentIndex).classList.add('disabled');
                    }
                }

            }

        }
    }






    if( nextSiblingItem?.nextElementSibling){
        let neeeext = nextSiblingItem.nextElementSibling;
        if(pointerEvents && neeeext.textContent != '') {
            if(!neeeext.nextElementSibling?.classList.contains('disabled')){
                neeeext.nextElementSibling?.classList.add('disabled');


            }
        }
    }




    if(previousSiblingItem.previousElementSibling){
        let preeev = previousSiblingItem.previousElementSibling;
        if (pointerEvents && preeev.textContent != '' ) {
            if(!preeev.nextElementSibling.classList.contains('disabled')){
                preeev.previousElementSibling.classList.add('disabled');
                console.log(preeev.tagName)
            }
        }

    }
    thTagName.forEach((item) =>{
        console.log(item)
        if(item.tagName == 'TH'){
            item.classList.remove('disabled')
            item.classList.add('th')
        }
    })




}






function setNearDisabledForFore(eventTargetElement, pointerEvents) {
    closedShipIndexes.sort();
    console.log(closedShipIndexes, '-----------------------')
    eventTargetElement.style.pointerEvents = 'none';
    let currentIndex = parseInt(eventTargetElement.id.split('-')[1]);

    let nextRow = eventTargetElement.dataset.nextrow;
    let prevRow = eventTargetElement.dataset.prevrow;



    let neextRow = eventTargetElement.dataset.nextrow;
    let preevRow = eventTargetElement.dataset.prevrow;

    console.log( nextRow + '   dgvdsgds')

    console.log(neextRow + '  777888')




    // console.log(document.getElementById(`${nextRow}-${i}`))


    console.log(preevRow + '9999555')
    // debugger


    let nextSiblingItem = eventTargetElement.nextElementSibling;
    let previousSiblingItem = eventTargetElement.previousElementSibling;
    let neeeext = nextSiblingItem?.nextElementSibling
    let preeev = previousSiblingItem?.previousElementSibling







    console.log(previousSiblingItem,  nextSiblingItem )

    if (nextSiblingItem && previousSiblingItem) {
        if(!selectedIds.includes(nextSiblingItem.id)){

            if(!nextSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    nextSiblingItem.classList.add('disabled');

                }else {
                    nextSiblingItem.classList.remove('disabled');
                }
            }
        }



        if(!selectedIds.includes(previousSiblingItem.id)){

            if(!previousSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {

                    previousSiblingItem.classList.add('disabled');
                }else {
                    previousSiblingItem.classList.remove('disabled');
                }
            }

        }




    } else if (nextSiblingItem) {
        if(!selectedIds.includes(nextSiblingItem.id)){


            if(!nextSiblingItem.classList.contains('disabled')){
                if(pointerEvents) {
                    nextSiblingItem.classList.add('disabled');
                }else {
                    nextSiblingItem.classList.remove('disabled');
                }
            }


        }

    }

    if (nextRow) {
        for (let i = currentIndex - 1; i <= currentIndex + 1; i+=2) {

            if(!selectedIds.includes(nextRow + i) && document.getElementById(nextRow + '-' + i)){
                document.getElementById(`${nextRow}-${i}`);




                if(!document.getElementById(nextRow + '-' + i).classList.contains('disabled')){
                    document.getElementById(nextRow + '-' + i).classList.add('disabled');

                }
            }

            if(ship_count == 4 ){
                let nextRowCurrentIndex = (`${nextRow}-${currentIndex}`);
                let prevRowCurrentIndex = (`${prevRow}-${currentIndex}`);




                if(document.getElementById(nextRowCurrentIndex).textContent != '') {
                    let nextSecondStep = document.getElementById(nextRowCurrentIndex).dataset.nextrow;
                    let ggg = document.getElementById(nextSecondStep + "-"+ currentIndex).dataset.nextrow
                    let ccc = document.getElementById(ggg + "-"+ currentIndex).dataset.nextrow


                    if(nextSecondStep && document.getElementById(nextSecondStep + "-"+ currentIndex).hasChildNodes()) {



                        document.getElementById(ccc + "-"+ currentIndex).classList.add('disabled');
                    }

                } else {
                    if(!document.getElementById(nextRowCurrentIndex).hasChildNodes()){
                        document.getElementById(nextRowCurrentIndex).classList.add('disabled');
                    }
                }

            }

        }
    }

    if (prevRow) {
        console.log(prevRow  + ' pr')

        for (let j = currentIndex - 1; j <= currentIndex + 1; j+=2) {

            if(!selectedIds.includes(prevRow + j) && document.getElementById(prevRow + '-' + j)){
                document.getElementById(`${prevRow}-${j}`);
                if(!document.getElementById(prevRow + '-' + j).classList.contains('disabled')){
                    document.getElementById(prevRow + '-' + j).classList.toggle('disabled')


                }
            }

            if(ship_count == 4 ){

                let prevRowCurrentIndex = (`${prevRow}-${currentIndex}`);



                if(document.getElementById(prevRowCurrentIndex).textContent != '') {
                    let prevSecondStep = document.getElementById(prevRowCurrentIndex).dataset.prevrow;
                    let ggg1 = document.getElementById(prevSecondStep + "-"+ currentIndex).dataset.prevrow
                    let ccc1 = document.getElementById(ggg1 + "-"+ currentIndex).dataset.prevrow


                    if(prevSecondStep && document.getElementById(prevSecondStep + "-"+ currentIndex).hasChildNodes()) {

                        document.getElementById(ccc1 + "-"+ currentIndex)?.classList.add('disabled');
                    }

                } else {
                    if(!document.getElementById(prevRowCurrentIndex).hasChildNodes()){
                        document.getElementById(prevRowCurrentIndex).classList.add('disabled');
                    }
                }

            }

        }
    }




    if(neeeext?.nextElementSibling){
        let nenxtnext = neeeext.nextElementSibling;
        if(pointerEvents && nenxtnext.textContent != '') {
            if(!nenxtnext.nextElementSibling?.classList.contains('disabled')){
                nenxtnext.nextElementSibling?.classList.add('disabled');


            }
        }
    }



    if(preeev?.previousElementSibling){
        let prevprev = preeev.previousElementSibling;
        if (pointerEvents && prevprev.textContent != '' ) {

            if(!prevprev.nextElementSibling?.classList.contains('disabled')){
                prevprev.previousElementSibling?.classList.add('disabled');
                console.log(prevprev.tagName)
            }


        }
    }

    thTagName.forEach((item) =>{
        console.log(item)
        if(item.tagName == 'TH'){
            item.classList.remove('disabled')
            item.classList.add('th')
        }
    })

    // if(preeev.previousElementSibling.tagName = 'TH'){
    //     preeev.previousElementSibling.tagName.id
    // }





}

//-------------------table-u vra sexmeluc ashxaum e es functian






// play.js_______________________












let randomSortingArray = new Array(10);
for (let i=0; i<10; i++) {
    randomSortingArray[i] = new Array(10);
    for(let j=0; j<10; j++) {
        randomSortingArray[i][j] = 0;
    }

}

function randomSorting(shipType, count) {
    if(count > 0) {
        let newCount = parseInt(count);
        let column = Math.floor(Math.random() * 9);
        let row = Math.floor(Math.random() * 9);

        if(shipType == 4) {
            let minIndex = column;
            let maxIndex = column;
            if(randomSortingArray[row][column] == 0) {
                randomSortingArray[row][column] = 4;

                if(column == 0) {
                    if(randomSortingArray[row][column + 1] == 0) {
                        randomSortingArray[row][column + 1] = 4;
                    }
                    if(randomSortingArray[row][column + 2] == 0) {
                        randomSortingArray[row][column + 2] = 4;
                    }
                    if(randomSortingArray[row][column + 3] == 0) {
                        randomSortingArray[row][column + 3] = 4;
                    }

                    minIndex = column;
                    maxIndex = column + 3;

                } else if(column == 9) {
                    if(randomSortingArray[row][column - 3] == 0) {
                        randomSortingArray[row][column - 3] = 4;
                    }
                    if(randomSortingArray[row][column - 2] == 0) {
                        randomSortingArray[row][column - 2] = 4;
                    }
                    if(randomSortingArray[row][column - 1] == 0) {
                        randomSortingArray[row][column - 1] = 4;
                    }
                    if(randomSortingArray[row][column - 1] == 0) {
                        randomSortingArray[row][column - 1] = 4;
                    }
                    minIndex = column - 3;
                    maxIndex = column;
                } else {
                    if(randomSortingArray[row][column + 1] == 0) {
                        randomSortingArray[row][column + 1] = 4;
                        maxIndex = column + 1;
                    }
                    if(randomSortingArray[row][column + 2] == 0) {
                        randomSortingArray[row][column + 2] = 4
                        maxIndex = column + 2;
                        minIndex = column - 1;

                        if(randomSortingArray[row][column - 1] == 0) {
                            randomSortingArray[row][column - 1] = 4;
                        }

                    } else {
                        if(randomSortingArray[row][column - 1] == 0) {
                            randomSortingArray[row][column - 1] = 4;
                        }

                        if(randomSortingArray[row][column - 2] == 0) {
                            randomSortingArray[row][column - 2] = 4;
                        }
                        minIndex = column - 2;
                    }
                }

            }

            //koxqer@ pakelu funkcia
            closeNearColumns(row, minIndex, maxIndex, null, null, shipType, newCount);


        }

        else if(shipType == 3){
            let minIndex = column;
            let maxIndex = column;
            let maxRow = row;
            let minRow = row;
            let result = false;
            if(randomSortingArray[row][column] == 0){


                if(column == 0) {
                    let canSetLeftRight = true;
                    for(let i = 1; i < 3; i++){
                        if(randomSortingArray[row][i] != 0) {
                            canSetLeftRight = false;
                        }
                    }

                    if(canSetLeftRight) {
                        randomSortingArray[row][column + 1] = 3;
                        randomSortingArray[row][column] = 3;
                        randomSortingArray[row][column + 2] = 3;
                        minIndex = column;
                        maxIndex = column + 2;
                    } else {
                        let canSetTopBottom = true;

                        if(row == 0) {
                            for(let i = 1; i < 3; i++){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }
                        } else if(row == 9) {
                            for(let i = 7; i <= 9; i++){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }
                        } else {
                            for(let i = row - 1; i <= row + 1; i++){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }
                        }

                        if(canSetTopBottom) {
                            randomSortingArray[row + 1][column] = 3;
                            randomSortingArray[row][column] = 3;
                            randomSortingArray[row + 2][column] = 3;

                            maxRow = row + 2;
                        }


                    }

                    result = true;


                }
                else if(column == 9) {
                    let canSetLeftRight = true;
                    for(let i = 7; i < 10; i++){
                        if(randomSortingArray[row][i] != 0) {
                            canSetLeftRight = false;
                        }
                    }

                    if(canSetLeftRight) {
                        randomSortingArray[row][column - 1] = 3;
                        randomSortingArray[row][column] = 3;
                        randomSortingArray[row][column - 2] = 3;
                        minIndex = column - 2;
                    } else {
                        let canSetTopBottom = true;

                        if(row == 0) {
                            for(let i = 0; i < 3; i++){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }
                        }

                        if(canSetTopBottom) {
                            randomSortingArray[row + 1][column] = 3;
                            randomSortingArray[row][column] = 3;
                            randomSortingArray[row + 2][column] = 3;
                            maxRow = row + 2
                        }


                    }
                    result = true;
                }
                else {

                    let canSetLeftRight = true;


                    for(let i = column - 1; i <= column + 1; i+=2) {
                        if(randomSortingArray[row][i] != 0) {
                            canSetLeftRight = false;
                        }
                    }

                    if(canSetLeftRight) {
                        randomSortingArray[row][column - 1] = 3;
                        randomSortingArray[row][column] = 3;
                        randomSortingArray[row][column + 1] = 3;
                        minIndex = column - 1;
                        maxIndex = column + 1;
                    } else {
                        let canSetTopBottom = true;

                        if(row == 0) {
                            for(let i = row - 1; i <= row + 1; i+=2){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }

                            if(canSetTopBottom) {
                                randomSortingArray[row][column] = 3;
                                randomSortingArray[row + 1][column] = 3;
                                randomSortingArray[row + 2][column] = 3;
                                maxRow = row + 2;

                            }
                        } else if(row == 9) {
                            for(let i = 7; i <= 9; i++){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }
                            if(canSetTopBottom) {
                                randomSortingArray[row - 1][column] = 3;
                                randomSortingArray[row - 2][column] = 3;
                                randomSortingArray[row][column] = 3;
                                maxRow = row + 2;

                            }
                        } else {
                            for(let i = row - 1; i <= row + 1; i++){
                                if(randomSortingArray[i][column] != 0) {
                                    canSetTopBottom = false;
                                }
                            }

                            if(canSetTopBottom) {
                                randomSortingArray[row - 1][column] = 3;
                                randomSortingArray[row][column] = 3;
                                randomSortingArray[row + 1][column] = 3;
                                maxRow = row + 2;

                            }
                        }


                    }

                    result = true;
                }

                if(result) {
                    //koxqer@ pakelu funkcia
                    closeNearColumns(row, minIndex, maxIndex, maxRow, minRow, shipType, newCount);

                    randomSorting(shipType, newCount - 1);
                }


            } else {
                randomSorting(shipType, newCount);

            }
        }

        else if(shipType == 2) {
            //
            // console.log("col 2=" + column + ', row 2 = ' + row);
            let minIndex = column;
            let maxIndex = column;
            let maxRow = row;
            let minRow = row;
            let result = false;
            if(randomSortingArray[row][column] == 0) {


                if(randomSortingArray[row][column + 1] == 0) {
                    randomSortingArray[row][column] = 2;
                    randomSortingArray[row][column + 1] = 2;
                    maxIndex = column + 1;
                    result = true;
                }
                else if (randomSortingArray[row][column - 1] == 0) {
                    randomSortingArray[row][column] = 2;
                    randomSortingArray[row][column - 1] = 2;

                    minIndex = column - 1;
                    result = true;
                }
                else if (randomSortingArray[row - 1][column] == 0) {
                    randomSortingArray[row][column] = 1;
                    randomSortingArray[row - 1][column] = 1;
                    minRow = row - 1;
                    result = true;
                }
                else if (randomSortingArray[row + 1][column] == 0) {
                    randomSortingArray[row][column] = 2;
                    randomSortingArray[row + 1][column] = 2;
                    maxRow = row + 1;
                    result = true;
                }
                else {
                    randomSorting(shipType, newCount);
                }
                if(result){
                    closeNearColumns(row, minIndex, maxIndex, maxRow, minRow, shipType, newCount);
                    randomSorting(shipType, newCount - 1);

                }


            } else {
                randomSorting(shipType, newCount);
            }


        }
        else if(shipType == 1) {

            if(randomSortingArray[row][column] == 0){
                randomSortingArray[row][column] = 1;

                if(column != 9){
                    randomSortingArray[row][column + 1] = 9;
                }
                if(column !== 0){
                    randomSortingArray[row][column - 1] = 9;
                }



                if(randomSortingArray[row + 1]){
                    if(column != 9){
                        randomSortingArray[row + 1][column + 1] = 9;
                    }
                    if(column !== 0){
                        randomSortingArray[row + 1][column - 1] = 9;
                    }
                    randomSortingArray[row + 1][column] = 9;
                }

                if(randomSortingArray[row - 1]){
                    if(column != 9){
                        randomSortingArray[row - 1][column + 1] = 9;
                    }
                    if(column !== 0){
                        randomSortingArray[row - 1][column - 1] = 9;
                    }

                    randomSortingArray[row - 1][column] = 9;

                }
                let elementOne = document.getElementById('c-' + row + '-' + column );
                elementOne.classList.add("ship-"+ shipType + "-" + newCount);
                elementOne.dataset.ship = "ship-"+ shipType+ "-" + newCount;



                newCount = parseInt(count) - 1;

            }
            randomSorting(shipType, newCount);
        }


    }
}

function closeNearColumns(row, min, max, maxRow = null, minRow = null, shipType, newCount = 0){
    if(max != 9){
        randomSortingArray[row][max + 1] = 9;
    }
    if(min !== 0){
        randomSortingArray[row][min - 1] = 9;
    }


    if(minRow != null && maxRow != null && maxRow != minRow) {
        for (let i = minRow; i <= maxRow; i++) {
            randomSortingArray[i][min - 1] = 9;
            randomSortingArray[i][min + 1] = 9;
            let elementByRow = document.getElementById('c-' + i + '-' + min);

            elementByRow.classList.add("ship-"+ shipType + "-" + newCount);
            elementByRow.dataset.ship = "ship-"+ shipType+ "-" + newCount;
        }
    } else {
        for(let i = min; i <= max; i++) {

            let elementByColumn = document.getElementById('c-' + row + '-' + i);

            elementByColumn.classList.add("ship-"+ shipType+ "-" + newCount);
            elementByColumn.dataset.ship = "ship-"+ shipType+ "-" + newCount;

            if(randomSortingArray[row + 1]){
                if(max != 9){
                    randomSortingArray[row + 1][i + 1] = 9;
                }
                if(min != 0){
                    randomSortingArray[row + 1][i - 1] = 9;
                }
                randomSortingArray[row + 1][i] = 9;
            }

            if(randomSortingArray[row - 1]){
                if(max != 9){
                    randomSortingArray[row - 1][i + 1] = 9;
                }
                if(min != 0){
                    randomSortingArray[row - 1][i - 1] = 9;
                }

                randomSortingArray[row - 1][i] = 9;

            }
        }
    }


}


let concurrent_desk = document.querySelectorAll('.concurrent-desk td');


concurrent_desk.forEach((item)=>{
    item.addEventListener('click',toShootFunction );
})
function  toShootFunction(event){
    if(event.target.textContent == 0 ){
        event.target.classList.add('disabled');
        event.target.style.opacity = 0;

        setTimeout(() => {
            shootComputerFunction();
        }, 200);


    }
    else if(event.target.textContent == 'X' ){
        event.target.classList.remove('c-td');
        event.target.style.background = '#a8cc6d';

        let dataShip = event.target.dataset.ship;

        event.target.classList.remove(dataShip);
        let dataShipClass = document.querySelectorAll('.' +dataShip)
        if(dataShipClass.length == 0){
            let elementsByAttribute = document.querySelectorAll("[data-ship="+dataShip+"]");
            elementsByAttribute.forEach((item)=>{
                item.style.background = 'rgb(208 163 180)';

            })
        }


    }
}

let shootingArray = new Array();





let rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
function shootComputerFunction(shootColumn){  // erb krakum e hamakargich@
    let column;
    let letter;

    let shootItemID = playTableItems[Math.floor(Math.random()*playTableItems.length)];

    console.log("shootItemID: " + shootItemID);

    playTableItems.splice(playTableItems.indexOf(shootItemID), 1);
    console.log("playTableItems: " + playTableItems);
    //a-7 -> [a, 7]
    [letter, column] = shootItemID.split('-');

    shootColumn = document.getElementById(letter + '-' + column);

    console.log(shootingArray, shootColumn);

    if(!shootingArray.includes(letter + '-' + column)) {
        if(shootColumn.textContent != ''){
            shootColumn.classList.add('shoot');
            shootingArray.push(letter + '-' + column);

            setTimeout(() => {
                shootComputerCloseFunction(letter, column);
            }, 1000);


        } else {
            shootColumn.classList.add('shoot-empty');
            shootingArray.push(letter + '-' + column);

        }
    } else {
        shootComputerFunction();
    }


}

function shootComputerCloseFunction(row, column ){

    let rowIndex = row;
    let columnIndex = column;


    let columnIndexNext = parseInt(column)+1;
    let columnIndexPrev = parseInt(column)-1;
    let element
    element = document.getElementById(rowIndex + '-' + columnIndex);


    console.log('jsjjdjdjjdj')
    console.log(element);
    console.log('jsjjdjdjjdj')
    let elementPrev = element.dataset.prevrow
    let elementNext = element.dataset.nextrow
    let elementPrevId = document.getElementById(elementPrev +'-'+ columnIndex);
    let elementNextId = document.getElementById(elementNext +'-'+ columnIndex);

    console.log(elementPrev + ' preeev')


    console.log('ccccccccccc')
    console.log(elementPrev)
    console.log('ccccccccccc');

    console.log('vvvvvvvvvv')
    console.log(elementPrevId)
    console.log('vvvvvvvvvv')

    console.log(columnIndexNext +' next');
    console.log(columnIndexPrev + ' prev ')
    if(column != 10){
        columnIndex = parseInt(column)+1 ;

     }

    if(column != 10 &&  element.nextElementSibling.textContent == ''){
         columnIndex = parseInt(column)-1 ;
    }

    if(column == 10){
        columnIndex = column - 1;
    }

    if(element.nextElementSibling.textContent == '' && element.previousElementSibling.textContent == ''){

        if(elementNextId.textContent == '' && !shootingArray.includes(elementNext +'-'+ column) ){
            columnIndex = column;
            rowIndex = elementNext

        }else{
            console.log("elementPrev: " + elementPrev);
            rowIndex = elementPrev;
            columnIndex = column;
        }

    }




    element = document.getElementById(rowIndex + '-' + columnIndex)

    console.log("cccccc: " + rowIndex + '-' + columnIndex);
    playTableItems.splice(playTableItems.indexOf(rowIndex + '-' + columnIndex), 1);
    console.log(playTableItems);
    if(!shootingArray.includes(rowIndex + '-' + columnIndex)) {
        if(element.textContent != ''){
            element.classList.add('shoot');
            shootingArray.push(rowIndex + '-' + columnIndex);
            //shootComputerFunction();

            setTimeout(() => {
                shootComputerCloseFunction(rowIndex, columnIndex);
            }, 1000);


        } else {
            element.classList.add('shoot-empty');
            shootingArray.push(rowIndex + '-' + columnIndex);
        }
    } else {
        setTimeout(() => {
            shootComputerFunction();
        }, 1000);


    }


}

// let thTagName = document.querySelectorAll('.my-desk th');
// thTagName.forEach((item) =>{
//     console.log(item)
//     if(item.tagName == 'TH'){
//         item.classList.remove('disabled')
//         item.classList.add('th')
//     }
// })



// randomSootComputer()
/*
*    0 0 0 0 1 0
*
* */