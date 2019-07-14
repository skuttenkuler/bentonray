import React, {Component} from 'react';
import './Bio.css'


export default class Bio extends Component{
    render() {
        return(
            <div className='bio_body'>
                <div className='bio_container'>
                    <div className='bio_content'>
                        <p id="indent">    Benton Ray is a small town boy from Nashville, TN turned standup comedian, actor, and writer based in Los Angeles, CA.
                        He is known for his honest and charmingly cute, hateful-best-friend approach to comedy. His standup as
                        been described as dynamic, sharp, edgy, and relatable. Benton's comedic style keeps audiences engaged, as
                        he fully embraces what it means to be a live entertainer, using the full stage and physical elements to
                        punctuate his sharp writing.</p>
                        <p id="indent">    Benton is a regular at Zanies (Nashville), and has performed at clubs like Laughing Skull (Atlanta),
                        Stand Up Live (Alabama), Comedy Off Broadway (Kentucky), and The Comedy Zone (North Carolina).</p>
                        <p id="indent">    Benton Ray was a regular feature for comedian Whitney Cummings (HBO, Comedy Central, Two Broke Girls) on her most
                        recent 2018-2019 tour. He’s also had the opportunity to open for Nicole Byer (Netflix, MTV),
                        Rachel Feinstein (Netflix, Comedy Central, Inside Amy Schumer), and Garfunkel & Oats (The Tonight Show, HBO)
                        to name a few. </p>
                    </div>
                </div>

            </div>
        );
    }
}