function toggleMenu() {
    if(document.getElementsByClassName('mobile-menu')[0].style.display == 'none'){
        document.getElementsByClassName('mobile-menu')[0].style.display = 'flex';
    } else {
        document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
    }
}

function goToBookmark(bookmark){
    window.location=bookmark;
}
