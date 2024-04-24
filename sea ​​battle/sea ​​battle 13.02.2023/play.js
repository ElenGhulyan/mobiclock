//
//  let randomSortingArray = new Array(10);
// for (let i=0; i<10; i++) {
//     randomSortingArray[i] = new Array(10);
//     for(let j=0; j<10; j++) {
//         randomSortingArray[i][j] = 0;
//     }
//
// }
//
//  function randomSorting(shipType, count) {
//     if(count > 0) {
//         let newCount = parseInt(count);
//         let column = Math.floor(Math.random() * 9);
//         let row = Math.floor(Math.random() * 9);
//
//         if(shipType == 4) {
//             let minIndex = column;
//             let maxIndex = column;
//             if(randomSortingArray[row][column] == 0) {
//                 randomSortingArray[row][column] = 4;
//
//                 if(column == 0) {
//                     if(randomSortingArray[row][column + 1] == 0) {
//                         randomSortingArray[row][column + 1] = 4;
//                     }
//                     if(randomSortingArray[row][column + 2] == 0) {
//                         randomSortingArray[row][column + 2] = 4;
//                     }
//                     if(randomSortingArray[row][column + 3] == 0) {
//                         randomSortingArray[row][column + 3] = 4;
//                     }
//
//                     minIndex = column;
//                     maxIndex = column + 3;
//
//                 } else if(column == 9) {
//                     if(randomSortingArray[row][column - 3] == 0) {
//                         randomSortingArray[row][column - 3] = 4;
//                     }
//                     if(randomSortingArray[row][column - 2] == 0) {
//                         randomSortingArray[row][column - 2] = 4;
//                     }
//                     if(randomSortingArray[row][column - 1] == 0) {
//                         randomSortingArray[row][column - 1] = 4;
//                     }
//                     if(randomSortingArray[row][column - 1] == 0) {
//                         randomSortingArray[row][column - 1] = 4;
//                     }
//                     minIndex = column - 3;
//                     maxIndex = column;
//                 } else {
//                     if(randomSortingArray[row][column + 1] == 0) {
//                         randomSortingArray[row][column + 1] = 4;
//                         maxIndex = column + 1;
//                     }
//                     if(randomSortingArray[row][column + 2] == 0) {
//                         randomSortingArray[row][column + 2] = 4
//                         maxIndex = column + 2;
//                         minIndex = column - 1;
//
//                         if(randomSortingArray[row][column - 1] == 0) {
//                             randomSortingArray[row][column - 1] = 4;
//                         }
//
//                     } else {
//                         if(randomSortingArray[row][column - 1] == 0) {
//                             randomSortingArray[row][column - 1] = 4;
//                         }
//
//                         if(randomSortingArray[row][column - 2] == 0) {
//                             randomSortingArray[row][column - 2] = 4;
//                         }
//                         minIndex = column - 2;
//                     }
//                 }
//
//             }
//
//             //koxqer@ pakelu funkcia
//             closeNearColumns(row, minIndex, maxIndex, null, null, shipType, newCount);
//
//
//         }
//
//         else if(shipType == 3){
//             let minIndex = column;
//             let maxIndex = column;
//             let maxRow = row;
//             let minRow = row;
//             let result = false;
//             if(randomSortingArray[row][column] == 0){
//
//
//                 if(column == 0) {
//                     let canSetLeftRight = true;
//                     for(let i = 1; i < 3; i++){
//                         if(randomSortingArray[row][i] != 0) {
//                             canSetLeftRight = false;
//                         }
//                     }
//
//                     if(canSetLeftRight) {
//                         randomSortingArray[row][column + 1] = 3;
//                         randomSortingArray[row][column] = 3;
//                         randomSortingArray[row][column + 2] = 3;
//                         minIndex = column;
//                         maxIndex = column + 2;
//                     } else {
//                         let canSetTopBottom = true;
//
//                         if(row == 0) {
//                             for(let i = 1; i < 3; i++){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//                         } else if(row == 9) {
//                             for(let i = 7; i <= 9; i++){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//                         } else {
//                             for(let i = row - 1; i <= row + 1; i++){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//                         }
//
//                         if(canSetTopBottom) {
//                             randomSortingArray[row + 1][column] = 3;
//                             randomSortingArray[row][column] = 3;
//                             randomSortingArray[row + 2][column] = 3;
//
//                             maxRow = row + 2;
//                         }
//
//
//                     }
//
//                     result = true;
//
//
//                 }
//                 else if(column == 9) {
//                     let canSetLeftRight = true;
//                     for(let i = 7; i < 10; i++){
//                         if(randomSortingArray[row][i] != 0) {
//                             canSetLeftRight = false;
//                         }
//                     }
//
//                     if(canSetLeftRight) {
//                         randomSortingArray[row][column - 1] = 3;
//                         randomSortingArray[row][column] = 3;
//                         randomSortingArray[row][column - 2] = 3;
//                         minIndex = column - 2;
//                     } else {
//                         let canSetTopBottom = true;
//
//                         if(row == 0) {
//                             for(let i = 0; i < 3; i++){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//                         }
//
//                         if(canSetTopBottom) {
//                             randomSortingArray[row + 1][column] = 3;
//                             randomSortingArray[row][column] = 3;
//                             randomSortingArray[row + 2][column] = 3;
//                             maxRow = row + 2
//                         }
//
//
//                     }
//                     result = true;
//                 }
//                 else {
//
//                     let canSetLeftRight = true;
//
//
//                     for(let i = column - 1; i <= column + 1; i+=2) {
//                         if(randomSortingArray[row][i] != 0) {
//                             canSetLeftRight = false;
//                         }
//                     }
//
//                     if(canSetLeftRight) {
//                         randomSortingArray[row][column - 1] = 3;
//                         randomSortingArray[row][column] = 3;
//                         randomSortingArray[row][column + 1] = 3;
//                         minIndex = column - 1;
//                         maxIndex = column + 1;
//                     } else {
//                         let canSetTopBottom = true;
//
//                         if(row == 0) {
//                             for(let i = row - 1; i <= row + 1; i+=2){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//
//                             if(canSetTopBottom) {
//                                 randomSortingArray[row][column] = 3;
//                                 randomSortingArray[row + 1][column] = 3;
//                                 randomSortingArray[row + 2][column] = 3;
//                                 maxRow = row + 2;
//
//                             }
//                         } else if(row == 9) {
//                             for(let i = 7; i <= 9; i++){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//                             if(canSetTopBottom) {
//                                 randomSortingArray[row - 1][column] = 3;
//                                 randomSortingArray[row - 2][column] = 3;
//                                 randomSortingArray[row][column] = 3;
//                                 maxRow = row + 2;
//
//                             }
//                         } else {
//                             for(let i = row - 1; i <= row + 1; i++){
//                                 if(randomSortingArray[i][column] != 0) {
//                                     canSetTopBottom = false;
//                                 }
//                             }
//
//                             if(canSetTopBottom) {
//                                 randomSortingArray[row - 1][column] = 3;
//                                 randomSortingArray[row][column] = 3;
//                                 randomSortingArray[row + 1][column] = 3;
//                                 maxRow = row + 2;
//
//                             }
//                         }
//
//
//                     }
//
//                     result = true;
//                 }
//
//                 if(result) {
//                     //koxqer@ pakelu funkcia
//                     closeNearColumns(row, minIndex, maxIndex, maxRow, minRow, shipType, newCount);
//
//                     randomSorting(shipType, newCount - 1);
//                 }
//
//
//             } else {
//                 randomSorting(shipType, newCount);
//
//             }
//         }
//
//         else if(shipType == 2) {
//             //
//             // console.log("col 2=" + column + ', row 2 = ' + row);
//             let minIndex = column;
//             let maxIndex = column;
//             let maxRow = row;
//             let minRow = row;
//             let result = false;
//             if(randomSortingArray[row][column] == 0) {
//
//
//                 if(randomSortingArray[row][column + 1] == 0) {
//                     randomSortingArray[row][column] = 2;
//                     randomSortingArray[row][column + 1] = 2;
//                     maxIndex = column + 1;
//                     result = true;
//                 }
//                 else if (randomSortingArray[row][column - 1] == 0) {
//                     randomSortingArray[row][column] = 2;
//                     randomSortingArray[row][column - 1] = 2;
//
//                     minIndex = column - 1;
//                     result = true;
//                 }
//                 else if (randomSortingArray[row - 1][column] == 0) {
//                     randomSortingArray[row][column] = 1;
//                     randomSortingArray[row - 1][column] = 1;
//                     minRow = row - 1;
//                     result = true;
//                 }
//                 else if (randomSortingArray[row + 1][column] == 0) {
//                     randomSortingArray[row][column] = 2;
//                     randomSortingArray[row + 1][column] = 2;
//                     maxRow = row + 1;
//                     result = true;
//                 }
//                 else {
//                     randomSorting(shipType, newCount);
//                 }
//                 if(result){
//                     closeNearColumns(row, minIndex, maxIndex, maxRow, minRow, shipType, newCount);
//                     randomSorting(shipType, newCount - 1);
//
//                 }
//
//
//             } else {
//                 randomSorting(shipType, newCount);
//             }
//
//
//         }
//         else if(shipType == 1) {
//
//             if(randomSortingArray[row][column] == 0){
//                 randomSortingArray[row][column] = 1;
//
//                 if(column != 9){
//                     randomSortingArray[row][column + 1] = 9;
//                 }
//                 if(column !== 0){
//                     randomSortingArray[row][column - 1] = 9;
//                 }
//
//
//
//                 if(randomSortingArray[row + 1]){
//                     if(column != 9){
//                         randomSortingArray[row + 1][column + 1] = 9;
//                     }
//                     if(column !== 0){
//                         randomSortingArray[row + 1][column - 1] = 9;
//                     }
//                     randomSortingArray[row + 1][column] = 9;
//                 }
//
//                 if(randomSortingArray[row - 1]){
//                     if(column != 9){
//                         randomSortingArray[row - 1][column + 1] = 9;
//                     }
//                     if(column !== 0){
//                         randomSortingArray[row - 1][column - 1] = 9;
//                     }
//
//                     randomSortingArray[row - 1][column] = 9;
//
//                 }
//                 let elementOne = document.getElementById('c-' + row + '-' + column );
//                 elementOne.classList.add("ship-"+ shipType + "-" + newCount);
//                 elementOne.dataset.ship = "ship-"+ shipType+ "-" + newCount;
//
//
//
//                 newCount = parseInt(count) - 1;
//
//             }
//             randomSorting(shipType, newCount);
//         }
//
//
//     }
// }
//
//  function closeNearColumns(row, min, max, maxRow = null, minRow = null, shipType, newCount = 0){
//     if(max != 9){
//         randomSortingArray[row][max + 1] = 9;
//     }
//     if(min !== 0){
//         randomSortingArray[row][min - 1] = 9;
//     }
//
//
//     if(minRow != null && maxRow != null && maxRow != minRow) {
//         for (let i = minRow; i <= maxRow; i++) {
//             randomSortingArray[i][min - 1] = 9;
//             randomSortingArray[i][min + 1] = 9;
//             let elementByRow = document.getElementById('c-' + i + '-' + min);
//
//             elementByRow.classList.add("ship-"+ shipType + "-" + newCount);
//             elementByRow.dataset.ship = "ship-"+ shipType+ "-" + newCount;
//         }
//     } else {
//         for(let i = min; i <= max; i++) {
//
//             let elementByColumn = document.getElementById('c-' + row + '-' + i);
//
//             elementByColumn.classList.add("ship-"+ shipType+ "-" + newCount);
//             elementByColumn.dataset.ship = "ship-"+ shipType+ "-" + newCount;
//
//             if(randomSortingArray[row + 1]){
//                 if(max != 9){
//                     randomSortingArray[row + 1][i + 1] = 9;
//                 }
//                 if(min != 0){
//                     randomSortingArray[row + 1][i - 1] = 9;
//                 }
//                 randomSortingArray[row + 1][i] = 9;
//             }
//
//             if(randomSortingArray[row - 1]){
//                 if(max != 9){
//                     randomSortingArray[row - 1][i + 1] = 9;
//                 }
//                 if(min != 0){
//                     randomSortingArray[row - 1][i - 1] = 9;
//                 }
//
//                 randomSortingArray[row - 1][i] = 9;
//
//             }
//         }
//     }
//
//
// }
//
//
// let concurrent_desk = document.querySelectorAll('.concurrent-desk td');
//
//
// concurrent_desk.forEach((item)=>{
//     item.addEventListener('click',toShootFunction );
// })
// function  toShootFunction(event){
//     if(event.target.textContent == 0 ){
//         event.target.classList.add('disabled');
//         event.target.style.opacity = 0;
//
//         setTimeout(() => {
//             shootComputerFunction();
//         }, 200);
//
//
//     }
//     else if(event.target.textContent == 'X' ){
//          event.target.classList.remove('c-td');
//         event.target.style.background = '#a8cc6d';
//
//          let dataShip = event.target.dataset.ship;
//
//          event.target.classList.remove(dataShip);
//          let dataShipClass = document.querySelectorAll('.' +dataShip)
//          if(dataShipClass.length == 0){
//              let elementsByAttribute = document.querySelectorAll("[data-ship="+dataShip+"]");
//              elementsByAttribute.forEach((item)=>{
//                  item.style.background = 'rgb(208 163 180)';
//
//              })
//          }
//
//
//     }
// }
//
//  let shootingArray = new Array();
// /*for (let i = 0; i < 10; i++) {
//     shootingArray[i] = new Array(10);
//     for (let j = 0; j < 10; j++) {
//         shootingArray[i][j] = 0;
//     }
//
// }*/
//
//
//
//
// let rowLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
//  function shootComputerFunction(){
//     let column = Math.floor(Math.random() * 10) + 1;
//     let row = Math.floor(Math.random() * 9);
//
//     let shootColumn = document.getElementById(rowLetters[row] + '-' + column);
//
//     console.log(shootingArray, shootColumn);
//
//     if(!shootingArray.includes(rowLetters[row] + '-' + column)) {
//         if(shootColumn.textContent != ''){
//             shootColumn.classList.add('shoot');
//             shootingArray.push(rowLetters[row] + '-' + column);
//             //shootComputerFunction();
//             setTimeout(() => {
//                 shootComputerCloseFunction(rowLetters[row], column);
//             }, 1000);
//
//
//         } else {
//             shootColumn.classList.add('shoot-empty');
//             shootingArray.push(rowLetters[row] + '-' + column);
//
//         }
//     } else {
//         shootComputerFunction();
//     }
//
//
// }
//
// function shootComputerCloseFunction(row, column){
//     let rowIndex = row;
//     let columnIndex = column;
//     let columnIndexNext = parseInt(column)+1;
//     let element
//
//     if(column != 10){
//         columnIndex = parseInt(column)+1 ;
//
//     } else if(column == 10){
//         columnIndex = column - 1;
//     }
//
//     element = document.getElementById(rowIndex + '-' + columnIndex)
//
//     if(!shootingArray.includes(rowIndex + '-' + columnIndex)) {
//         if(element.textContent != ''){
//             element.classList.add('shoot');
//             shootingArray.push(rowIndex + '-' + columnIndex);
//             //shootComputerFunction();
//
//             setTimeout(() => {
//                 shootComputerCloseFunction(rowIndex, columnIndex);
//             }, 1000);
//
//
//         } else {
//             element.classList.add('shoot-empty');
//             shootingArray.push(rowIndex + '-' + columnIndex);
//         }
//     } else {
//         setTimeout(() => {
//             shootComputerFunction();
//         }, 1000);
//
//     }
//
//
// }
//
//
//
//
//
// // randomSootComputer()
// /*
// *    0 0 0 0 1 0
// *
// * */

