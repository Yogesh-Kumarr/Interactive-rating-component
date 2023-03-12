let prelm="";
let ratingvalue="5";
const handleclick=(event)=>{
    console.log("clicked");
    if(prelm!="")
    {
        prelm.classList.remove("click-class");
    }
    prelm=event.target;
    event.target.classList.add("click-class");
    ratingvalue=event.target.innerText;
}
const changecolor=(event)=>{
    event.target.classList.add("hover-class");
}
const changebackcolor=(event)=>{
    event.target.classList.remove("hover-class");
}

let num=document.getElementsByClassName("num");

for(let i=0;i<num.length;i++)
{
    num[i].addEventListener("click",handleclick);
    num[i].addEventListener("mouseover",changecolor);
    num[i].addEventListener("mouseout",changebackcolor);
}

const submitrating=()=>{
    document.getElementById("rating-template").classList.add("display-none");
    document.getElementById("thanks").classList.remove("display-none");
    document.getElementById("rated").innerText=`You rated ${ratingvalue} out of 5`;
}
document.getElementById("btn").addEventListener("click",submitrating);
