/*
File: main.js
Author: Varas-Tóth Gergő
Copyright: 2024, Varas-Tóth Gergő
Group: Szoft I/1/N
Date: 2024-03-07
Github: https://github.com/janos12345/
Licenc: GNU GPL
*/
const baseInput = document.querySelector("#base")
const baseBInput = document.querySelector("#baseb")
const baseCInput = document.querySelector("#basec")
const baseDInput = document.querySelector("#based")
const areaInput = document.querySelector("#area")
const districtInput = document.querySelector("#district")
const calcBtn = document.querySelector("#calcBtn")
calcBtn.addEventListener('click', () => {
    start();
})
function start(){
    const base = baseInput.value
    const baseb = baseBInput.value
    const basec = baseCInput.value
    const based = baseDInput.value
    const felker = (base + baseb + basec + based)/2
    const felkerteruletizeakarmi = (felker-base) * (felker - baseb) * (felker - basec) * (felker - based)
    const terulet = (Math.sqrt(felkerteruletizeakarmi))
    areaInput.value = terulet
    districtInput.value = felker
}  