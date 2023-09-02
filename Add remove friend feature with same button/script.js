var istatis = document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0

btn.addEventListener("click",function (){
    if (check==0) {
        istatis.innerHTML="Friends"
        istatis.style.color="green"
        btn.innerHTML = "Remove Friend"
        check=1
    }else{
        istatis.innerHTML="Stranger"
        istatis.style.color="red"
        btn.innerHTML = "Add Friend"
        check=0
    }
    
})
