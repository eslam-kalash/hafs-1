import React from 'react';

const TeamCard = () => (
    <div className="team__card">
        <div className="team__card--image">
            <img src="https://via.placeholder.com/90" alt="user"/>
        </div>
        <div className="team__card--text">
            <span className="team__card--name">Mohammed Magdy</span>
            <span className="team__card--gender"> - Male</span>
            <p className="team__card--description">
                * Assalamu Alikum. I'm a professional Quran teacher. I have been teaching Quran since my student life. I can teach Recitation, Hifz, Tajweed and Arabic Language
            </p>
            <ul className="team__card--list">
                <span className="team__card--title">I Can Teach: </span>
                <li>Quran memorization</li>
                <li>Tajweed</li>
                <li>Arabic</li>
            </ul>
            <ul className="team__card--list">
                <span className="team__card--title">Languages: </span>
                <li>Arabic</li>
                <li>English</li>
                <li>Hindi</li>
            </ul>
            <div className="team__card--group">
                <span className="team__card--title">Hourly Rate: </span>
                <span className="team__card--detail">10.00$</span>
            </div>
            <div className="team__card--group">
                <span className="team__card--title">Conducted: </span>
                <span className="team__card--detail">3350 Sessions</span>
            </div>
            <div className="team__card--group">
                <span className="team__card--title">Last online: </span>
                <span className="team__card--detail">1 day ago</span>
            </div>
            <div className="team__card--group">
                <span className="team__card--title">Taught: </span>
                <span className="team__card--detail">20 Students</span>
            </div>
            <div className="team__card--group">
                <span className="team__card--title">Time zone: </span>
                <span className="team__card--detail">Africa</span>
            </div>
        </div>
    </div>
);

export default TeamCard;