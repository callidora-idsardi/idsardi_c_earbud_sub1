(() => {
    console.log("IIFE Fired");

    const model = document.querySelector("#model");
    const hotSpots = document.querySelectorAll(".Hotspot");

    const infoSpots = [

        {
            title: "Earbud Speaker",
            desc: "Crystal Clear speaker technology - conversation-amplify abilities while filtering unwanted sounds. Play music undisturbed!",
            image:{
                src:"images/hotspot1-music.svg",
                alt:"music note"
            } 
        },

        {
            title: "Outer Mic",
            desc: "Two outer microphones ensures Crystal Clear calls with minimal interruptions.",
            image:{
                src:"images/hotspot3-convo.svg",
                alt:"conversation bubble"
            } 
        },

        {
            title: "Volume & Call Control",
            desc: "Control the volume by sliding up or down. Call control capabilities upon pressing twice on the slider. Refer to the Crystal ClearBuds instructions for more information.",
            image:{
                src:"images/hotspot5-calls.svg",
                alt:"cell phone"
            } 
        },

        {
            title: "Spatial Vent",
            desc: "Noise canceling spatial vent at the back of the earbud filters out unwanted noises while letting in ambient sounds.",
            image:{
                src:"images/hotspot4-alert.svg",
                alt:"exclamation alert bubble"
            } 
        },

     
        {
            title: "Eartip Size M",
            desc: "Get the perfect fit with a selection of earbud sizes - S, M & L silicone tip sizes available.",
            image:{
                src:"images/hotspot2-size.svg",
                alt:"size arrows"
            } 
            
        }

    ];


    function loadSpots() {
    infoSpots.forEach((info, index) => {
        let hotspotCon = document.querySelector(`#hotspot-${index + 1}`);
        const spotTitle = document.createElement("h2");
        const spotDesc = document.createElement("p");
        const spotImage = document.createElement("img");

        spotTitle.textContent = info.title;
        hotspotCon.appendChild(spotTitle);

        spotDesc.textContent = info.desc;
        hotspotCon.appendChild(spotDesc);

        spotImage.src = info.image.src;
        spotImage.alt = info.image.alt;
        hotspotCon.appendChild(spotImage);
    });
    }   

    loadSpots();

    function loaded() {
        hotSpots.forEach(hotSpot => {
            hotSpot.style.display = "block";
        });
    }

    function displayInfo() {
        let selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, 1, { autoAlpha: 1 });
    }

    function hideInfo() {
        let selected = document.querySelector(`#${this.slot}`);
        gsap.to(selected, 1, { autoAlpha: 0 });
    }

        model.addEventListener("load", loaded);
        hotSpots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", displayInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });
})();

