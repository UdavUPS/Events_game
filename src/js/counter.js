let counter = document.querySelector(".counter");

export default function addPoint(a) {
    if (typeof a === "number"){
        counter.innerHTML = Number(counter.innerHTML) + a;
    }
}

