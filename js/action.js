emailjs.init("LYoiofclqsraD1Y_G");

document.getElementById("sendMessageBtn").addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  // Validate fields
  if (!name.value || !email.value || !subject.value || !message.value) {
    alert("Please fill out all fields.");
    return;
  }

  const serviceID = "service_tbwrbpf";
  const templateID = "template_gcc984q";

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    subject: subject.value,
    message: message.value,
  };

  const button = document.getElementById("sendMessageBtn");
  button.disabled = true;
  button.textContent = "Sending...";

  emailjs
    .send(serviceID, templateID, templateParams)
    .then((response) => {
      alert("Message sent successfully!");
      console.log("Success:", response);

      // Clear fields
      name.value = "";
      email.value = "";
      subject.value = "";
      message.value = "";

      button.disabled = false;
      button.textContent = "Send Message";
    })
    .catch((error) => {
      alert("Failed to send message. Please try again.");
      console.error("Error:", error);
      button.disabled = false;
      button.textContent = "Send Message";
    });
});
