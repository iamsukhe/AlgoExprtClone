const menu = document.querySelector(".menu-block");
const menuMain = menu.querySelector(".site-menu-main");
const submenuAll = menu.querySelectorAll(".sub-menu");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
    return array[array.length - 1];
}

function last2(array) {
    return array[array.length - 2];
}


menuMain.addEventListener("click", (e) => {

    if (!menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".nav-item-has-children")) {
        const hasChildren = e.target.closest(".nav-item-has-children");

        showSubMenu(hasChildren);
    }
});
goBack.addEventListener("click", () => {
    const lastItem = last(subMenuArray);
    const lastItemText = last2(subMenuTextArray);
    subMenuArray.pop();
    subMenuTextArray.pop();
    if (subMenuArray.length >= 0) {
        document.getElementById(lastItem).style.animation = "slideRight 0.5s ease forwards";
        menu.querySelector(".current-menu-title").innerHTML = lastItemText;
        setTimeout(() => {
            document.getElementById(lastItem).classList.remove("active");
        }, 300);
    }
    if (subMenuArray.length == 0) {
        menu.querySelector(".mobile-menu-head").classList.remove("active");
    }
})
menuTrigger.addEventListener("click", () => {
    toggleMenu();
})
closeMenu.addEventListener("click", () => {
    toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
    toggleMenu();
})

function toggleMenu() {
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}

function showSubMenu(hasChildren) {
    for (let i = 0; submenuAll.length < i; i++) {
        submenuAll[i].classList.remove("active");
    }
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenuArray.push(subMenu.id);
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector(".drop-trigger").textContent;
    subMenuTextArray.push(menuTitle);

    menu.querySelector(".current-menu-title").innerHTML = menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
}
window.onresize = function() {
    if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }

    }
}


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        $(".site-header--sticky").addClass("scrolling");
        $(".site-header--sticky").addClass("nav-sticky-header");
        $(".menu-block").addClass("menu-block-text-color");
    } else {
        $(".site-header--sticky").removeClass("scrolling"); 
        $(".site-header--sticky").removeClass("nav-sticky-header");
        $(".menu-block").removeClass("menu-block-text-color");
    }
    if (
        document.body.scrollTop > 700 ||
        document.documentElement.scrollTop > 700
    ) {
        $(".site-header--sticky.scrolling").addClass("reveal-header"); 
        $(".site-header--sticky.scrolling").addClass("nav-sticky-header");
        $(".menu-block").addClass("menu-block-text-color");
    } else {
        $(".site-header--sticky.scrolling").removeClass("reveal-header");
        $(".site-header--sticky.scrolling").removeClass("nav-sticky-header");
        $(".menu-block").removeClass("menu-block-text-color");
    }
}

if (jQuery(".testimonial-slider--l8").length > 0) {
    $(".testimonial-slider--l8").slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: true,
        appendArrows: ".testimonial-btn",
        prevArrow: "<button><i class='fas fa-arrow-left'></i></button>",
        nextArrow: "<button><i class='fas fa-arrow-right'></i></button>",
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

}