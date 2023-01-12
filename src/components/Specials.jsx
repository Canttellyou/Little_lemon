import Button from './Button'
import { Link } from 'react-router-dom'

const Specials = () => {
    return (
        <div className="section specials">
            <div className="container">
                <div className="specials__heading">
                    <h2 className="specials__title">Specials</h2>
                    <Link to="/order">
                        <Button text="Online Menu" />
                    </Link>
                </div>
                <div className="specials__cards">
                    <div className="specials__card">
                        <img
                            className="specials__card-img"
                            src={require('../images/greek salad.jpg')}
                            alt=""
                        />
                        <h3 className="specials__card-title">Greek Salad</h3>
                        <p className="specials__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Corporis libero quae illum! Provident adipisci
                            natus fugit illum dignissimos laboriosam, suscipit
                            magni officia maiores saepe eaque quidem dolor
                            aspernatur eum iure?
                        </p>
                    </div>
                    <div className="specials__card">
                        <img
                            className="specials__card-img"
                            src={require('../images/lemon dessert.jpg')}
                            alt=""
                        />
                        <h3 className="specials__card-title">Bruchetta</h3>
                        <p className="specials__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Corporis libero quae illum! Provident adipisci
                            natus fugit illum dignissimos laboriosam, suscipit
                            magni officia maiores saepe eaque quidem dolor
                            aspernatur eum iure?
                        </p>
                    </div>
                    <div className="specials__card">
                        <img
                            className="specials__card-img"
                            src={require('../images/lemon dessert.jpg')}
                            alt=""
                        />
                        <h3 className="specials__card-title">Lemon Desert</h3>
                        <p className="specials__card-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Corporis libero quae illum! Provident adipisci
                            natus fugit illum dignissimos laboriosam, suscipit
                            magni officia maiores saepe eaque quidem dolor
                            aspernatur eum iure?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials
