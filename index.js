let array_length = prompt("Enter length of array to be sorted")
let array = []
for(let k = 0; k < array_length; k++){
    array.push(Math.floor(Math.random()*10))

    //$("<div class='arraynums' />").text(array[k]).appendTo('body');
}
async function bubbleSort() {
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                setDivs()
                await swapping(array,j,j+1)
                console.log(array)
                //populateData()
                
                //depopulateData()
            }
        }
    } //console.log(array)
   //depopulateData()
   setDivs()
}
function mergeHelper(){
    return merge(array)
}
function merge(array){
    const middle = Math.floor(array.length / 2)
    const left = array.slice(0,middle)
    const right = array.slice(middle)
    console.log("right",left)
    if(array.length <= 1){
        return array
    }

    return mergeSort(merge(left),merge(right))
}
function mergeSort(left,right){
    let values = []
    let leftIndex = 0
    let rightIndex = 0
    // if(array.length <= 1){
    //     return values
    // }
    while (leftIndex <= left.length && rightIndex < right.length){
        if (left[leftIndex] < right[rightIndex]){
            values.push(left[leftIndex])
            leftIndex++
        } else {
            values.push(right[rightIndex])
            rightIndex++
        }
    }
    // for(let j of left){
    //     values.push(j)
    // }
    // for(let k of right){
    //     values.push(k)
    // }
    console.log("mergesort", values)
    return values
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}
async function insertionSort() {
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length - 1; j++){
            if(array[j] > array[j+1]){
                setDivsInsertion()
                await swap(array,j,j+1)
                console.log(array)
                //populateData()
                
                //depopulateData()
            }
        }
    } //console.log(array)
   //depopulateData()
   setDivsInsertion()
   
}
// async function swapping(array,i,j) {
// }
// async function bubbleSort() {
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < array.length - 1; j++){
//             if(array[j] > array[j+1]){
//                 await swapping(array,j,j+1)
//                 console.log(array)
//                 populateData()
//             }
//         }
//     } //console.log(array)
//    // depopulateData()
// }

async function swapping(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)

    removeDivs()
}

async function swap(array,i,j) {
    
    let temp = array[i]
    array[i]= array[j]
    array[j] = temp
    await sleep(1000)

    removeDivsInsertion()
}

 function populateData() {
    document.getElementById("array").style.backgroundSize = 200
    document.getElementById("array").style.backgroundColor = "black"
    document.getElementById("array").style.color = "white"
    for(let a = 0; a < array_length; a++){
        document.getElementById("array").innerHTML = array
        $("<div class='arraynums' />").text(array[a]).appendTo('body');
    }
} 


function setDivs() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynums${x}' />`).text(array[x]).appendTo('body');
    let elem = document.getElementById(`arraynums${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.width = "10px";
    elem.style.backgroundColor = "black"
    elem.style.padding = "10px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "left"



    }
}
function setDivsInsertion() {
    for(let x = 0; x < array_length; x++){
    $(`<span id='arraynums2${x}' />`).text(array[x]).appendTo('body');
    let elem = document.getElementById(`arraynums2${x}`);
    elem.style.height = array[x] + "10px";
    elem.style.width = "10px";
    elem.style.backgroundColor = "black"
    elem.style.padding = "10px"
    elem.style.color = "white"
    elem.style.display = "block"
    elem.style.margin = "5px"
    elem.style.float = "right"
    }
}

function removeDivs(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynums${j}`);
        elem.parentNode.removeChild(elem)
        //$(`<span id='arraynums${j}' />`).remove()
    }
}
function removeDivsInsertion(){
    for(let j = 0; j < array_length; j++){
        let elem = document.getElementById(`arraynums2${j}`);
        elem.parentNode.removeChild(elem)
        //$(`<span id='arraynums${j}' />`).remove()
    }
}



 function depopulateData(){
     for(let a = 0; a < array_length; a++){
         document.getElementById(`arraynums`).innerHTML = ""
        
     }
 }
//populateData()


function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}
// function populateData() {
//     document.getElementById("array").style.backgroundSize = 200
//     document.getElementById("array").style.backgroundColor = "red"
//     for(let a = 0; a < array_length; a++){
//        //document.getElementById("array").append(array[a])
//        document.getElementById("array").innerHTML = array
        
//     }
// }

// function depopulateData(){
//     for(let a = 0; a < array_length; a++){
//         document.getElementById("array").innerHTML = ""
        
//     }
// }
// populateData()