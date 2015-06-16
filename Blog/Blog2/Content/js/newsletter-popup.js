
$(document).ready(function () {
    $('button.popup-modal-button-close').click(function () {
        closePopup();
    });

});

function closePopup() {
    $("div.popup-modal").hide();
    $("div.popup-overlay").remove();
}

function showNewsLetter() {
    var cookieName = 'popup-timer';
    var popupDisplayed = Cookies.get(cookieName);
    console.log("cookie: " + popupDisplayed);

    if (popupDisplayed === undefined) {
        popupDisplayed = 1;
        Cookies.set('popup-timer', popupDisplayed);
    }
    else {
        if (popupDisplayed < 11) {
            popupDisplayed++;
            Cookies.set('popup-timer', popupDisplayed);
        }
    }
    if (popupDisplayed <= 3) {
        showPopup();
    }
}

function showPopup() {
    $("body").append('<div class="popup-overlay"><div class="popup-close-backdrop"></div></div>');
    $("div.popup-modal").show();
}

(function () {
    //setTimeout(showPopup, 3000);
    setTimeout(showNewsLetter, 3000);
})();