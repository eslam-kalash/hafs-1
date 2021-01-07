import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FreeSession = () => (
    <section className="free-session">
        <div className="row m-0">
            <div className="col-lg-6 position-relative p-0">
                <div className="free-session__container">
                    <div className="free-session__title">
                        Want to have a free session? <br />Sign up to be a part of our Quran community.
                    </div>
                    <p>It's easier than you think!</p>
                    <a href="/free-session" className="btn btn--primary">Start now &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></a>
                </div>
            </div>
            <div className="col-lg-6 p-0">
                <img src="img/Group 390.png" alt="free session"/>
            </div>
        </div>
    </section>
)

export default FreeSession;