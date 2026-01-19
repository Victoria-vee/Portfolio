const hamburger = document.getElementById("hamburger");
const links = document.querySelector("header .links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
});

document
  .getElementById("contactform")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Send message to YOU
emailjs.send("service_32s7afk","template_7m7u8lb").then(() => {

      // // Send auto-reply to USER
      // emailjs.sendForm(
      //   "YOUR_SERVICE_ID",
      //   "portfolio_autoreply",
      //   this
      // );

      alert("Message sent successfully");
    }).catch(() => {
      alert("Failed to send message");
    });
  });
