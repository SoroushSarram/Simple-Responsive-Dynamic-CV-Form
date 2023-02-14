
window.onload = function ()
{
    // checking if localStorage is true or false
    if (localStorage.getItem('email'))
    {
        // success email message
        alert("Thanks for submitting message to Soroush Sarram!");
        // localStorage clear
        localStorage.clear();
    }
}

// responsive tab nav bar script start
// define tab toggle variable
const tabs = document.getElementById("buttonWrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e =>
{
    //when click elements in tabs, put id property of clicked element id variable
    const id = e.target.dataset.id;
    //if id variable true
    if (id)
    {
        // removing class property("active") of all tab buttons
        tabButton.forEach(btn => {btn.classList.remove("active");});

        // adding class property("active") of clicked tab button
        e.target.classList.add("active");


        // removing class property("active") of all tab contents
        contents.forEach(content => {content.classList.remove("active");});

        // adding class property("active") of tab content relative with clicked tab button.
        const element = document.getElementById(id);
        element.classList.add("active");

        // this is script for toggle button of mobile version
        if (e.target.classList.contains('tab-button'))
        {
            document.getElementById('buttonWrapper').classList.remove('open')
            document.getElementsByClassName('nav-toggler')[0].classList.remove('toggler-open')
        }
    }
}

// define toggle nav variables
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners()
{
    // toggler icon click event
    navToggler.addEventListener('click', togglerClick);
    // nav links click event
    navLinks.forEach(elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick()
{
    navToggler.classList.toggle('toggler-open');
    navMenu.classList.toggle('open');

}
// navLinkClick function
function navLinkClick()
{
    if (navMenu.classList.contains('open'))
    {
        navToggler.click();
    }
}
// responsive tab nav bar script end


var cvBtn = document.getElementById("cvBtn");
cvBtn.onclick = function ()
{
    document.getElementById('tabHomeBtn').classList.remove('active');
    document.getElementById('home').classList.remove('active');
    document.getElementById('tabCvBtn').classList.add('active');
    document.getElementById('cv').classList.add('active')
}

var contactBtn = document.getElementById("contactBtn");
var conName = document.getElementById("conName");
var conEmail = document.getElementById("conEmail");
var conPhone = document.getElementById("conPhone");
var conText = document.getElementById("conText");

contactBtn.onclick = function ()
{
    if (conName != "" && conEmail != "" != "" && conPhone != "" != "" && conText != "")
    {
        // setting variable in localstorage
        localStorage.setItem('email', true);
    }
}