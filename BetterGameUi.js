var s = document.createElement("script");
s.type = "text/javascript";
var code = 'function yourFunction() {

document.getElementsByClassName("chw-progress-bar-msg box_aboslute centered nospace text-center fullwidth chw-msg chw-p-msg text-shadow-black-40")[0].innerhtml = "";
document.getElementsByClassName("centered_y chw-egg-bundle")[0].style.display = "none";
document.getElementsByClassName("double-eggs f_row align-items-center")[0].style.display = "none";

setTimeout(yourFunction, 50);

}
yourFunction();
';
try {
    s.appendChild(document.createTextNode(code)), document.body.appendChild(s)
} catch (e) {
    s.text = code, document.body.appendChild(s)
}
