import React from 'react'
import { Link } from 'react-router-dom'
const Thank = () => {
    return (
        <div>
            <section className="login-main-wrapper">
                <div className="main-container">
                    <div className="login-process">
                        <div className="login-main-container">
                            <div className="thankyou-wrapper">
                                <h1>
                                    <img
                                        src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png"
                                        alt="thanks"
                                    />
                                </h1>
                                <p>for contacting us, we will get in touch with you soon... </p>
                                <Link to="http://localhost:5173/">Back to home</Link>
                                <div className="clr" />
                            </div>
                            <div className="clr" />
                        </div>
                    </div>
                    <div className="clr" />
                </div>
            </section>

        </div>
    )
}

export default Thank
