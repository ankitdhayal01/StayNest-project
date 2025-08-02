// Bootstrap form validation
(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });
})();

// Initialize flatpickr for date range selection
document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#datepicker", {
    mode: "range",
    dateFormat: "d M Y",
    minDate: "today",
    maxDate: new Date().fp_incr(365) // 1 year from today
  });
});
