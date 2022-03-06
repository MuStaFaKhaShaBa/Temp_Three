// Up Arrow Control
let UpArrow = document.querySelector(".up");
UpArrow.style.display = 'none';

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

/// Our Skills Section

let fields_Parent = document.querySelectorAll("#skills .container .dataprog section");
let fields = document.querySelectorAll("#skills .container .dataprog section i i");

window.onscroll = () => {
    // Services Section
    let width = 0,
        level = 0;

    if ((window.scrollY >= (document.querySelector("#skills").offsetTop - 260)) && (window.scrollY <= document.querySelector("#skills").offsetTop + 800)) {
        fields.forEach((el) => {
            width = fields_Parent[level++].getAttribute("data-prog");
            el.style["width"] = `${width}%`;

        });
        setTimeout(deley, 4000);
    } else {
        fields.forEach((el) => {
            width = fields_Parent[level++].getAttribute("data-prog");
            el.style.width = `0%`;
        });
        level = 0;
        setTimeout(Mdeley, 100);
    }
    /////
    // To Up Arrow

    if (window.scrollY > 1000) {
        UpArrow.style.display = 'block';
    } else
        UpArrow.style.display = 'none';
    /////
}

function deley() {
    fields.forEach((el) => {
        el.style.cssText += '--deley:0s';
    })
}

function Mdeley() {
    let level = 0;
    fields.forEach((el) => {
        el.style.cssText += `--deley:${level++}s`;
    })
}

//// //// //// //////////////////////////////////////////////////////////////////////


/// Start Event Section ///
class Events { // Class Medul
    constructor(Id, email, Title, Details) {
        this.Id = Id;
        this.Title = Title;
        this.Details = Details;
        this.email = email;
        this.Done = false;
    }
}
let BtnShowEvents = document.querySelector("#events .Btn-event"),
    EventsContainer = document.querySelector("#events .events-list"),
    EventsFields = document.querySelector("#events .events-list .events-fields"),
    CloseEventsCont = document.querySelector("#events .events-list .CloseBtn");

let ArrayOfEvents = []; /// Array Of Events

let ExistenceEvent = [],
    ThereEvent = false; // Events Available
let EventNum = 0, // Current Event Number In ExistenceEvent
    SubscribedEvent = false, // Check if current event is subscribed or not
    MAX_NUM_OF_ELEMENT = 10; // Number Of Event Now

let Date_ = { // object Has Four Date Elements
    Days: document.querySelector("#events .container .event .date .days p"),
    Hours: document.querySelector("#events .container .event .date .hours p"),
    Minutes: document.querySelector("#events .container .event .date .minutes p"),
    Seconds: document.querySelector("#events .container .event .date .seconds p"),
};

let subscribe = document.querySelector(`#events .subscribe .BtnSubscribe`), //subscribe Button
    otherEvent = document.querySelector(`#events .subscribe .otherEvent`); //Show Other Event Button
let infoEvent = document.querySelector(`#events .container .event .info`)
let CurrentDate_p = document.querySelector(".nearest-Event"), // Date Of Event
    ResetSubscribedEvents = document.querySelector(".clear"); // 

for (let i = 0; i < MAX_NUM_OF_ELEMENT; i++) { //Add Events In Available Events Array
    let email = `mostafa.khashaba${i}0@gmail.com`,
        title = `Title${`${i}`.repeat(3)}`,
        details = `hello${i} `.repeat(10),
        Event_Date = new Date(`202${i}`, `${i}`, `${i * 2}`).getTime();

    let Event = new Events(Event_Date, email, title, details);

    ExistenceEvent.push(Event);
}
let IntervalExist = false; // Determined Existence Of Interval
let interval = 0; // Store Interval Id


/*Start of Web Will Check If User Has Events Subscribed In His Local Storage
Or No .
If he Has We Will Put First Didn't End Event To Page .
If He Hasn't We Will Put First Event Available From ExistenceEvent */

SetTimeP(Date.now()); // Add Time Of Current Date

StartWebSite(); //Call Function

// Button On Click events

