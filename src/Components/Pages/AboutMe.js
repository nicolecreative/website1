import React from 'react';

function AboutMe() {
    return (
        <div className='abt'>
            <div className='heading'>
                <h1>Nicole</h1>
                <h1>Bachman</h1>

                <div className='socials'>
                <span>#</span> {/* Added tag */}
                    <img src='/linkedin.png' alt='linkedin' />
                    <span>#</span> {/* Added tag */}
                <img src='/email.png' alt='email' />
                </div>
            </div>

            <div className='paragraph'>
                <h5>Nicole is a graphic designer and creative programmer currently studying at Maryland Institute College of Art. She specializes in working with creative coding tools like touch designer, p5.js, and CSS/React.js for on-screen experiences. Nicole's background includes content creation for the YouTube channel Nicolebbbb with design references and tutorials. She’s completed sponsorships with various editing tools like Wondershare Filmora. She's worked as a video editor for influencer Sarai Jones. Her designs have been featured on channels such as Niki and Gabi and AwesomenessTV.</h5>
                <h5 className='subtext'>Website design and development by Nicole Bachman all rights reserved.</h5>
            </div>
        </div>
    );
}

export default AboutMe;
