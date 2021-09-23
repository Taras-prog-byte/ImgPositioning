let startTime=[], fileLoadTime=[], showDomTime=[], loadDelta=[], positionDelta=[], imgMas=[], coords=[];
getNewTime()

let RndNum=4000
let tmpStatus=false;









//--------дістаю дані з json файлу---------
let loadedData
getFile('data.json')
function getFile(fileName){
    let request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend=function (){
        parse(request.responseText);
    }
    request.send()
}






function parse(obj){                        //паршу дані
    loadedData=JSON.parse(obj);


    let loadDate = new Date();              //визначаю час який пішов на загрузку даних
    fileLoadTime[0] = loadDate.getHours()
    fileLoadTime[1] = loadDate.getMinutes()
    fileLoadTime[2] = loadDate.getSeconds()
    fileLoadTime[3] = loadDate.getMilliseconds()
    console.log('Load data from file at: '+fileLoadTime[0]+':'+fileLoadTime[1]+':'+fileLoadTime[2]+':'+fileLoadTime[3])
    loadDelta[0]=fileLoadTime[0]-startTime[0]
    loadDelta[1]=fileLoadTime[1]-startTime[1]
    loadDelta[2]=fileLoadTime[2]-startTime[2]
    loadDelta[3]=fileLoadTime[3]-startTime[3]
    console.log('It takes  '+loadDelta[0]+':'+loadDelta[1]+':'+loadDelta[2]+':'+loadDelta[3]+' from start to load data from file')
    console.log(loadedData);

    imgPositioning()
}







//---------------------test for 4K image-----------------------------
// let tmpStatus=false;
// function imgPositioning(){
//     let map = document.getElementById('map')
//     let img
//             if(tmpStatus===true){
//             img = "4K-Test/4K_active.png"
//             }else{
//             img = "4K-Test/4K.jpg"
//             }
//             let tmpImg ='<div style="position: absolute; cursor: pointer; "><img class="" src='+img+'>'+ tmpStatus +'</div>'
//             map.innerHTML=tmpImg;
//     let positionDate = new Date();
//     showDomTime[0] = positionDate.getHours()
//     showDomTime[1] = positionDate.getMinutes()
//     showDomTime[2] = positionDate.getSeconds()
//     showDomTime[3] = positionDate.getMilliseconds()
//     console.log('Position dom elements at: '+showDomTime[0]+':'+showDomTime[1]+':'+showDomTime[2]+':'+showDomTime[3])
//     positionDelta[0]=showDomTime[0]-fileLoadTime[0]
//     positionDelta[1]=showDomTime[1]-fileLoadTime[1]
//     positionDelta[2]=showDomTime[2]-fileLoadTime[2]
//     positionDelta[3]=showDomTime[3]-fileLoadTime[3]
//     console.log('It takes  '+positionDelta[0]+':'+positionDelta[1]+':'+positionDelta[2]+':'+positionDelta[3]+' to position DOM elements')
// }






//------------позиціоную даччики в межах мого поля---------------
function imgPositioning(){

    let map = document.getElementById('map')

    for (let i = 0; i < loadedData.data.length; ++i){
        let img

        if (loadedData.data[i].type==='flame_sensor'){
            if(loadedData.data[i].status===true){
            img = "Pictures/flame_active.png"
            }else{
            img = "Pictures/flame.png"

            }
        }
        else if (loadedData.data[i].type==='move_sensor'){
            if(loadedData.data[i].status===true){
            img = "Pictures/move_active.png"
            }else{
            img = "Pictures/move.png"

            }
        }
        else if (loadedData.data[i].type==='camera'){
            if(loadedData.data[i].status===true){
            img = "Pictures/video-camera_active.png"
            }else{
            img = "Pictures/video-camera.png"

            }
        }
        else {
            if(loadedData.data[i].status===true){
            img = "Pictures/settings_active.png"
            }else{
            img = "Pictures/settings.png"

            }
        }
            imgMas[i]='<div id="' + loadedData.data[i].id + '" style="position: absolute; cursor: pointer; left: '+ loadedData.data[i].left+'; top: '+ loadedData.data[i].top+';"><img alt="'+loadedData.data[i].type+'" class="img" src='+img+'>'+ loadedData.data[i].status +'</div>'


    }


    //for test




    map.innerHTML=imgMas;


    let positionDate = new Date();
    showDomTime[0] = positionDate.getHours()
    showDomTime[1] = positionDate.getMinutes()
    showDomTime[2] = positionDate.getSeconds()
    showDomTime[3] = positionDate.getMilliseconds()
    console.log('Position dom elements at: '+showDomTime[0]+':'+showDomTime[1]+':'+showDomTime[2]+':'+showDomTime[3])
    positionDelta[0]=showDomTime[0]-fileLoadTime[0]
    positionDelta[1]=showDomTime[1]-fileLoadTime[1]
    positionDelta[2]=showDomTime[2]-fileLoadTime[2]
    positionDelta[3]=showDomTime[3]-fileLoadTime[3]
    console.log('It takes  '+positionDelta[0]+':'+positionDelta[1]+':'+positionDelta[2]+':'+positionDelta[3]+' to position DOM elements')
}