subscribe.onclick = () => {
    if (!SubscribedEvent) {
        ArrayOfEvents.push(ExistenceEvent[EventNum - 1]); // set Event Object Direct From Available Events
        // EventNum - 1 Becuase We Increment it When Show Them 

        AddToLocalStorage(ArrayOfEvents);

        ExistenceEvent = ExistenceEvent.filter((el, index) => {
            return index !== (EventNum - 1);
        });

        MAX_NUM_OF_ELEMENT--;
        EventNum--;
        SubscribedEvent = true; // Current Event Has Been Subscribed
        // We Want Now To Remove That Event From Available
    }
    // console.log(`event num ${EventNum}`);//Test
    // console.log(`Max event num ${MAX_NUM_OF_ELEMENT}`);//Test
}

BtnShowEvents.onclick = () => {
    EventsContainer.style.right = `0px`;
    document.body.classList.toggle("over-lay");
}

CloseEventsCont.onclick = () => {
    EventsContainer.style.right = `-500px`;
    document.body.classList.toggle("over-lay");

}

ResetSubscribedEvents.onclick = () => {
    AddToLocalStorage([]); // Reset LocalStorage
    StartWebSite(); // Called To Determined Add Event Or What
    SubscribedEvent = false; // No Event Subscribed
}

/// /////// /////// ///////

function StartWebSite() { // function Called When Web Site Open

    GetFromLocalStorage(); // Get Events From Local Storage At Starts

    if (ArrayOfEvents.length > 0) {
        for (let i = 0; i < ArrayOfEvents.length; i++) {
            if (!ArrayOfEvents[i].Done) {
                SendEventToTimer(ArrayOfEvents[i]); // Add First Event Didn't End To Page
                break;
            } else {
                if (i === ArrayOfEvents.length - 1) { // Thats Mean All Events End 
                    AvailableEvents();
                }
            }
        }
    } else {
        AvailableEvents();
    }
}

function AvailableEvents() {
    if (ExistenceEvent.length > 0) { // Add First Event From ExistenceEvent
        SendEventToTimer(ExistenceEvent[0]);
    } else { // If We Doesn't Have Events Available 
        // We Will Show Message 
        ResetDateFields();
        infoEvent.firstElementChild.innerHTML = `You Haven't Available Events`;
        infoEvent.lastElementChild.innerHTML = `We Are Sorry, You Haven't Available Events Right Now
                                                You Can Come Later. Sorry Again`;
    }
}

function SetTimeP(DateEvent) {
    CurrentDate_p.innerHTML = new Date(DateEvent).toString().substring(0, 25);
}

function CreateEventHtml(DateId, Title, Done) {
    let DivContent = document.createElement("div"), // Create Div To Catch Content
        H3 = document.createElement("h3"), // Create h3 Element Title
        ButtonParent = document.createElement("section"), // Section Buttons
        ShowBtn = document.createElement("button"), //Button To Show Content Of Event
        CancelBtn = document.createElement("button"); // Button To Cancel Event

    H3.innerHTML = Title; //Assign Title To H3
    ButtonParent.classList.add("btns"); //Add Class Name btns To Element
    ShowBtn.classList.add("Btn-show"); // Add Class To Btn
    CancelBtn.classList.add("Btn-cancel"); // Add Class To Btn
    ShowBtn.innerHTML = 'Show'; // Add text show to btn
    CancelBtn.innerHTML = 'Cancel'; // add text cancel to btn

    ButtonParent.appendChild(ShowBtn); // Append Btn Show 
    ButtonParent.appendChild(CancelBtn); // Append Btn Cancel

    DivContent.appendChild(H3); // Append H3 Title To Content
    DivContent.appendChild(ButtonParent); // Append Buttons To Content

    DivContent.setAttribute("data-EventId", `${DateId}`); // set Id To Element
    DivContent.classList.add("event")
    if (Done) {
        DivContent.classList.add("Done");
    }
    return DivContent;
}

