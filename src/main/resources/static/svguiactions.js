// This file is referenced by the patched svg. (Reference is auto added by patcher, since provided as runtime argument,
// see "scripts/svgpatch.sh" Whenever "document shows up here, it actually refers to the SVG, not the HTML page."

function fillWithRandomColour(id) {
    let targetElement = document.getElementById(id);

    // Random colour string generator: https://stackoverflow.com/a/5092872
    let randomColor = "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
    targetElement.children[0].setAttribute("fill", randomColor);
}

function printMessage(message) {
    console.log(message);
}

function requestAnimalUpdate() {
    fetch("animals/animal", {method: 'POST'});
}