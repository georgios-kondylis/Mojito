import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
  
    gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play reverse play reverse",
      },
    }).from(titleSplit.words, {
      opacity: 0,
      duration: 1,
      yPercent: 100,
      ease: "expo.out",
      stagger: 0.04,
    });
  
    // Animate each fadeUpOnScroll element when it comes into view
    gsap.utils.toArray(".fadeUpOnScroll").forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        delay: index * 0.1, // custom stagger delay per element
      });
    });
  });
  
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="mb-[30px] text-2xl">The Best Cocktails</p>
            <h2>Where every detail matters from muddle to garnish</h2>
          </div>

          <div className="sub-content">
            <p className="fadeText">
              Every cocktail we serve is a reflection of our obsession with
              detail, from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold fadeText">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100 fadeText">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div id="GRID" className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First Row */}
        <div className="col-span-1 md:col-span-2 relative about-IMG-height fadeUpOnScroll">
          <div className="noisy rounded-2xl absolute inset-0 z-10 pointer-events-none" />
          <img src="/images/abt1.png"
            alt="abt1"
            className="w-full h-full object-cover aspect-video rounded-2xl"
          />
        </div>

        <div className="col-span-1 relative about-IMG-height fadeUpOnScroll">
          <div className="noisy rounded-2xl absolute inset-0 z-10 pointer-events-none " />
          <img
            src="/images/abt2.png"
            alt="abt2"
            className="w-full h-full object-cover aspect-square rounded-2xl"
          />
        </div>

        {/* Second Row */}
        <div className="col-span-1 md:col-span-1 relative about-IMG-height fadeUpOnScroll">
          <div className="noisy rounded-2xl absolute inset-0 z-10 pointer-events-none" />
          <img
            src="/images/abt3.png"
            alt="abt3"
            className="w-full h-full object-cover aspect-video rounded-2xl"
          />
        </div>

        <div className="col-span-1 md:col-span-2 relative about-IMG-height fadeUpOnScroll">
          <div className="noisy rounded-2xl absolute inset-0 z-10 pointer-events-none" />
          <img
            src="/images/abt4.png"
            alt="abt4"
            className="w-full h-full object-cover aspect-[3/2] rounded-2xl"
          />
        </div>

        {/* Last Row */}
        <div className="col-span-1 md:col-span-3 relative about-IMG-height fadeUpOnScroll">
          <div className="noisy rounded-2xl absolute inset-0 z-10 pointer-events-none" />
          <img
            src="/images/abt5.png"
            alt="abt5"
            className="w-full h-full object-cover aspect-[5/2] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
