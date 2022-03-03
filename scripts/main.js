// Up Arrow Control
let UpArrow = document.querySelector(".up");
UpArrow.style.display = 'none';

window.onscroll = () => {
    if (window.scrollY > 1000) {
        UpArrow.style.display = 'block';
    } else
        UpArrow.style.display = 'none';
}
UpArrow.onclick = () => {
    window.scrollTo(0, 0);
}

// End Control of Up Arrow
let megaMenu = document.querySelector(".megaMenu"),
    otherLinks = document.querySelector("header .container > ul > li:last-child");
let megaMenu_active = false;
otherLinks.onclick = _ => {

    if (!megaMenu_active) {
        activMegaMenu();
    } else {
        Not_activMegaMenu();
    }
}

function activMegaMenu() {
    megaMenu.style.cssText = ` opacity : 1;
        top: calc(100% + 10px);
        `;
    document.querySelector(".landing i").style.display = 'none'; // hide arrow
    megaMenu_active = true;
}

function Not_activMegaMenu() {
    megaMenu.style.cssText = ` opacity : 0;
    top: calc(100% + 100px);
    `;
    document.querySelector(".landing i").style.display = 'block'; // show arrow
    megaMenu_active = false;
}
megaMenu.addEventListener("click", Not_activMegaMenu);
document.querySelector(".landing").addEventListener("click", Not_activMegaMenu);


// Testimonials
let Container = document.querySelector("#testimonials .container");
let BtnMore = document.querySelector(".testi-more");
let Delete_Testi = document.querySelector("#testimonials .container section .prof-ph .Delete-Test")
let Testimonials_rate = 6,
    photo_rate = 1;

function DeleteTest(rate) {
    document.querySelectorAll("#testimonials .container > section")[rate].style.display = 'none';
}

function Testimonials() {
    let mainSec = document.createElement("section"),
        prof_ph = document.createElement("div"),
        img = document.createElement("img"),
        Delete_ = document.createElement("i");

    // Profile Image Element
    img.setAttribute("src", `images/avatar-0${photo_rate}.png`); // set source image 
    img.setAttribute("alter", `avatar-0${photo_rate++}`); // set alter title For Image
    Delete_.setAttribute("onclick", `DeleteTest(${Testimonials_rate++})`) // set Event Onclick As Attr For Element
    Delete_.classList.add("fa-solid", "fa-circle-xmark"); // set class Name To Icon To Get Style
    prof_ph.classList.add("prof-ph"); // add Class Name For Parent profile photo
    (photo_rate > 6) && (photo_rate = 1); // make Photo Back To Rate 1
    prof_ph.appendChild(img); // appent image To Its Parent Profile Photo
    prof_ph.appendChild(Delete_); // appent image To Its Parent Profile Photo
    // Done Profile Element

    // Section Text Info 
    let TextDiv = document.createElement("div"),
        NamePerson = document.createElement("h3"),
        JobTitle = document.createElement("p"),
        RateSec = document.createElement("section"),
        Testimonials_P = document.createElement("p");

    TextDiv.classList.add("text"); // Put Class Name Text To Parent 

    NamePerson.innerHTML = `Test Name ${Testimonials_rate}`; // Put Name For Person
    JobTitle.innerHTML = `${`${Testimonials_rate}`.repeat(5)} Test Developer`; // Put Job Title For Him 

    for (let i = 0; i < 5; i++) { // Append Five Star For Section Rate
        let RateStar = document.createElement("i");
        RateStar.classList.add("filled", "fas", 'fa-star'); // set class Name To Star Icon To Get Style
        RateSec.appendChild(RateStar);
    }
    Testimonials_P.innerHTML = ` This Text Doesn't Important Because it Will Come From Data Base
    adipisicing elit. Maiores et reiciendis voluptatum, amet est
    natus quaerat ducimus  `

    TextDiv.appendChild(NamePerson); // Append Name person To Parent Element
    TextDiv.appendChild(JobTitle); // Append JOb Title To Parent Element
    TextDiv.appendChild(RateSec); // Append Section Stars To Parent Element
    TextDiv.appendChild(Testimonials_P); // Append Testimonials Text To Parent Element

    // Done Section Text Info 

    mainSec.append(prof_ph); //Append Profile Photo To Main Section
    mainSec.append(TextDiv);

    Container.appendChild(mainSec); //Append Main Section That Catch All Element To Container 

}