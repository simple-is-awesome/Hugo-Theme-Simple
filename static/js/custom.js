$(document).ready(function() {
    $("p img").each(function() {
        var currentImage = $(this);
        currentImage.wrap("<a href='" + currentImage.attr("src") + "' data-lightbox='lightbox' data-title='" + currentImage.attr("alt") + "'></a>");
    });
});