
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import img1 from "../assets/Images/Galaxy.webp";
import img2 from "../assets/Images/Invasion.jpg";
import img3 from "../assets/Images/Marvels.jpg";
import img4 from "../assets/Images/Ant-man.webp";
import img5 from "../assets/Images/spider.jpg";
import img6 from "../assets/Images/wakanda.jpg";
import img7 from "../assets/Images/doctor.jpg";
import img8 from "../assets/Images/moon knight.jpg";
import img9 from "../assets/Images/msmarvel.jpg";
import img10 from "../assets/Images/shehulk.jpg";


const Section = styled.section`
    min-height: 100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-self: flex-start;
    align-items: flex-start;
    position: relative;
`
const Title = styled.h1`
    font-size: ${props=>props.theme.fontxxxl};
    font-family: "Kaushan Script";
    font-weight: 300;
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    color: ${props=>props.theme.text};
    position: absolute;
    top: 0.5rem;
    left: 5%;
    z-index: 11;

    @media (max-width:64em) {
      font-size:${props=>props.theme.fontxxl}; 
    }

    @media (max-width:48em) {
     font-size:${props=>props.theme.fontxl}; 
    }
`

const Left = styled.div`
    width: 35%;
    background-color: ${props=>props.theme.body};
    color: ${props=>props.theme.text};
    min-height: 100vh;
    z-index: 5;
    position: fixed;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        font-size: ${props=>props.theme.fontlg};
        font-weight: 300;
        width: 80%;
        padding: 10px;
        margin: 0 auto;
    }

    @media (max-width:64em) {
        p{
          font-size: ${props=>props.theme.fontmd};
        }
    }

    @media (max-width:48em) {
      width: 40%;
        p{
          font-size: ${props=>props.theme.fontsm};
        }
    }

    @media (max-width:30em) {
        p{
          font-size: ${props=>props.theme.fontxs};
        }
    }
`

const Right = styled.div`
    position: absolute;
    left: 35%;
    padding-left: 30%;
    min-height: 100vh;
    background-color: ${props=>props.theme.grey};
    /* width: 65%; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1{
        width: 5rem;
        margin: 0 2rem;
    }
`

const Item = styled(motion.div)`
    width: 20rem;
    margin-right: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 100%;
      height: auto;
      cursor: pointer;
    }
    h1{
      display: inline-block;
      width: fit-content;
      font-weight: 500;
      text-align: center;
      cursor: pointer;
    }

    @media (max-width:48em) {
       width: 15rem;
    }

`

const Product = ({img,title=''}) =>{
  return(
    <Item 
      initial={{ filter:'grayscale(100%)'}}
      whileInView={{ filter:'grayscale(0%)'}}
      transition={{duration:0.5}}
      viewport={{once:false,amount:'all'}}
    >
        <img src={img} alt={title}/>
        <h1>{title}</h1>
    </Item>
  )
}

const Shop = () => {

    gsap.registerPlugin(ScrollTrigger);
    const ref = useRef(null);
  
    const Horizontalref = useRef(null);
  
    useLayoutEffect(() => {
      let element = ref.current;
  
      let scrollingElement = Horizontalref.current;
  
      let pinWrapWidth = scrollingElement.offsetWidth;
      let t1 = gsap.timeline();
  
      setTimeout(() => {
        t1.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App", //locomotive-scroll
            scrub: 1,
            pin: true,
            // markers: true,
            // anticipatePin: 1,
          },
          height: `${scrollingElement.scrollWidth}px`,
          ease: "none",
        });
  
        t1.to(scrollingElement, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App", //locomotive-scroll
            scrub: 1,
            // markers: true,
          },
          x: -pinWrapWidth,
  
          ease: "none",
        });
        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
    
      return () => {
        
      };
    }, [])

  return (
    <Section ref={ref} id="shop">
        <Title data-scroll data-scroll-speed='-1'>
            New Movies
        </Title>
        <Left>
            <p>
            Exciting Marvel Cinematic Universe Adventures Await You!
            Are you ready for a thrilling cinematic journey into the extraordinary Marvel Universe? 
            In 2023 and beyond, Marvel is set to take you on an epic ride filled with heroes, villains, jaw-dropping special effects and
            <br/>
            <br/>
            More movies like The Marvels,Ant-Man Wasp Quantumania,Guardians of the Galaxy,Secret Invasion and more Epic Adventures
            Don't miss out on the chance to be part of the Marvel magic as we bring these extraordinary adventures to the big screen.
             Get ready to assemble and witness the Marvel Cinematic Universe as you've never seen it before!
            </p>
        </Left>
        <Right ref={Horizontalref}>
           <Product img={img3} title="The Marvels" />
           <Product img={img4} title="Ant-Man Wasp" />
           <Product img={img1} title="Guardians of the Galaxy" />
           <Product img={img2} title="Secret Invasion" />
           <Product img={img5} title="Spider-Man" />
           <Product img={img6} title="Black Panther" />
           <Product img={img7} title="Doctor Strange" />
           <Product img={img8} title="Moon Knight" />
           <Product img={img9} title="Ms Marvel" />
           <Product img={img10} title="She Hulk" />
        </Right>
    </Section>
  )
}

export default Shop;


