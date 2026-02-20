// Alle Buttons mit class "openModal" auswählen
const buttons = document.querySelectorAll(".openModal");

// Jeden Button mit Klick-Event versehen
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        modal.style.display = "block";

        // Schließen-Button im Modal
        const closeBtn = modal.querySelector(".close");
        closeBtn.onclick = () => {
            modal.style.display = "none";
        };

        // Klick außerhalb schließt Modal
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    });
});