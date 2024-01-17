window.addEventListener("load", () => {
    const secondsClac = document.querySelector(".clac-sec");
    const minutesClac = document.querySelector(".clac-min");
    const hoursClac = document.querySelector(".clac-hor");

    function setDate(){
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondsClac.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minutesClac.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hoursClac.style.transform = `rotate(${hoursDegrees}deg)`;
    }

    setInterval(setDate, 1000);
})