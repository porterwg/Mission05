// This is java//jquery for calculator page :)
$(document).ready(function () {
    $("#calculateBtn").click(function () {
        let hours = $("#hours").val();
        let rate = $("#rate").val();

        // Validation: Make sure hours is a positive number
        if (hours === "" || hours <= 0) {
            alert("Please enter a valid number of hours.");
            return;
        }

        // Calculate the total cost
        let total = hours * rate;

        // Display the total
        $("#total").val(total.toFixed(2));
    });
});
console.log("Calculator script loaded successfully!");