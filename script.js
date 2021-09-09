(function(){
    setInterval(setClock, 1000);

    // storing element nodes in their respective variables
    const secondHand = document.querySelector("[data-second-hand]");
    const minuteHand = document.querySelector("[data-minute-hand]");
    const hourHand = document.querySelector("[data-hour-hand]");

    function setClock(){
        // creating a new instance of a date object
        const currentDate = new Date();

        //calculating all the necessary ratios for each time elements
        const secondsRatio = (currentDate.getSeconds()) / 60;
        const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
        const hourRatio = currentDate.getHours() / 24;

        //calling a function that sets the rotation of all the arms
        setRotation(secondHand, secondsRatio);
        setRotation(minuteHand, minutesRatio);
        setRotation(hourHand, hourRatio);
    }

    function setRotation(element, timingRatio){
        element.style.setProperty("--rotation", timingRatio * 360);
    }

    // This function gets called before the setTimeout runs the same function to avoid delay after refresh. 
    setClock();
}());