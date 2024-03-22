document.addEventListener("DOMContentLoaded", () => {
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach((flower, index) => {
        setInterval(() => {
            flower.style.transform = "rotate(45deg)";
            setTimeout(() => {
                flower.style.transform = "rotate(0deg)";
            }, 1000);
        }, 2000 + index * 500);
    });
});
  