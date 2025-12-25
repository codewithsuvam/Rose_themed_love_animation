/* Letter-by-letter animation */
const text = "I LOVE YOU";
const container = document.getElementById("loveText");

text.split("").forEach((letter, index) => {
    const span = document.createElement("span");
    span.innerText = letter;
    span.style.animationDelay = `${index * 0.2}s`;
    container.appendChild(span);
});

/* Click interaction */
function bloom() {
    document.querySelector(".rose").classList.toggle("clicked");
    document.getElementById("msg").classList.toggle("show");
}

/* Rose Petals Effect */
for (let i = 0; i < 45; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 4 + Math.random() * 6 + "s";
    petal.style.opacity = Math.random();
    const size = 10 + Math.random() * 10;
    petal.style.width = size + "px";
    petal.style.height = size + "px";
    document.body.appendChild(petal);
}