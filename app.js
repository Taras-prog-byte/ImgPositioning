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

function parse(obj){
    loadedData=JSON.parse(obj);
    console.log(loadedData);
    imgPositioning()
}

function imgPositioning(){

    let map = document.getElementById('map')

    let imgMas=[]

    for (let i = 0; i < loadedData.data.length; ++i){
        // console.log(loadedData.data[i].left)
        let img

        if (loadedData.data[i].type==='flame_sensor'){
            img = "Pictures/flame.png"
        }
        else if (loadedData.data[i].type==='move_sensor'){
            img = "Pictures/up-down.png"
        }
        else if (loadedData.data[i].type==='camera'){
            img = "Pictures/video-camera.png"
        }
        else {
            img = "Pictures/test.png"
        }



        imgMas[i]='<div id="' + loadedData.data[i].id + '" style="position: absolute; left: '+ loadedData.data[i].left+'; top: '+ loadedData.data[i].top+';"><img class="img" src='+img+'>'+ loadedData.data[i].status +'</div>'
    }

    map.innerHTML=imgMas;
}


