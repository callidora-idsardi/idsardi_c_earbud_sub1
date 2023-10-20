(() => {
    console.log("IIFE Fired");


    //variables
    const model = document.querySelector("#model");
    const hotSpots = document.querySelectorAll(".Hotspot");



    //functions
    const infoSpots = [

        {
            title: "Earbud Speaker",
            desc: "Crystal Clear speaker technology - conversation-amplify abilities while filtering unwanted sounds. Play music undisturbed!",
            image: "images/hotspot1-music.svg"
        },

        {
            title: "Eartip Size M",
            desc: "Get the perfect fit with a selection of earbud sizes - S, M & L silicone tip sizes available.",
            image: "images/hotspot2-size.svg"
        },

        {
            title: "Outer Mic",
            desc: "Two outer microphones ensures Crystal Clear calls with minimal interrupions.",
            image: "images/hotspot3-convo.svg"
        },

        {
            title: "Spatial Vent",
            desc: "Noise cancelling spatial vent at the back of the earbud filters out unwanted noises while letting in ambient sounds.",
            image: "images/hotspot4-alert.svg"
        },

        {
            title: "Volume & Call Control",
            desc: "Control the volume by sliding up or down. Call control capabilties upon pressing twice on the slider.Refer to the Crystal ClearBuds instructions for more information.",
            image: "images/hotspot5-calls.svg"
        },

        {
            title: "Right Earbud",
            desc: "Labeled right & left earbuds.",
            image: "images/hotspot6-arrows.svg"
        }

    ];


    infoSpots.forEach((info, index) => {
        let hotspotCon = document.querySelector(`#hotspot-${index + 1}`);
        const spotTitle = document.createElement("h2");
        const spotDesc = document.createElement("p");
        const spotImage = document.createElement("img");

        spotTitle.textContent = info.title;
        hotspotCon.appendChild(spotTitle);

        spotDesc.textContent = info.desc;
        hotspotCon.appendChild(spotDesc);

        spotImage.src = info.image;
        hotspotCon.appendChild(spotImage);
    });


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

    //event Listeners
    model.addEventListener("load", loaded);

    hotSpots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", displayInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });
})();

