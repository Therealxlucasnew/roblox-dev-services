const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name");
  const contact = formData.get("contact");
  const project = formData.get("project");
  const message = formData.get("message");

  const email = "your-email@example.com";
  const subject = encodeURIComponent(`Roblox development request from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}
Contact: ${contact}
Project type: ${project}

Project details:
${message}`
  );

  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
