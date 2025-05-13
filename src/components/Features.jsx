import React, { useRef, useState } from "react";
import "../index.css";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, settransformStyle] = useState("");
  const itemRef = useRef();
  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    //console.log(left , top ,width , height)
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY-0.5) * 7
    const tiltY = (relativeX-0.5) * -7
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`
    settransformStyle(newTransform)
  };

  const handleMouseLeave = () => {
    settransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52" id="vault">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circularweb text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circularweb text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          {/* <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2"> */}
          <BentoTilt className="bento-tilt_1 col-span-2 row-span-1 md:col-span-1 md:row-span-2 border-hsla rounded-md">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            />
          </BentoTilt>
          {/* <div className="bento-tilt_1 border-hsla rounded-md row-span-1 ms-32 md:col-span-1 md:ms-0"> */}
          <BentoTilt className="bento-tilt_1 border-hsla rounded-md row-span-1 col-span-2 md:col-span-1 md:row-span-1 w-full md:pr-4">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  N<b>e</b>xus
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 border-hsla rounded-md row-span-1 col-span-2 md:col-span-1 md:row-span-1 w-full overflow-hidden">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  Az<b>u</b>l
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-3 rounded-md md:p-2">
              <h1 className="bento-title special-font max-w-64 text-black p-3">
                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center rounded-md"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
