String.prototype.trim = String.prototype.trim || function () {
    if (!this) return this;
    return this.replace(/^\s+|\s+$/g, "");
};

function showSpinner(directOptions) {
    var loaderOptions;
    if (directOptions != undefined && $.type(directOptions) === "object") {
        loaderOptions = directOptions;
    } else {
        if (Appery.loaderOptions != undefined && $.type(Appery.loaderOptions) === "object") {
            loaderOptions = Appery.loaderOptions;
        }
    }
    if (loaderOptions != undefined) {
        $.mobile.loading('show', loaderOptions);
    } else {
        $.mobile.loading('show');
    }
}

function hideSpinner() {
    $.mobile.loading('hide');
}

function resetActivePageContentHeight() {
    var aPage = $("." + $.mobile.activePageClass);

    if (aPage.is("[data-role='dialog']")) return;

    var aPagePadT = parseFloat(aPage.css("padding-top")),
        aPagePadB = parseFloat(aPage.css("padding-bottom")),
        aPageBorderT = parseFloat(aPage.css("border-top-width")),
        aPageBorderB = parseFloat(aPage.css("border-bottom-width")),
        aPageContentPadT = parseFloat(aPage.find(".ui-content").css("padding-top")),
        aPageContentPadB = parseFloat(aPage.find(".ui-content").css("padding-bottom"));

    aPage.find(".ui-content").css("min-height", $.mobile.getScreenHeight() - aPagePadT - aPagePadB - aPageBorderT - aPageBorderB - aPageContentPadT - aPageContentPadB);
}

$(window).bind("throttledresize", resetActivePageContentHeight);

// Replacing native jQuery show/hide logic to handle mobileinput
(function() {

    var nativeHide = jQuery.fn.hide;
    jQuery.fn.hide = function () {
        if (this.prop('tagName') == 'INPUT' && this.parent(".ui-input-text").length > 0) {
            return nativeHide.apply(this.parent(".ui-input-text").parent(), arguments);
        } else {
            return nativeHide.apply(this, arguments);
        }
    };

    var nativeShow = jQuery.fn.show;
    jQuery.fn.show = function () {
        if (this.prop('tagName') == 'INPUT' && this.parent(".ui-input-text").length > 0) {
            return nativeShow.apply(this.parent(".ui-input-text").parent(), arguments);
        } else {
            return nativeShow.apply(this, arguments);
        }
    };

})();
