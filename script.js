(function(){
    setInterval(setClock, 1000);

    const secondHand = document.querySelector("[data-second-hand]");
    const minuteHand = document.querySelector("[data-minute-hand]");
    const hourHand = document.querySelector("[data-hour-hand]");

    function setClock(){
        const currentDate = new Date();
        const secondsRatio = (currentDate.getSeconds()) / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hourRatio = currentDate.getHours() / 24;

        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hourRatio);
    }

    function setRotation(element, timingRatio){
        element.style.setProperty("--rotation", timingRatio * 360);
    }

    setClock();
}());