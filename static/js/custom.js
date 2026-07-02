$(document).ready(function() {
    $("p img").each(function() {
        var currentImage = $(this);
        var altText = currentImage.attr("alt");
        var titleAttr = altText ? " data-title='" + altText + "'" : "";
        currentImage.wrap("<a href='" + currentImage.attr("src") + "' data-lightbox='lightbox'" + titleAttr + "></a>");
    });
});