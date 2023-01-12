import React from 'react'

const About = () => {
    return (
        <section className="section about">
            <div className="container">
                <div className="about__container">
                    <div className="about__container-item">
                        <h3 className="about__title">Little Lemon</h3>
                        <p className="about__sub-title">Chicago</p>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Et similique expedita ipsam, dolores, quos
                            nostrum placeat accusamus nulla doloribus suscipit
                            nisi aliquam, at quas? Nihil inventore deleniti
                            nostrum et illo.
                        </p>
                    </div>
                    <div
                        className="about__container-item"
                        style={{ position: 'relative' }}
                    >
                        <img
                            className="about__img-1"
                            src={require('../images/a.jpg')}
                            alt=""
                        />
                        <img
                            className="about__img-2"
                            src={require('../images/b.jpg')}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
