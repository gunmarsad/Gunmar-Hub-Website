document.addEventListener("DOMContentLoaded", () => {

  const links = {
    btn1: "https://ads.luaegis.net/ad-reward/checkpoint-1-e0b60aed",
    btn2: "https://ads.luaegis.net/ad-reward/shrt-fly-f4773339"
  };

  function startCountdown(buttonId, seconds) {
    const btn = document.getElementById(buttonId);
    let timeLeft = seconds;

    const timer = setInterval(() => {
      timeLeft--;
      btn.textContent = `Please wait... (${timeLeft}s)`;

      if (timeLeft <= 0) {
        clearInterval(timer);
        btn.disabled = false;
        btn.textContent = "Get Key";

        btn.onclick = () => {
          window.location.href = links[buttonId];
        };
      }
    }, 1000);
  }

  startCountdown("btn1", 14);
  startCountdown("btn2", 14);

});