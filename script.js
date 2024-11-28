document.addEventListener("DOMContentLoaded", () => {
    const tips = document.querySelectorAll('.tip');
    tips.forEach((tip, index) => {
        setTimeout(() => {
            tip.style.opacity = "1";
            tip.style.transform = "translateY(0)";
        }, index * 300);
    });

    // Contact form animation on focus
    const formFields = document.querySelectorAll('#contact-form input, #contact-form textarea');
    formFields.forEach(field => {
        field.addEventListener('focus', () => {
            field.style.boxShadow = '0 0 10px var(--primary-color)';
        });
        field.addEventListener('blur', () => {
            field.style.boxShadow = 'none';
        });
    });
});
