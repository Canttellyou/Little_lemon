import React from 'react'

const Testimonials = () => {
    return (
        <section className="section testimonials">
            <div className="container">
                <h2 className="testimonials__title">Testimonials</h2>
                <div className="testimonials__container">
                    <div className="testimonials__card">
                        <div className="testimonials__card-title">
                            <img src={require('../images/star.png')} alt="" />
                        </div>
                        <div className="testimonials__card-img-name">
                            <img
                                className="testimonials__card-img"
                                src={require('../images/1.png')}
                                alt=""
                            />
                            <h4 className="testimonials__card-name">Brian</h4>
                        </div>
                    </div>
                    <div className="testimonials__card">
                        <div className="testimonials__card-title">
                            <img src={require('../images/star.png')} alt="" />
                        </div>
                        <div className="testimonials__card-img-name">
                            <img
                                className="testimonials__card-img"
                                src={require('../images/2.png')}
                                alt=""
                            />
                            <h4 className="testimonials__card-name">Brian</h4>
                        </div>
                    </div>
                    <div className="testimonials__card">
                        <div className="testimonials__card-title">
                            <img src={require('../images/star.png')} alt="" />
                        </div>
                        <div className="testimonials__card-img-name">
                            <img
                                className="testimonials__card-img"
                                src={require('../images/3.png')}
                                alt=""
                            />
                            <h4 className="testimonials__card-name">Brian</h4>
                        </div>
                    </div>
                    <div className="testimonials__card">
                        <div className="testimonials__card-title">
                            <img src={require('../images/star.png')} alt="" />
                        </div>
                        <div className="testimonials__card-img-name">
                            <img
                                className="testimonials__card-img"
                                src={require('../images/4.png')}
                                alt=""
                            />
                            <h4 className="testimonials__card-name">Brian</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
