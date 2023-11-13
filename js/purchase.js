(() => {
    let earbudImg = document.querySelector("#earbud-img");
    let colourElements = document.querySelectorAll(".colour");

    const colourOptions = {
        pink: { 
                src: "images/rose-colour.jpg",
                alt: "Rose Quartz",
            
        },

        green:{
                src: "images/green-colour.jpg",
                alt: "Green Jade",
        },

        white:{
                src: "images/white-colour.jpg",
                alt: "White Marble",
        },

        blue:{
                src: "images/blue-colour.jpg",
                alt: "Blue Quartz",
        }
    };

    function updateEarbudImage() {

        earbudImg.innerHTML = "";
        
        let image = document.createElement('img');
        image.src = colourOptions[this.dataset.team]['src'];
        image.alt = colourOptions[this.dataset.team]['alt'];
        earbudImg.appendChild(image);
    
    }
       
    colourElements.forEach(productColour => productColour.addEventListener('click', updateEarbudImage));


})();



