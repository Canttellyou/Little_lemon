import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const Hero = () => {
    return (
        <section className="section hero">
            <div className="container">
                <div className="hero__container">
                    <div className="hero__container-item">
                        <h2 className="hero__title">Little Lemon</h2>
                        <p className="hero__sub-title">Chicago</p>
                        <p className="hero__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempora dicta harum magnam rerum autem labore
                            nam doloribus consequatur. Nemo veritatis deserunt
                            asperiores. Dolorem earum ab odit ratione magnam
                            dolores nulla!
                        </p>
                        <Link to="/reserve">
                            <Button text={'Reserve a Table'} />
                        </Link>
                    </div>
                    <div className="hero__container-item">
                        <img src={require('../images/food.png')} alt="Food" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
