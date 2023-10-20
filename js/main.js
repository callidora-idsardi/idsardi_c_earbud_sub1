(() => {
    console.log("IIFE Fired");


    //variables
    const model = document.querySelector("#model");
    const hotSpots = document.querySelectorAll(".Hotspot");


    //functions
    function loaded() {
        hotSpots.forEach(hotSpot => {
            hotSpot.style.display = "block";
        });
    }

    function displayInfo() {
        //console.log(this.slot);
        //console.log(`#${this.slot}`);
        //since the slot value matches the id value I can use the slot value as a selector to get to the div I want.
        let selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, 1, { autoAlpha: 1 });
    }

    function hideInfo() {
        //console.log(this.slot);
        //console.log(`#${this.slot}`);
        let selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, 1, { autoAlpha: 0 });
    }

    //Event Listener
    model.addEventListener("load", loaded);

    hotSpots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", displayInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });
})();

