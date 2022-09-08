function toggleBar() {
    let flexToggle1 = [
        flexToggleNav = document.querySelector('nav'),
        flexToggleItem = document.querySelectorAll('.flexItem'),
        flexToggleP = document.querySelectorAll('.flexItem p'),
        flexToggleSvg = document.querySelectorAll('.flexItem svg'),
        flexToggleBurger = document.querySelector('.burger')
    ]
    let flexToggle = document.querySelectorAll("nav, #navFlex .flexItem, #navFlex .flexItem p, #navFlex .flexItem svg, #navFlex .flexItem .burger");

    console.log("PORRA")
    for(let i = 0; i < flexToggle.length; i++){
        console.log("teste")
        flexToggle[i].classList.toggle("hiddenBar")
    }
}