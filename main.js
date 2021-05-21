let arr=[
    'img/photo_2021-05-06_01-27-04.jpg',
    'img/photo_2021-05-06_01-28-32.jpg',
    'img/photo_2021-05-06_01-28-54.jpg',
    'img/photo_2021-05-06_01-29-38.jpg',
    'img/photo_2021-05-06_01-29-47.jpg',
    'img/photo_2021-05-06_01-29-59.jpg',
    'img/photo_2021-05-06_01-30-05.jpg',
    'img/photo_2021-05-06_01-30-11.jpg',
    'img/photo_2021-05-06_01-30-17.jpg',
    'img/photo_2021-05-06_01-30-26.jpg',
    'img/photo_2021-05-06_01-30-34.jpg',
    'img/photo_2021-05-06_01-30-43.jpg',
    'img/photo_2021-05-06_01-30-51.jpg',
    'img/photo_2021-05-06_01-30-58.jpg',
    'img/photo_2021-05-06_01-28-45.jpg',
    'img/photo_2021-05-06_01-29-06.jpg',
    'img/photo_2021-05-06_01-29-15.jpg',
    'img/photo_2021-05-06_01-29-23.jpg',
    'img/photo_2021-05-06_01-29-31.jpg',
    'img/photo_2021-05-06_01-31-05.jpg'
]

let minPicBox=document.querySelector('.littleBox')

let newArr=[
    ['img/photo_2021-05-06_01-27-04.jpg',
    'img/photo_2021-05-06_01-28-32.jpg',
    'img/photo_2021-05-06_01-28-54.jpg',
    'img/photo_2021-05-06_01-29-38.jpg',
    'img/photo_2021-05-06_01-29-47.jpg'],
    ['img/photo_2021-05-06_01-29-59.jpg',
    'img/photo_2021-05-06_01-30-05.jpg',
    'img/photo_2021-05-06_01-30-11.jpg',
    'img/photo_2021-05-06_01-30-17.jpg',
    'img/photo_2021-05-06_01-30-26.jpg'],
    ['img/photo_2021-05-06_01-30-34.jpg',
    'img/photo_2021-05-06_01-30-43.jpg',
    'img/photo_2021-05-06_01-30-51.jpg',
    'img/photo_2021-05-06_01-30-58.jpg',
    'img/photo_2021-05-06_01-28-45.jpg'],
    ['img/photo_2021-05-06_01-29-06.jpg',
    'img/photo_2021-05-06_01-29-15.jpg',
    'img/photo_2021-05-06_01-29-23.jpg',
    'img/photo_2021-05-06_01-29-31.jpg',
    'img/photo_2021-05-06_01-31-05.jpg']
]
let a=0
let btnPrev=document.querySelector('.prev')
btnPrev.onclick=()=>{
    if(a==0){
        a=4
    }
    minPicBox.innerHTML=''
    drowOneLinePics(newArr,--a)
    console.log('prev')
}
let btnNext=document.querySelector('.next')
btnNext.onclick=()=>{
    if(a==3){
        a=-1
    }
    minPicBox.innerHTML=''
    drowOneLinePics(newArr,++a)
    console.log('next')
}
function drowOneLinePics(arr,a){
    for(let i=0;i<arr[a].length;i++){
        let img=document.createElement('img')
        img.classList.add('littleImg')
        img.setAttribute('src', newArr[a][i])
        minPicBox.appendChild(img)
    }
}
drowOneLinePics(newArr,a)

let bigPic=document.querySelector('.bigPicture')
let bigPictureImg=document.querySelector('.bigPictureImg')

minPicBox.onclick=function(event){
    console.log(event)
    if(event.target.className == "littleImg"){
        let pic=event.target.getAttribute('src')
        bigPictureImg.setAttribute('src',pic)
    }
}

var modal = document.querySelector('.modal');
let modCont=document.querySelector('.modal-content');
let btnSwow=document.querySelector('.show')
var span = document.getElementsByClassName('close') [0];
let picInModal=document.createElement('img')

btnSwow.onclick = showPic

function showPic() {
    modal.style.display = 'block'
    let current=0
    picInModal.setAttribute("src", arr[current])

    modCont.appendChild(picInModal)
    let timerId=setInterval(() => {
        if(current==arr.length-1){
            clearInterval(timerId);
            modal.style.display = 'none'
        }
        picInModal.removeAttribute("src");
        picInModal.setAttribute("src", arr[current+1])
        current++
    }, 2000);    
}
span.onclick = function () {
    modal.style.display = 'none';
} 
window.onclick = function (event) {
    if (event.target == modal){
        modal.style.display = 'none';
    }
}