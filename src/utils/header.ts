import { gsap } from "gsap";
const tl = gsap.timeline();
function header() {
  tl.to(
    ".header-nav span",
    {
      duration: 1.8,
      y: 0,
      opacity: 1,
      ease: "power4.out",
      delay: 1.5,
      stagger: {
        amount: 0.3,
      },
    },
    "1"
  );

  gsap.fromTo(
    ".header-logo",
    { y: "-200%" },
    {
        duration: 1.8,
      delay: 0.6,
      y: "0%",
      ease: "expo.inOut",
    }
  );

  gsap.fromTo(
    ".header-cart",
    { y: "-200%" },
    {
        duration: 1.8,
      delay: 1,
      y: "0%",
      ease: "expo.inOut",
    }
  );
}

export default header;
