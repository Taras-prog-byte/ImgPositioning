let loadedData

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




getFile('data.json')





function imgPositioning(){

    let map = document.getElementById('map')

    let imgMas=[]

    for (let i = 0; i < loadedData.data.length; ++i){
        // console.log(loadedData.data[i].left)
        imgMas[i]='<div id="' + loadedData.data[i].id + '" style="position: absolute; left: '+ loadedData.data[i].left+'; top: '+ loadedData.data[i].top+';"><img src="Pictures/test.png"> data </div>'
    }



        map.innerHTML=imgMas



}


