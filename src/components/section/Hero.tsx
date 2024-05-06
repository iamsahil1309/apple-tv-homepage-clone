import { useRef } from "react";
import { Button } from "../Button";
import { Container } from "../Container";
import { useScroll, motion, useTransform } from "framer-motion";

export const Hero = () => {
  const videoContainerRef = useRef(null);

  const {scrollYProgress} =useScroll({
    target: videoContainerRef,
    offset: ['start start', 'end end']
  })

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1,1,0])

  return (
    <div className=" relative bg-background text-white  ">
      <motion.div
        style={{ opacity }}
        ref={videoContainerRef}
        className="absolute -top-[--header-height] left-0 h-[200vh] w-full"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/public/posters/scary-building.webp"
        />
      </motion.div>

      <Container className="relative z-10 h-[--hero-height] pb-7">

        <motion.div
            className="flex h-full flex-col items-start justify-end"
        variants={{
            hidden : {opacity : 0 },
            visible : {opacity : 1},
        }}
        whileInView="visible"
        exit="hidden"
        animate = "hidden"
        viewport={{ amount : 0.9 }}
        >
        <h1 className="text-5xl mb-10 font-bold">
          All Apple Originals. <br />
          Only on Apple TV+.
        </h1>
        <Button classname="mb-16" size="large">
          Stream now
        </Button>

        <div className="flex flex-row justify-center items-center gap-2">
          <p className="font-semibold"> Watch on the </p>
          <span>
            <img height={40} width={40} src="/public/appletv.png" alt="logo" />{" "}
          </span>{" "}
          app.
        </div>
        </motion.div>

      </Container>
    </div>
  );
};
