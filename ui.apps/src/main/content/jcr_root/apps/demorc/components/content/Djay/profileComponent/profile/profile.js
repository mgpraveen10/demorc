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
        PROP_PAGE_name: "name",
        PROP_PAGE_description: "description",
        PROP_PAGE_title: "title",
        PROP_PAGE_link: "readMoreLink",
        PROP_PAGE_title2: "title2",
        PROP_PAGE_link2: "readMoreLink2",


    }

    var profile = {};

    // The actual title content
    profile.name = granite.resource.properties["name"]
    profile.image = granite.resource.properties["image"]

    profile.description = granite.resource.properties["description"];
    profile.title = granite.resource.properties["title"];
    profile.link = granite.resource.properties["readMoreLink"];
    profile.title2 = granite.resource.properties["title2"];
    profile.link2 = granite.resource.properties["readMoreLink2"];


    // The HTML element name
    profile.element = granite.resource.properties[CONST.PROP_TYPE]
            || currentStyle.get(CONST.PROP_DEFAULT_TYPE, "");

    // Adding the constants to the exposed API
    profile.CONST = CONST;

    return profile;

});
