{   //here, start navbar javascript

    // all element access here
    let slidemenu_opn_btn = document.querySelector(".slidemenu-opn-btn");
    let slidemenu_cls_btn = document.querySelector(".slidemenu-cls-btn i");
    let darkmode_btn = document.querySelectorAll(".darkmode-btn");
    let lightmode_btn = document.querySelectorAll(".lightmode-btn");
    let modetext = document.querySelector("#modetext");
    let slidemenu = document.querySelector(".slidemenu");

    // here, start slidemenu javascript...
    {
        let opnMenu = slidemenu_opn_btn.addEventListener("click", () => {
            slidemenu.classList.add("slidemenu-show");
            slidemenu_opn_btn.classList.add("slidemenu-opn-btn-effect");

        });
        slidemenu_cls_btn.addEventListener("click", () => {
            slidemenu.classList.remove("slidemenu-show");
            slidemenu_opn_btn.classList.remove("slidemenu-opn-btn-effect");

        });

    }

    // here, start dark/light mode js...
    {
        let mode = "darkmode";

        for (let btn of darkmode_btn) {
            btn.addEventListener("click", () => {
                if (mode === "darkmode") {
                    darkmode_btn[0].innerHTML = "<i class='fa-solid fa-sun'></i>";
                    darkmode_btn[1].innerHTML = "<i class='fa-solid fa-sun'></i>";
                    modetext.textContent = "Light mode";
                    mode = "lightmode";
                } else {
                    darkmode_btn[0].innerHTML = "<i class='fa-solid fa-moon'></i>";
                    darkmode_btn[1].innerHTML = "<i class='fa-solid fa-moon'></i>";
                    modetext.textContent = "Dark mode";
                    mode = "darkmode";
                }
            })
        }
    }

}











{    //here, start skill,s javascript...

let skillImg = document.querySelector(".skill-img");
let skillContainer2 = document.querySelector(".skill-container2");
let innerBox = document.querySelector(".inner-box")
let circleFills = document.querySelectorAll(".work-circle")

skillImg.addEventListener("click", () => {

    skillContainer2.classList.add("skill-container2-show");
    let barFills = document.querySelectorAll(".bar-fill");


    for (let circleFill of circleFills) {
        setTimeout(() => {
          let target = parseInt(circleFill.getAttribute("circle-percent"));
          let current = 0;

          let interval = setInterval(() => {
            if (current <= target) {
              circleFill.style.background = `conic-gradient(#5c3b28 ${current}%, #33251D 0%)`;
              current++;
            } else {
              clearInterval(interval);
            }
          }, 15);
        }, 2000);
      }


    for (let barFill of barFills) {
        barFill.style.width = "0%";



        setTimeout(() => {
            let dataPercent = barFill.getAttribute("data-percent");
            barFill.style.width = dataPercent;
            barFill.classList.add("visible");

        }, 2000);

        
    }

});

skillContainer2.addEventListener("mouseleave", () => {
    skillContainer2.classList.remove("skill-container2-show");


    let barFills = document.querySelectorAll(".bar-fill");

    for (let barFill of barFills) {
        barFill.style.width = "0%";

        setTimeout(() => {
            barFill.classList.remove("visible");

        }, 2000);
    }
    for (let circleFill of circleFills) {
        setTimeout(() => {
        circleFill.style.background = `conic-gradient(#33251D 0%, #33251D 0%)`;

        },2000)
      }
})

}




















{  //here, start ptojects section js..

    //all elements access here
    let cards = document.querySelectorAll(".cards");

    for (let card of cards) {
        let hoverContent = card.querySelector(".hover-content");

        card.addEventListener("mouseenter", () => {
            hoverContent.style.top = "-10%";
            setTimeout(()=>{
                hoverContent.style.top = "10%";
                setTimeout(()=>{
                    hoverContent.style.top = "0";
                },300)
            },300)
        });

        card.addEventListener("mouseleave", () => {
             hoverContent.style.top = "0%";
            setTimeout(()=>{
                hoverContent.style.top = "0%";
                setTimeout(()=>{
                    hoverContent.style.top = "100%";
                },300)
            },300)
        });
    }



    // let cards = document.querySelectorAll(".cards");
    // let hoverContents = document.querySelectorAll(".hover-content");

    // cards.forEach((card, index) => {
    //     let hoverContent = hoverContents[index];

    //     card.addEventListener("mouseover", () => {
    //         hoverContent.style.bottom = "0px";
    //     });

    //     card.addEventListener("mouseleave", () => {
    //         hoverContent.style.bottom = "-100%";
    //     });
    // });


}
















{   // here, start contact javascript

    // all element access here
    let panel1 = document.querySelector(".panel1");
    let panel2 = document.querySelector(".panel2");
    let contactH2 = document.querySelector(".contactH2");
    let contactImgBtn = document.querySelector(".contact-img-content button")

    function hideContactImg() {
        panel1.classList.add("hide-panel1");
        panel2.classList.add("appear-panel2")
    }
    function hideContactContent(e) {
        e.preventDefault();
        contactH2.style.fontSize = "38px";
        contactH2.textContent = "Thanks, We'll get back to you soon.";
        contactImgBtn.style.display = "none";
        panel1.classList.remove("hide-panel1");
        panel2.classList.remove("appear-panel2");

        return false;

    }
}