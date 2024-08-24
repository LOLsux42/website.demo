const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "https://i.pinimg.com/736x/d1/6f/f2/d16ff211ffeeda14889ec04698c13c2d.jpg") {
        myImage.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5TWVBUXszfv7vCA1EnSw0hsw82ATnkGH2w&s");
        } else {
            myImage.setAttribute("src", "https://i.pinimg.com/736x/d1/6f/f2/d16ff211ffeeda14889ec04698c13c2d.jpg");
        }
    };
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName () {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    }else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `GROVE STREET SUMMER IS UPON US, ${myName}`;
}
}
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `GROVE STREET SUMMER IS UPON US, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};