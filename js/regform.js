$(document).ready(function () {

    // reg form variables
    var form = $("#regForm");
    var name = $("#name");
    var nameInf = $("#nameInf");
    var email = $("#email");
    var emailInf = $("#emailInf");
    var phone = $("#phone");
    var phoneInf = $("#phoneInf");
    var site = $("#site");

    // Blur = Blur is when you click inside of a field and then click outside of it, causing the event "blur" to trigger. In
    // the case of this and the yendesign example, when a user clicks outside of a field, it will validate that field and
    // notify the user if it is invalid.
    name.blur(validateName);
    email.blur(validateEmail);
    phone.blur(validatePhone);
    site.blur(validateSite);

    // Key press: keyup validates each time a key is pressed. So as the user is typing it is constantly being validated.
    name.keyup(validateName);
    email.keyup(validateEmail);
    phone.keyup(validatePhone);
    site.keyup(validateSite);

    // when submit button is clicked in form
    form.submit(function() {
        if (validateName() && validateEmail() && validateSite() && validatePhone)
            alert('This would return true, but since this goes nowhere... Alert!');
        else
            return false;
    });

    // Validate Functions
    function validateName() {
        if (name.val() == "") {
            name.addClass("error"); // This adds a class that I can change in the style sheet to make it become red or however I want to style it
            nameInf.text("Please enter a name."); // This changes the text of the span when there is an invalid name.
            nameInf.addClass("error"); // Adds a class property to the span for errors, aka red text or however I want to style it.
            return false;
        }
        else {
            name.removeClass("error"); // Removes error stylings when valid
            nameInf.text("What is your name?"); // Original Text when valid
            nameInf.removeClass("error"); // Removes error stylings when valid
            return true;
        }
    }

    function validateEmail() {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        var temp = $("#email").val();

        if (pattern.test(temp)) {
            email.removeClass("error");
            emailInf.text("Enter your email address.");
            emailInf.removeClass("error");
            return true;
        }
        else {
            email.addClass("error");
            emailInf.text("Please enter a valid email address!");
            emailInf.addClass("error");
        }
    }

    function validatePhone() {
        var a = $("#phone").val();
        var filter = /^[0-9-+]+$/;
        if (filter.test(a)) {
            phone.removeClass("error");
            phoneInf.text("Please enter your phone number.");
            phoneInf.removeClass("error");
            return true;
        }
        else {
            phone.addClass("error");
            phoneInf.addClass("error");
            phoneInf.text("Invalid Phone Number. Try again!");
            return false;
        }
    }
    function validateSite() {
        if (site.val().length < 5) {
            site.addClass("error");
            return false;
        }
        else {
            site.removeClass("error");
            return true;
        }
    }

    
});