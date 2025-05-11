import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import "../index.css";
import {useWindowScroll} from 'react-use'
import gsap from 'gsap';
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const Navbar = () => {
  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const [isIndicatorActive, setisIndicatorActive] = useState(false);

  const toggleAudioIndicator = () => {
    setisAudioPlaying((prev) => !prev);
    setisIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  const {y: currentScrollY} = useWindowScroll();
  const [lastScrollY, setlastScrollY] = useState(0)
  const [isNavVisible, setisNavVisible] = useState(true)
    useEffect(()=>{
      if(currentScrollY===0){
        setisNavVisible(true);
        navContainerRef.current.classList.remove('floating-nav');
      }
     else if(currentScrollY > lastScrollY){
        setisNavVisible(false);
        navContainerRef.current.classList.add('floating-nav');
      }
      else if (currentScrollY<lastScrollY){
        setisNavVisible(true);
        navContainerRef.current.classList.add('floating-nav');
      }

      setlastScrollY(currentScrollY);
    } , [currentScrollY ,lastScrollY])

    useEffect(()=>{
gsap.to(navContainerRef.current , {
  y: isNavVisible? 0: -100,
  opacity: isNavVisible? 1:0,
  duration:0.2,

})

    } ,[isNavVisible])

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2 ">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>

          <div className="flex h-full items-center ">
            <div className="hidden md:block ">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  className="nav-hover-btn"
                  href={`#${item.toLocaleLowerCase()}`}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              className="ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`cursor-pointer indicator-line ${
                    isIndicatorActive ? "active" : ""
                  }`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
