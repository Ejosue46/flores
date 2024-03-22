import { document } from 'some-library'; // Add missing import statement
document.addEventListener("DOMContentLoaded", () => { // Use arrow function
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
  