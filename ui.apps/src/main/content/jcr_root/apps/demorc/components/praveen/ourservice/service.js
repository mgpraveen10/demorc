"use strict";



use(function () {
var service = resource.getChild("portfolios").listChildren();

return {
allservices: service,
};
});