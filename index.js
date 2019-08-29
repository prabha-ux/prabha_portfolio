function menu_toggle(classname) {
    var x = document.getElementById("mobile_menu_bar");
    if(x.className === "menu_toggle_hide") {
        x.className += " menu_toggle_show"
        if(classname !== undefined) {
            x.className += " " + classname
        }
    } else {
        x.className = "menu_toggle_hide"
    }
}
