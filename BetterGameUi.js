//use https://bookmarklets.org/maker/ to convert to a bookmark

var s = document.createElement("script");
s.type = "text/javascript";
var code = 'function yourFunction() {

document.getElementsByClassName("chw-progress-bar-msg box_aboslute centered nospace text-center fullwidth chw-msg chw-p-msg text-shadow-black-40")[0].innerhtml = "";
document.getElementsByClassName("centered_y chw-egg-bundle")[0].style.display = "none";

document.getElementsByClassName("double-eggs f_row align-items-center")[0].style.display = "none"; //this might change

//Comment these lines if you want to show chat
document.getElementsByClassName("chat-container")[0].style.display = "none";
document.getElementsByClassName("chat-wrapper pause-ui-element box_absolute roundme_lg")[0].style.display = "none";

//Weapons to show
var weaponmaindiv = document.getElementsByClassName("display-grid grid-auto-flow-column justify-content-around gap-sm")[0];
var weapondivs = weaponmaindiv.getElementsByTagName("div");

//Commented = keep

//weapondivs[0].style.display = "none"; //Eggk47
//weapondivs[1].style.display = "none"; //Scrambler
weapondivs[2].style.display = "none"; //Free Ranger
weapondivs[3].style.display = "none"; //RPEGG
//weapondivs[4].style.display = "none"; //Whipper
//weapondivs[5].style.display = "none"; //Crackshot
weapondivs[6].style.display = "none"; //Tri-Hard

setTimeout(yourFunction, 50);

}
yourFunction();
';
try {
    s.appendChild(document.createTextNode(code)), document.body.appendChild(s)
} catch (e) {
    s.text = code, document.body.appendChild(s)
}
