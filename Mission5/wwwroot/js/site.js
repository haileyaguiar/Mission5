// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateBtn').click(function () {
        // Get input values
        var hours = parseFloat($('#hours').val());
        var hourlyRate = parseFloat($('#hourlyRate').val().substring(1)); // Remove '$' and parse to float

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number of hours.');
            return;
        }

        // Calculate total
        var total = hours * hourlyRate;

        // Display total
        $('#total').val('$' + total.toFixed(2));
    });

});
