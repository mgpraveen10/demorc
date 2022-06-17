
"use strict";

use(function () {
    var images = resource.getChild("images").listChildren();

    return {
        allImages: images,
    };
});