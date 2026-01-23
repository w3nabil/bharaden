/*!
 * A Product of : <https://github.com/w3nabil/front-end-kit>
 *
 * Copyright (c) 2023-present, w3nabil.
 * Licensed under the Open Equity License.
 */

document.addEventListener('DOMContentLoaded', function() {
    var inputs = document.querySelectorAll('input[type="password"]');
    inputs.forEach(function(input) {
        input.addEventListener('paste', function(event) {
            event.preventDefault();
        });
    });
});

window.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
