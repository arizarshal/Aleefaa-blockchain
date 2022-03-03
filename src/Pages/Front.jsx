import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "../Styles/Front.module.css";
import image_front from "../Images/front_gif_2555.png";
import tools_1 from "../Images/tools_1_133.png";
import tools_2 from "../Images/tools_2_144.png";
import tools_3 from "../Images/tools_3_455.png";
import growing_8865 from "../Images/growing_8865.png";

const Front = () => {
  return (
    <>
{/* <h1 className={styles.front_h1}>Testing module css</h1> */}
<div className={styles.front_section}>
<div className={styles.front_container}>
<div className={styles.fc_1}>
<h1>Access the Power of Blockchain</h1>
<p>Aleefa will make it easy for developers to build and
deploy decentralized applications in JavaScript.</p>
<div className={styles.front_btn}>
<button className={styles.front_btn_1}>Get Started</button>
<NavLink to ="/community"><button>Aleefa on Github</button></NavLink>
</div>
</div>
<div className={styles.fc_2}>
<img src={image_front}></img>
</div>
</div>
</div>

{/* 2nd Section of Front Page */}

<div className={styles.sec_front_section}>
<h3>We are building a blockchain platform that
focus on <span>solving three existing problems:</span></h3>
</div>

{/* 3rd Section of Tools */}

<div className={styles.tools_div}>
<div className={styles.tool_div}>
  <div className={styles.tool_div_1_img}>
    <img src={tools_1}></img>
  </div>
  <p>Bangble's suite of tools is build in
JavaScript, the most commonly used
programming language in the world</p>
<p className={styles.tools_div_p}>Suite of Tools</p>
</div>

<div className={styles.tool_div}>
  <div className={styles.tool_div_1_img}>
    <img src={tools_2}></img>
  </div>
  <p>An open source SDK with the flexibility
to oasily build and customize your own
blockchain application</p>
<p className={styles.tools_div_p}>Open source SDK</p>
</div>


<div className={styles.tool_div}>
  <div className={styles.tool_div_1_img}>
    <img src={tools_3}></img>
  </div>
  <p>Bangeble utilizes sidechain technology
ensuring notwork stability and cach
chains independence</p>
<p className={styles.tools_div_p}>Sidechain Technoloy</p>
</div>

</div>


{/* 4th Section regarding Global Transparent Economy */}

<div className={styles.section_fourth}>
<div className={styles.section_fourth_text}>
<h2>Bangble arms developers with the disruptive power of
blockchain, in the fight to create <span>more equal,
efficient and transparent global economy.</span></h2>
<p>Learn more about us</p>
</div>

</div>

{/* 5th Section Transactions */}
<div className={styles.section_transactions}>
<div className={styles.section_transaction}>
<div className={styles.section_transaction_1}>
<div className={styles.section_transaction_01}>
<div><p>Transactions per Second</p></div>
<div className={styles.section_transaction_end}><h2>6,502</h2></div>
</div>
<hr/>
<div className={styles.section_transaction_02}>
<div><p>Total Transactions</p></div>
<div className={styles.section_transaction_end}><h2>67,844,656,502</h2></div>
</div>
</div>
<div className={styles.section_transaction_2}>
<div className={styles.section_transaction_01}>
<div><p>Average cost per Transaction</p></div>
<div className={styles.section_transaction_end}><h2>$0.00502</h2></div>
</div>
<hr/>
<div className={styles.section_transaction_02}>
<div><p>Validator Nodes</p></div>
<div className={styles.section_transaction_end}><h2>1,202</h2></div>
</div>

</div>
</div>
</div>

{/* 6th Section */}
{/* Fastest Growing Ecosystem */}

<div className={styles.growing}>
<div className={styles.growing_1}>
<img src={growing_8865}></img>
</div>
<div className={styles.growing_2}>
<h2>Join the Fastest Growing Ecosystem</h2>
<p>Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with over 40  projects spanning DeFi, NFTs, Web3 and more Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with over 400 projects spanning DeFi, NFTs, Web3 and more.</p>
<button>Explore the Ecosystem</button>
</div>
</div>

{/* 7th Section */}

<div className={styles.decent}>
<div className={styles.decent_div}>
<h2>Decentralized</h2>
<h2 className={styles.decent_h2}>and Unstoppable</h2>
<p>Not only is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped.</p>
</div>
</div>
    </>
  )
}

export default Front