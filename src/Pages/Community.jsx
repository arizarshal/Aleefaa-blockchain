import React from 'react';
import comm from '../Styles/Community.module.css';
import comm_img from '../Images/community_447.png';
import telegram from '../Images/telegram_58814.png';
import twitter from '../Images/Twitter_2031.png';
import youtube from '../Images/Youtube_0025.png';
import discord from '../Images/Discord_8855.png';
import reddit from '../Images/Reddit_7654.png';
import email from '../Images/Email_8750.png';
import Footer from '../Components/Footer';

const Community = () => {
  return (
    <div className={comm.community_page}>
<div className={comm.hero_section}>
<div className={comm.hero_text}>
<h2>Aleefa Community</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
<div className={comm.hero_image}>
<img src={comm_img}></img>
</div>
</div>

{/* 2nd Section as Wayfinding */}

<div className={comm.wayfinding}>
<h1>Wayfinding</h1>
<p>The following are our most frequented and updated communication channels. You name it, we’ve got it!</p>
</div>

{/* 3rd Section */}
<div className={comm.social}>

<div className={comm.sc_1}>
<p>Telegram</p>
<img src={telegram}></img>
</div>

<div className={comm.sc_1}>
<p>Twitter</p>
<img src={twitter}></img>
</div>

<div className={comm.sc_1, comm.yt}>
<p>Youtube</p>
<img src={youtube}></img>
</div>

<div className={comm.sc_1, comm.disc}>
<p>Discord</p>
<img src={discord}></img>
</div>

<div className={comm.sc_1}>
<p>Reddit</p>
<img src={reddit}></img>
</div>

<div className={comm.sc_1, comm.eml}>
<p>Email</p>
<img src={email}></img>
</div>
</div>


{/* 4th Section- Featured Videos */}

<div className={comm.video}>
<h3>Featured Video</h3>
<p>Connect with on video!</p>
<div className={comm.videos}>
<iframe width="350" height="270" src="https://www.youtube.com/embed/mF3WL9tr2Vw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="350" height="270" src="https://www.youtube.com/embed/YK3UjUgS6uE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="350" height="270" src="https://www.youtube.com/embed/7IU1SSyFyi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="350" height="270" src="https://www.youtube.com/embed/VWNTRZPG_QY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
    <Footer/>

    </div>
  )
}

export default Community