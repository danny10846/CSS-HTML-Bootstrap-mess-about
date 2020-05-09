$(document).ready(function () {
    var x = 0;
    var s = "";

    console.log("Hello!");


    //jQuery allows us to get elements within our page easier
    var theForm = $("#theForm");
    //gives us a collection as a result, executes methods on the entire collection
    theForm.hide();

    var button = $("#buyButton");
    button.on("click", function () {
        console.log("Buying Item");
    });

    //Gets us the list items inside the product-props
    //The 'this' grabs us the item we clicked on within the list
    var productInfo = $(".product-props li");
    productInfo.on("click", function () {
        console.log("You've clicked on " + $(this).text());
    });

    //jQuery objects conventionally start with dollar sign $
    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    //When we click the login label, it will hide/show the form
    $loginToggle.on("click", function () {
        $popupForm.fadeToggle(500);
    });

});
