const form = document.getElementById("suscribir-form");
const modal = document.querySelector(".modal");
const closeModalBtn = modal.querySelector("button");

form.addEventListener("submit", function (event) {
        event.preventDefault();
        modal.showModal();
        form.reset();
});
closeModalBtn.addEventListener("click", function () {
        modal.close();
});

if (document.getElementById("contact-form")) {
        const contactForm = document.getElementById("contact-form");
        const contactModal = document.querySelector(".contact-modal");
        const closeContactModalBtn = contactModal.querySelector("button");

        contactForm.addEventListener("submit", function (event) {
                event.preventDefault();
                contactModal.showModal();
                contactForm.reset();
        });
        closeContactModalBtn.addEventListener("click", function () {
                contactModal.close();
        });
}