function TimerChangeDate(event, Interval) {

    let Now_ = Date.now();

    let DiffDate = event.Id - Now_; //Difference Between Two Date

    let DAYs = Math.floor((DiffDate / (1000 * 60 * 60 * 24))), //Calc Number Of Days 

        HOURs = Math.floor((DiffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), // Calc Number Of Hours 
        // Get Remainder Number From Days Thats Will Be Number Of hours In MSeconds

        MINUTEs = Math.floor((DiffDate % (1000 * 60 * 60)) / (1000 * 60)), //Calc Number Of Minutes
        //Get Remainder Number From Hours Thats Will Be Number Of Minutes In MSeconds              

        SECONDs = Math.floor((DiffDate % (1000 * 60)) / (1000)); // Calc Number Of Seconds
    // Get Remainder Number From Minutes Thats Will Be Number Of Seconds In MSeconds 

    // console.log(DAYs); // Test
    // console.log(HOURs);// Test
    // console.log(MINUTEs);//Test
    // console.log(SECONDs);//Text

    Date_.Days.innerHTML = DAYs >= 10 ? DAYs : `0${DAYs}`;

    Date_.Hours.innerHTML = HOURs >= 10 ? HOURs : `0${HOURs}`;

    Date_.Minutes.innerHTML = MINUTEs >= 10 ? MINUTEs : `0${MINUTEs}`;

    Date_.Seconds.innerHTML = SECONDs >= 10 ? SECONDs : `0${SECONDs}`;

    if (DiffDate <= 1) {
        ResetDateFields();

        event.Done = true; // Event End

        for (const el in Date_) { // Add Class Flash To Box Date
            Date_[el].parentElement.classList.toggle("flash");
        }
    } // if Event Date Come The Timer End

}

function TimerDate(event) {
    let Interval = setInterval(() => {
        TimerChangeDate(event, Interval);
    }, 1000);

    return Interval;
}

function EventToField(ArrayOfEvents) {

    EventsFields.innerHTML = ''; //Reset Container Html
    let EventField;
    ArrayOfEvents.forEach((el) => {
        EventField = CreateEventHtml(el.Id, el.Title, el.Done);
        EventsFields.appendChild(EventField);
    });

    // let arr = document.querySelectorAll("#events .events-list .events-fields div");
    let arr = EventsFields.childNodes;


    arr.forEach((eventField, index) => { // Set Events On Buttons And Element onClick
        eventField.onclick = () => {
            let DateEvent_Id = eventField.getAttribute("data-EventId");
            console.log(+DateEvent_Id)
            SetTimeP(+DateEvent_Id); // Put Event Date To Current Event Clicked To P
        };

        eventField.lastElementChild.firstElementChild.onclick = () => {
            SendEventToTimer(ArrayOfEvents[index]); // Btn Show Will Send Event To Show In Page
            SubscribedEvent = true; // Event Already Subscribed 
        };

        eventField.lastElementChild.lastElementChild.onclick = () => {
            ArrayOfEvents = ArrayOfEvents.filter((el, indexChild) => index !== indexChild); // Delete Event
            AddToLocalStorage(ArrayOfEvents); // Will Delete From Local Storage
        };
    })
}

function AddToLocalStorage(ArrayOfEvents) {
    window.localStorage.setItem('Events', JSON.stringify(ArrayOfEvents)); //Add To Local Storage
    GetFromLocalStorage();
}

function GetFromLocalStorage() {
    if (window.localStorage.getItem("Events")) {
        ArrayOfEvents = JSON.parse(window.localStorage.getItem("Events"));
        EventToField(ArrayOfEvents);
        // TimerDate(ArrayOfEvents[5]);//Send First Event In Local Storage
    }
}

otherEvent.onclick = () => {
    if (MAX_NUM_OF_ELEMENT !== 0) {

        if (EventNum === (MAX_NUM_OF_ELEMENT)) {
            (EventNum = 0)
        }

        // if (SubscribedEvent) {
        SubscribedEvent = false;
        // } // Current Event Hasn't Been Subscribed
        SendEventToTimer(ExistenceEvent[EventNum++]);

        // console.log(`event num ${EventNum} in Other`);//Test
        // console.log(`Max event num ${MAX_NUM_OF_ELEMENT} in other`);//Test
    } else {
        AvailableEvents();
    }
}

function SendEventToTimer(Event) {
    for (const el in Date_) { // Add Class Flash To Box Date
        Date_[el].parentElement.classList.remove("flash");
    }
    if (ThereEvent) {
        clearInterval(interval);
        interval = TimerDate(Event);
    } else {
        ThereEvent = true;
        interval = TimerDate(Event);
    }

    infoEvent.firstElementChild.innerHTML = Event.Title;
    infoEvent.lastElementChild.innerHTML = Event.Details;
}

function ResetDateFields() { // reset field of Date Timer 
    Date_.Days.innerHTML = '00';
    Date_.Hours.innerHTML = '00';
    Date_.Minutes.innerHTML = '00';
    Date_.Seconds.innerHTML = '00';
    clearInterval(interval);
}