let count=0
let decrease=document.querySelector(".decrease")
let value=document.querySelector("#value")
let btns=document.querySelectorAll(".btn");
btns.forEach(function(bt){
    bt.addEventListener("click",function(e)
    {
        const style=e.currentTarget.classList;
        if(style.contains("decrease"))
        {
            count--;
        }
        else if(style.contains("increase"))
        {
            count++;
        }
        else{
            count=0;
        }
        if(count>0){
            value.style.color="green"
        }
        if(count<0){
            value.style.color="red"
        }
        if(count==0)
        {
            value.style.color="black"
        }
        value.innerText=count;
    })
    
})
