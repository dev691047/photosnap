(function () {
	"use strict";

    const form = document.getElementById('pricing');
    const checkbox = document.getElementById('billing');
    const duration = document.querySelectorAll('.pricing-subscription__duration');
    const basic = document.getElementById('basic-price');
    const pro = document.getElementById('pro-price');
    const business = document.getElementById('business-price');
    const button = document.querySelectorAll('.js-pickupPlan');
    const input = document.getElementById('pickup_plan');
    
    function toggleDuration(value) {
      duration.forEach(item => item.innerHTML = value);
    }

    function togglePrice(basicPrice, proPrice, businessPrice) {
      basic.children[0].innerHTML = "$" + basicPrice;
      pro.children[0].innerHTML = "$" + proPrice;
      business.children[0].innerHTML = "$" + businessPrice;
    }

    checkbox.onclick = () => {
      if (checkbox.checked === true) {
        togglePrice("190.00", "390.00", "990.00");
        toggleDuration("per year");
      }
      if (checkbox.checked === false) {
        togglePrice("19.00", "39.00", "99.00");
        toggleDuration("per month");
      }
    }

    button.forEach(item => {
      item.addEventListener('click', () => {
        if (checkbox.checked === true) input.value = item.parentElement.dataset.yearly;
        if (checkbox.checked === false) input.value = item.parentElement.dataset.monthly;
      });
    })

    form.addEventListener("submit", (event) => {
      event.preventDefault();
    })

})();