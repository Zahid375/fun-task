const massage = [
    "Are You sure ?",
    "I think so",
    "Not Okey"
]

let state = 0;

const successBtn = document.getElementById('succees');
const dangerBtn = document.getElementById('danger');

dangerBtn.addEventListener('click',function(){
    state++;
    successBtn.style.transform = `scale(${state})`;
    successBtn.style.width = 'auto'; // Reset width to auto
    successBtn.style.height = 'auto'; // Reset height to auto
    dangerBtn.innerText = massage[massage.length%state];
    if(state == 3){
        


    }
});
successBtn.addEventListener('click',function(){
    const image = document.getElementById('image');
    const massage = document.getElementById('massage');
    image.src = 'https://media2.giphy.com/media/4N1wOi78ZGzSB6H7vK/200.webp?cid=ecf05e47j9zv2k4xonu809yu2v45gypor327534gtczl06rr&ep=v1_gifs_search&rid=200.webp&ct=g';
    successBtn.style.display = "none";
    dangerBtn.style.display = "none";
    massage.innerText = "ok yay!!!";

});
