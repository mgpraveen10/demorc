use( function () {

    var linksList = [];

    var linkArray = properties.get("jcr:title");
    if(linkArray != null){
        for(var i = 0; i < linkArray.length; i++) {
        var singleObj = {};
        var itemObject =  JSON.parse(linkArray[i]);
    };
    }

   return {
        linksList: linksList
    };
});