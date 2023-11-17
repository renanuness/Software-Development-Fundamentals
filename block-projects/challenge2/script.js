let contents = document.getElementsByClassName("content");


for(let i = 0; i < contents.length; i++){
    let element = contents[i];
    if(element.id == "sobre"){
        element.classList.remove("hidden")
    }else{
        element.classList.add("hidden")

    }
}



async function shakeIcon(){
    document.getElementsByTagName("i")[0].setAttribute("class","fa-solid fa-book-open fa-shake");
    await delay(1000);
    document.getElementsByTagName("i")[0].setAttribute("class","fa-solid fa-book-open");
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function showContent(el){
    shakeIcon();
    console.log(el);
    for(let i = 0; i < contents.length; i++){
        let element = contents[i];
        if(element.id == el){
            element.classList.remove("hidden")
        }else{
            element.classList.add("hidden")
        }
    }
}