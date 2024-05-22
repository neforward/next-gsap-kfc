import gsap from "gsap";
const tl = gsap.timeline();

function text() {
  tl.to(".text-section h2", {
    duration: 1.8,
    y: 0,
    opacity: 1,
    ease: "power4.out",
    delay: 1,
    stagger: {
      amount: 0.3,
    },
  })
    .to(
      ".text-section h5",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.2"
    )
    .to(
      ".text-section p",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.4"
    )
    .to(
      ".text-section h6",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.5"
    )
    .to(
      ".text-section h4",
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
      ".text-section button",
      {
        duration: 1.8,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: {
          amount: 0.3,
        },
      },
      "1.5"
    );
}

export default text;
