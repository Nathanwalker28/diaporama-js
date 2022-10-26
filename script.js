let currentPageIndex;
const allPages = document.querySelectorAll(".diapo_container .diapo_item");

function display(_index) {
    currentPageIndex = _index;
    allPages.forEach((element, index) => {
        console.log(element);
        console.log(index);
        if (index != _index) {
            element.classList.add("hide");
        } else {
            element.classList.remove("hide");
        }
    });

for (let i = 0; i < allPages.length; i++) {
        if ( i != _index) {
            allPages[i].classList.add("hide");
        } else {
            allPages[i].classList.remove("hide");
        }
    } 
}

display(0)

const buttonPrevious = document.getElementById('btn_previous');
const buttonNext = document.getElementById('btn_next');

buttonPrevious.addEventListener('click', function() {
    if (currentPageIndex > 0) {
        display(currentPageIndex - 1);
    }
})

buttonNext.addEventListener('click', function() {
    if (currentPageIndex < allPages.length - 1) {
        display(currentPageIndex + 1);
    }
})



