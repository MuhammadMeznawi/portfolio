document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".accessibility")) {
    applySettings();

    document
      .getElementById("largeTextToggle")
      .addEventListener("change", function () {
        document.documentElement.style.fontSize = this.checked ? "14px" : ""; // Adjust default size as needed
        localStorage.setItem("largeText", this.checked);
        updateSliderText(this);
      });

    document
      .getElementById("highContrastToggle")
      .addEventListener("change", function () {
        document.body.classList.toggle("high-contrast", this.checked);
        localStorage.setItem("highContrast", this.checked);
        updateSliderText(this);
      });

    document
      .getElementById("disableAnimationsToggle")
      .addEventListener("change", function () {
        document.body.classList.toggle("disable-animations", this.checked);
        localStorage.setItem("disableAnimations", this.checked);
        updateSliderText(this);
      });

    document
      .getElementById("adhdFocusToggle")
      .addEventListener("change", function () {
        document.body.classList.toggle("adhd-focus", this.checked);
        localStorage.setItem("adhdFocus", this.checked);
        updateSliderText(this);
      });

    function applySettings() {
      if (localStorage.getItem("largeText") === "true") {
        document.documentElement.style.fontSize = "14px";
        document.getElementById("largeTextToggle").checked = true;
      }

      if (localStorage.getItem("highContrast") === "true") {
        document.body.classList.add("high-contrast");
        document.getElementById("highContrastToggle").checked = true;
      }

      if (localStorage.getItem("disableAnimations") === "true") {
        document.body.classList.add("disable-animations");
        document.getElementById("disableAnimationsToggle").checked = true;
      }

      if (localStorage.getItem("adhdFocus") === "true") {
        document.body.classList.add("adhd-focus");
        document.getElementById("adhdFocusToggle").checked = true;
      }

      updateSliderText(document.getElementById("largeTextToggle"));
      updateSliderText(document.getElementById("highContrastToggle"));
      updateSliderText(document.getElementById("disableAnimationsToggle"));
      updateSliderText(document.getElementById("adhdFocusToggle"));

      document.addEventListener("mousemove", function (e) {
        const focusBar = document.querySelector(".focus-bar");
        const overlay = document.querySelector(".focus-overlay");

        const barMiddlePosition = e.clientY - focusBar.offsetHeight / 2;
        focusBar.style.top = barMiddlePosition + "px";

        overlay.style.setProperty("--beforeHeight", barMiddlePosition + "px");
        overlay.style.setProperty(
          "--afterHeight",
          window.innerHeight - barMiddlePosition - focusBar.offsetHeight + "px"
        );
      });
    }

    function updateSliderText(checkboxElement) {
      if (checkboxElement) {
        const sliderSpan =
          checkboxElement.nextElementSibling.querySelector(".slider");
        sliderSpan.textContent = checkboxElement.checked ? "On" : "Off";
      }
    }

    function updateFocusBarPosition(e) {
      const focusBar = document.querySelector(".focus-bar");
      focusBar.style.top = e.clientY + "px";
    }
  }
});
