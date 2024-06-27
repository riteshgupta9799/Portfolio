
/* click features */
var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents ");
function opentab(tabname){
    // for hidding the tablinks when click perform
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    // for showing when click perform
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// side menju
var sidemenu= document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}