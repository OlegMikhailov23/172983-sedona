document
var close = document.querySelector(".modal-content-title-btn");
var popup = document.querySelector(".modal-content-form");
          
          close.addEventListener("click", function(event) {
              event.preventDefault();
              popup.classList.toggle("modal-content-form-close");

      });
