const FontCtl = function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (window.innerWidth <= 750) {
                document.documentElement.style.fontSize = clientWidth / 75 + 'px';
            } else {
                document.documentElement.style.fontSize = 750 / 75 + 'px';
            }
        };

    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
};
export default {
    FontCtl,
};
