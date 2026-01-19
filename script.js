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
    emailjs.sendForm("service_32s7afk", "template_7m7u8lb", this
    ).then(
      () => alert("Message sent successfully"),
      (error) => alert("Failed to send message")
    );
  });

