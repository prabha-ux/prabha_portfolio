function menu_toggle() {
    var x = document.getElementById("mobile_menu_bar");
    if(x.className === "menu_toggle_hide") {
        x.className += " menu_toggle_show"
    } else {
        x.className = "menu_toggle_hide"
    }
}
