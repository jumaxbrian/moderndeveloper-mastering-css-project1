
function activateTab(evt, tabPaneId) {
    hideAllTabContents();
    removeActiveClass();
    document.getElementById(tabPaneId).style.display = "flex";
    evt.currentTarget.className += ' active';
}

//hide all tab contents
function hideAllTabContents() {
    var tabContents = document.getElementsByClassName("tab-pane");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
}

//remove tab active from the all links
function removeActiveClass() {
    var navLinks = document.getElementsByClassName("nav-link");
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].className = navLinks[i].className.replace(" active", "");
    }
}