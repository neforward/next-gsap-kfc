import gsap from "gsap";

const tl = gsap.timeline();

function basket() {
  tl.to(
    ".bg-yellow",
    {
      duration: 1.8,
      y: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    },
    "1.8"
  )
    .to(
      ".spicies",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.8"
    )
    .to(
      ".cheese",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.8"
    )
    .to(
      ".chicken-wing",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.6"
    )
    .to(
      ".basket-image",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "2"
    )
    .to(
      ".basket-image",
      {
        y: -90, 
        duration: 2,
        repeat: -1, 
        yoyo: true, 
        ease: "power1.inOut", 
      },
      "3"
    );
}

export default basket;

