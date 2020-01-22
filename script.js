const string = document.querySelector(".text-to-animate").textContent.split("");
document.querySelector(".text-to-animate").textContent = "";
for (let i = 0; i < string.length; i++) {
    document.querySelector(".text-to-animate").innerHTML +=
        "<span>" + string[i] + "</span>";
}
let char = 0;
document.body.addEventListener("mouseover", function() {
    let timer = setInterval(onTick, 150);
    function onTick() {
        const span = document
            .querySelector(".text-to-animate")
            .querySelectorAll("span")[char];
        span.classList.add("fade");
        char++;
        if (char === string.length) {
            complete();
            return;
        }
    }
    function complete() {
        clearInterval(timer);
        timer = null;
    }
});
