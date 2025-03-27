document.addEventListener("DOMContentLoaded", function () {
  const greetings = ["Hi", "नमस्ते", "Bonjour", "こんにちは", "Hola", "你好"];
  const greetingElement = document.getElementById("greeting");
  const introScreen = document.getElementById("intro");
  const portfolio = document.getElementById("portfolio");

  let index = 0;

  function showGreeting() {
    if (index < greetings.length) {
      greetingElement.textContent = greetings[index];
      index++;
      setTimeout(showGreeting, 500);
    } else {
      introScreen.style.transition = "opacity 1s ease-out";
      introScreen.style.opacity = "0";

      setTimeout(() => {
        introScreen.style.display = "none";
        portfolio.style.transition = "opacity 1s ease-in-out";
        portfolio.style.opacity = "1";
      }, 1000);
    }
  }

  greetingElement.textContent = greetings[0];
  setTimeout(showGreeting, 400);
});