function shootComputerCloseFunction( row, column ){

    let shootElement = document.getElementById(row + '-' + column )
    console.log('   58888888888888')
    console.log(shootElement);
    console.log('  58888888888888')

    let rowIndex = row;
    let columnIndex = column;


    let columnIndexNext = parseInt(column)+1;
    let columnIndexPrev = parseInt(column)-1;
    let element
    element = document.getElementById(rowIndex + '-' + columnIndex);


    // console.log('jsjjdjdjjdj')
    // console.log(element);
    // console.log('jsjjdjdjjdj')
    let elementPrev = element.dataset.prevrow
    let elementNext = element.dataset.nextrow
    let elementPrevId = document.getElementById(elementPrev +'-'+ columnIndex); // verevi tox@
    let elementNextId = document.getElementById(elementNext +'-'+ columnIndex);  // nerqevi tox@

    let elementRowPrevId = element.previousElementSibling
    let elementRowNextId = element.nextElementSibling



    dinamicArr.push(elementPrevId, elementNextId, elementRowPrevId, elementRowNextId)

    console.log("dinamicArr:");
    console.log(dinamicArr);

    // console.log(dinamicArr)
    //
    // console.log(elementPrev + ' preeev')
    //
    //
    // console.log('ccccccccccc')
    // console.log(elementPrev)
    // console.log('ccccccccccc');
    //
    //
    //
    // console.log('kkkkkkkkk')
    // console.log(elementRowNextId)
    // console.log('kkkkkkkkkkkkk');
    //
    //
    //
    // console.log('aaaaaaaaaaa')
    // console.log(elementRowPrevId)
    // console.log('aaaaaaaaaaaa');
    //
    // console.log('nexxxt')
    // console.log(elementNextId)
    // console.log('nexxxt')
    //
    // console.log('vvvvvvvvvv')
    // console.log(elementPrevId)
    // console.log('vvvvvvvvvv')
    //
    // console.log(columnIndexNext +' next');
    // console.log(columnIndexPrev + ' prev ')






    //  random dinamicArr kanchelu hamar


    // if(shootElement.textContent != ''){
    //     dinamicArr.forEach((item) =>{
    //
    //
    //         let shootitem = dinamicArr[Math.random()*dinamicArr.length];
    //         shootitem.splice(item, 1)
    //         shootComputerFunction();
    //
    //         console.log('--------------------')
    //         console.log(shootitem)
    //         console.log('--------------------')
    //
    //
    //     })
    // }





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

        if(elementNextId?.textContent == '' && !shootingArray.includes(elementNext +'-'+ column) ){
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
        if(element?.textContent != ''){
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