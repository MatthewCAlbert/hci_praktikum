function toggleNav(x) {
    x.classList.toggle("change");
    document.getElementsByClassName('sidebar')[0].classList.toggle("active");
    document.getElementsByTagName('body')[0].classList.toggle("no-scroll");
}
function closeNav(){
    document.querySelector('div.nav-toggler').classList.remove("change");
    document.getElementsByClassName('sidebar')[0].classList.remove("active");
    document.getElementsByTagName('body')[0].classList.remove("no-scroll");
}
function toggleSearch() {
    if( window.innerWidth <= 800 ){
        document.getElementsByClassName('search-bar')[0].classList.toggle("active");
    }
}
function goToTop(){
    window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
    });
}
const parralax = getComputedStyle(document.querySelector('.parallax'), ':before');//.getPropertyValue('content')[0];
const parllax = document.querySelector(".parallax").style;
const parr = document.getElementsByClassName("parallax-s").style;
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    let val = offset * 0.5 + 'px';
    parllax.setProperty('--posY', val);
});

function hasClass(el, className) {
    var re = new RegExp('(^|\\s+)' + className + '(\\s+|$)');
    return re.test(el.className);
}

function toggleModal(modalName){
    let el = document.querySelector('div[modal-name="'+modalName+'"]');
    if( hasClass(el, "open") ){
        el.classList.remove('open');
    }else{
        el.className += " open";
    }
}

function toggle_loader(bool){
    let el = document.querySelector('div.loader');
    if( bool ){
        //open
        el.classList.remove('close');
        el.className += " open";
    }else{
        //close
        el.classList.remove('open');
        el.className += " close";
    }
}

function nav_href(location){
    open_loading_tab();
    setTimeout(()=>{
        toggle_loader(1);
        setTimeout(()=>{
            window.location = location;
        },300);
    },900);
}


function open_loading_tab(){
    closeNav();
    let el = document.querySelector('.p-loader');
    el.className += " open";
    el = document.querySelector('.p-loader span');
    let ct = 0;
    let inter = setInterval(()=>{
        if( ct%3 == 0 ){
            el.innerHTML = ".";
        }else{
            el.innerHTML += ".";
        }
        ct++;
    },100);
    setTimeout(()=>{
        clearInterval(inter);
    },2000);
}