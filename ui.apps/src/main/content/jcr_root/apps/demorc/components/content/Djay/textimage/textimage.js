/*******************************************************************************
 * Copyright 2016 Adobe Systems Incorporated
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

"use strict";

/**
 * Title foundation component JS backing script
 */
use(function () {

    // TODO: change currentStyle to wcm.currentStyle

    var CONST = {
        PROP_IMAGE: "image",
        PROP_PAGE_HEADING: "heading",
        PROP_PAGE_TITLE: "title",

    }

    var textimage = {};

    // The actual title content
    textimage.heading = granite.resource.properties["heading"]
    textimage.image = granite.resource.properties["image"]

    textimage.title = granite.resource.properties["title"];


    // The HTML element name
    textimage.element = granite.resource.properties[CONST.PROP_TYPE]
            || currentStyle.get(CONST.PROP_DEFAULT_TYPE, "");

    // Adding the constants to the exposed API
    textimage.CONST = CONST;

    return textimage;

});
