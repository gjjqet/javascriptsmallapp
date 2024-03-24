//Get UI

const languages=["Nodejs","Reactjs","Vuejs","Laravel"];
const colors=["red","skyblue","violet","yellow"];
const gettext=document.querySelector(".textani");
const gettextlingts=document.querySelectorAll(".text-light");

function* getgun(){
    let idx=0;

    while(true){
        yield idx++;

        if(idx > 3){
            idx=0
        }
    }
}

const genfun=getgun()

function showwords(word){
    let x=0;

    gettext.innerHTML="";
    gettext.classList.add(colors[languages.indexOf(word)])
    
    const forset=setInterval(() => {
        if(x>=word.length){
            clearInterval(forset);
            fordelete();
        }else{
         
            gettext.innerHTML+=word[x];
            x++;
        }
        
    }, 500);

}


showwords(languages[genfun.next().value]);

function fordelete(){

    const getwords=gettext.innerHTML;

    let getlastidx=getwords.length-1;

    const fornewword=setInterval(()=>{
        if(getlastidx>=0){

            gettext.innerHTML=gettext.innerHTML.substring(0,getlastidx);
            getlastidx--;

        }else{

            gettext.classList.remove(colors[languages.indexOf(getwords)])

            showwords(languages[genfun.next().value]);
            clearInterval(fornewword)

        }

    },500)
}


gettextlingts.forEach(function(gettextlight){

    // console.log(gettextlingt)

    const forone=gettextlight.textContent.split("");
    //  console.log(forone);
    gettextlight.innerHTML="";

     forone.forEach((one,idx)=>{

        // console.log(one)

        const newem=document.createElement("em");
        newem.textContent=one;
        console.log(newem)

        newem.style.animationDelay=`${idx*0.1}s`;
        gettextlight.append(newem)

     })

})



