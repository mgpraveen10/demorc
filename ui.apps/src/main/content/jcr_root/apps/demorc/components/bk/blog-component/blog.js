
"use strict";

use(function () {
    var blogs = resource.getChild("blogs").listChildren();

    return {
        allBlogs: blogs,
    };
});