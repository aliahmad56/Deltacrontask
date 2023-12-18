import React from 'react';
import '../../assets/styles/global.css';
// import './App.css';
function footer() {
    return (
        <>
            <footer>
                <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
                <ul class="footer-list">
                    <li>
                        <a href="https://www.starwars.com/">Terms of Use</a>
                    </li>
                    <li>
                        <a href="https://www.starwars.com/">Additional Content Information</a>
                    </li>
                    <li>
                        <a href="https://www.starwars.com/">Children's Online Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://www.starwars.com/">Your US State Privacy Rights</a>
                    </li>
                    <li>
                        <a href="https://www.starwars.com/">Star Wars at shopDisney</a>
                    </li>
                    <li>
                        <a href="https://www.starwars.com/">Star Wars Helpdesk</a>
                    </li>
                    <li>
                        <a href="https://www.starwars.com/">Interest-Based Ads</a>
                    </li>
                </ul>
                <a href="https://www.starwars.com/" className='footer-list'>Do Not Sell or Share My Personal Information
                </a>
            </footer>
        </>
    );
}
export default footer;