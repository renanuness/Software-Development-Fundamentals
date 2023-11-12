function changeTheme(e){
    console.log(e.value);
    if(e.value == 1){
        document.body.setAttribute("class","psg");
        return;
    }

    if(e.value == 2){
        document.body.setAttribute("class","barcelona");
        return;
    }

    if(e.value == 3){
        document.body.setAttribute("class","milan");
        return;
    }
}