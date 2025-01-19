import React from 'react'
import PopArt from "../../assets/images/pop-art.jpg"
import Abstract from "../../assets/images/abstract.jpg"
import Vivid from "../../assets/images/vivid.jpg"
import Music from "../../assets/images/music.jpg"
import Vehicles from "../../assets/images/vehicles.jpg"
import Landscape from "../../assets/images/landscape.jpg"


function Collections() {
  return (
    <section id="collections">
        <h2>Collections</h2>
        <ul>
            <li data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                <figure className="color7">
                    <img src={PopArt}/>
                    <figcaption>
                        <a href="#">Pop art</a>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure className="color2">
                    <img src={Abstract}/>
                    <figcaption>
                        <a href="#">Abstract</a>
                    </figcaption>
                </figure>
            </li>
            <li data-aos="fade-left" data-aos-offset="500">
                <figure className="color6">
                <img src={Vivid}/>
                    <figcaption>
                        <a href="#">Vivid</a>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure className="color8">
                <img src={Music}/>
                    <figcaption>
                        <a href="#">Music</a>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure className="color4">
                <img src={Vehicles}/>
                    <figcaption>
                        <a href="#">Vehicles</a>
                    </figcaption>
                </figure>
            </li>
            <li>
                <figure className="color3">
                <img src={Landscape}/>
                    <figcaption>
                        <a href="#">Landscape</a>
                    </figcaption>
                </figure>
            </li>
        </ul>
    </section>
  )
}

export default Collections;