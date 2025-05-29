

document.addEventListener("DOMContentLoaded", () => {
    
    const topShortlistButton = document.querySelector(".shortlist-icon0 img");
    const shortlistButtons = [
        document.querySelector(".shortlist-icon1 img"),
        document.querySelector(".shortlist-icon2 img"),
        document.querySelector(".shortlist-icon3 img")
    ];
    
    const listingBoxes = [
        document.querySelector(".bigYellowBox"),
        document.querySelector(".bigYellowBox2"),
        document.querySelector(".bigYellowBox3")
    ];

    
    let isShortlisted = [true, false, true];

    
    let filterShortlisted = false;

    
    const ICONS = {
        shortlistOn: "figmasite intershala/Shortlist.png",
        shortlistOff: "figmasite intershala/white shortlist.png",
        topOn: "figmasite intershala/heart notepad filled.png",
        topOff: "figmasite intershala/heart notepad.png"
    };

    
    shortlistButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            isShortlisted[index] = !isShortlisted[index];
            button.src = isShortlisted[index] ? ICONS.shortlistOn : ICONS.shortlistOff;

            if (filterShortlisted) {
                listingBoxes[index].classList.toggle("hidden", !isShortlisted[index]);
            }
        });
    });

    var t = 0;
    topShortlistButton.addEventListener("click", () => {
        filterShortlisted = !filterShortlisted;
        topShortlistButton.src = filterShortlisted ? ICONS.topOn : ICONS.topOff;
        listingBoxes.forEach((box, index) => {
            if (filterShortlisted) {
                box.classList.toggle("hidden", !isShortlisted[index]);
            } else {
                box.classList.remove("hidden");
            }
        });
        
    });
});
