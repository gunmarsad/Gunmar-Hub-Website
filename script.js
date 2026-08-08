document.addEventListener("DOMContentLoaded", function () {

    const links = {

        btn1:
            "https://ads.luaegis.net/ad-reward/lootlabs-48h-be7ca50d",

        btn2:
            "https://ads.luaegis.net/ad-reward/lootlabs-12h-5ff81e86",

        btn3:
            "https://ads.luaegis.net/ad-reward/lootlabs-2655c57e",

        btn4:
            "https://ads.luaegis.net/ad-reward/linkversite-6h-92417478"

    };


    function startCountdown(buttonId, seconds) {

        const button =
            document.getElementById(buttonId);


        if (!button) {

            console.error(
                "Button not found:",
                buttonId
            );

            return;
        }


        let timeLeft = seconds;


        button.disabled = true;

        button.textContent =
            `Please wait... (${timeLeft}s)`;


        const timer =
            setInterval(function () {

                timeLeft--;


                if (timeLeft > 0) {

                    button.textContent =
                        `Please wait... (${timeLeft}s)`;

                }


                if (timeLeft <= 0) {

                    clearInterval(timer);


                    button.disabled = false;

                    button.textContent =
                        "Get Key";


                    button.onclick =
                        function () {

                            const url =
                                links[buttonId];


                            if (!url) {

                                console.error(
                                    "No URL for:",
                                    buttonId
                                );

                                return;
                            }


                            window.location.href =
                                url;

                        };

                }

            }, 1000);
    }


    // Start all countdowns

    startCountdown("btn1", 8);

    startCountdown("btn2", 8);

    startCountdown("btn3", 8);

    startCountdown("btn4", 8);

});