function sensorActivation(id){
    for (let i = 0; i < loadedData.data.length; ++i){
        if (loadedData.data[i].id===id){
            loadedData.data[i].status = true;
        }
    }
    let loadDate = new Date();              //оновлюю час
    fileLoadTime[0] = loadDate.getHours()
    fileLoadTime[1] = loadDate.getMinutes()
    fileLoadTime[2] = loadDate.getSeconds()
    fileLoadTime[3] = loadDate.getMilliseconds()
    imgPositioning()
}

function activateAll(){
    // activateRandSensors(imgMas.length-RndNum, imgMas.length)
    tmpStatus=true; //-for 4K test
    for (let i = 0; i < loadedData.data.length; ++i){
        loadedData.data[i].status = true;
    }

    let loadDate = new Date();              //оновлюю час
    fileLoadTime[0] = loadDate.getHours()
    fileLoadTime[1] = loadDate.getMinutes()
    fileLoadTime[2] = loadDate.getSeconds()
    fileLoadTime[3] = loadDate.getMilliseconds()

    imgPositioning()
}

function clearAllData(){
    // disactivateRandSensors(imgMas.length-RndNum, imgMas.length)
    tmpStatus=false; //-for 4K test
    for (let i = 0; i < loadedData.data.length; ++i){
        loadedData.data[i].status = false;
    }
    let loadDate = new Date();              //оновлюю час
    fileLoadTime[0] = loadDate.getHours()
    fileLoadTime[1] = loadDate.getMinutes()
    fileLoadTime[2] = loadDate.getSeconds()
    fileLoadTime[3] = loadDate.getMilliseconds()

    imgPositioning()
}










function getNewTime(){
    let currentDate = new Date();
    startTime[0] = currentDate.getHours()
    startTime[1] = currentDate.getMinutes()
    startTime[2] = currentDate.getSeconds()
    startTime[3] = currentDate.getMilliseconds()
    console.log('Program start at: '+startTime[0]+':'+startTime[1]+':'+startTime[2]+':'+startTime[3])
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (Math.ceil(max) - Math.ceil(min))) + Math.ceil(min);
}







// function showtime(){
// }
// setInterval(showtime, 1000)




//======================Tests=====================

//----------------1-----------------------\\
// fillRndData(RndNum)

function fillRndData(maxNum){ //заповнити рандомниси символами
    rndCoords(0, RndNum)
    let img = "Pictures/settings.png"
    for(let i = imgMas.length; i<maxNum; ++i){

        imgMas[i]= '<div style="position: absolute; cursor: pointer; left: '+ coords[i].left+"px"+'; top: '+ coords[i].top+"px"+';"><img alt="test sensor" class="img" src='+img+'></div>'


    }
}
function activateRandSensors(counter, ENDofCount){
    let img = "Pictures/settings_active.png"
    for(let i = counter; i<ENDofCount; ++i){
        imgMas[i]='<div style="position: absolute; cursor: pointer; left: '+ coords[i].left+"px"+'; top: '+ coords[i].top+"px"+';"><img alt="test sensor" class="img" src='+img+'></div>'
    }
}
function disactivateRandSensors(counter, ENDofCount){
    let img = "Pictures/settings.png"
    for(let i = counter; i<ENDofCount; ++i){
        imgMas[i]='<div style="position: absolute; cursor: pointer; left: '+ coords[i].left+"px"+'; top: '+ coords[i].top+"px"+';"><img alt="test sensor" class="img" src='+img+'></div>'
    }
}
function rndCoords(counter, ENDofCount){
    let left = [], top=[];
    for(let i = counter; i<ENDofCount; ++i){
        left[i] = getRandomInt(0, 2000).toString();
        top[i]=getRandomInt(0, 2000).toString();
        coords[i]={left:left[i], top:top[i]}
    }
    // console.log(coords)
    return coords
}


//--------------2------------------------\\

//---------------------test for 4K image-----------------------------
// function imgPositioning(){
//     let map = document.getElementById('map')
//     let img
//             if(tmpStatus===true){
//             img = "4K-Test/4K_active.png"
//             }else{
//             img = "4K-Test/4K.jpg"
//             }
//             let tmpImg ='<div style="position: absolute; cursor: pointer; "><img class="" src='+img+'>'+ tmpStatus +'</div>'
//             map.innerHTML=tmpImg;
//     let positionDate = new Date();
//     showDomTime[0] = positionDate.getHours()
//     showDomTime[1] = positionDate.getMinutes()
//     showDomTime[2] = positionDate.getSeconds()
//     showDomTime[3] = positionDate.getMilliseconds()
//     console.log('Position dom elements at: '+showDomTime[0]+':'+showDomTime[1]+':'+showDomTime[2]+':'+showDomTime[3])
//     positionDelta[0]=showDomTime[0]-fileLoadTime[0]
//     positionDelta[1]=showDomTime[1]-fileLoadTime[1]
//     positionDelta[2]=showDomTime[2]-fileLoadTime[2]
//     positionDelta[3]=showDomTime[3]-fileLoadTime[3]
//     console.log('It takes  '+positionDelta[0]+':'+positionDelta[1]+':'+positionDelta[2]+':'+positionDelta[3]+' to position DOM elements')
// }