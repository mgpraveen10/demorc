"use strict";

use(function () {

    // TODO: change currentStyle to wcm.currentStyle

    var CONST = {
        PROP_IMAGE: "imageFile",
        PROP_PAGE_HEADING: "buttonLabel",
        PROP_PAGE_TITLE: "buttonLinkTo",

    }

    var carouselItems = {};

    // The actual title content
    carouselItems.image = granite.resource.properties["imageFile"]
    carouselItems.buttonLabel = granite.resource.properties["buttonLabel"]

    carouselItems.buttonLinkto = granite.resource.properties["buttonLinkTo"];


    // The HTML element name
    carouselItems.element = granite.resource.properties[CONST.PROP_TYPE]
            || currentStyle.get(CONST.PROP_DEFAULT_TYPE, "");

    // Adding the constants to the exposed API
    carouselItems.CONST = CONST;

    return carouselItems;

});
