document.getElementById("click").onclick = function() {
    document.getElementById("counter").textContent = parseInt(document.getElementById("counter").textContent, 10) + 1;
}
document.getElementById("reset").onclick = function() {
    document.getElementById("counter").textContent = 0;
}