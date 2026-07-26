function openMenu(evt, categoryName) {
    var i, menucontent, tablinks;
    
    menucontent = document.getElementsByClassName("menu-content");
    for (i = 0; i < menucontent.length; i++) {
        menucontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(categoryName).classList.add("active");
    evt.currentTarget.classList.add("active");
}
