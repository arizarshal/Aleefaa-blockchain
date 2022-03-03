import React,{useState} from 'react';
import valid from '../Styles/Valid.module.css';
import front_image from '../Images/valid_front.png';
import faq_image from '../Images/faq_image_4117.png';
import Footer from '../Components/Footer'


const Validators = () => {
    const[show0,setShow0]=useState(false)
    const[show1,setShow1]=useState(false)
    const[show2,setShow2]=useState(false)
    const[show3,setShow3]=useState(false)
    const[show4,setShow4]=useState(false)

  return (
    <>
        <div className={valid.valid_front}>
<div className={valid.valid_text}>
<h1>Secure the Ledger Earn SOL</h1>
<p>Decentralize the network by providing computing resources.</p>
<button>Become a Validator</button>
</div>
<div className={valid.valid_front_img}>
<img src={front_image}></img>
</div>
        </div>

        {/* 2nd Section = Total Validators */}
        <div className={valid.total_validators}>
<div className={valid.current_validators}>
<h1>6,502</h1>
<h3>Current Validators on Mainnet</h3>
</div>
<div className={valid.current_superminority}>
<h1>08</h1>
<h3> Current Superminority</h3>
</div>
        </div>


        {/* 3rd Section = Validators Rewards */}

        <div className={valid.rewards}>
<h1 className={valid.rewards_h1}>Validator Rewards</h1>
<div className={valid.rewards_grids}>

<div className={valid.rewards_grid}></div>
<div className={valid.rewards_grid}></div>
<div className={valid.rewards_grid}></div>

</div>


{/* FAQs */}

<div className={valid.faq_section}>
<div className={valid.faqs}>
<div className={valid.faq_h}><h1>FAQs</h1></div>
    <div  onClick={()=>setShow0(!show0)} className={valid.faq}><h3>1) Why is blockchain considered Trustworthy?<button className="down-arr"><span>&#128071;</span></button></h3></div>
    <div className={valid.togg}>{ show0?<p>Blockchain works on a peer-to-peer network of consensus algorithm, which makes the transactions trustworthy and protects them from malicious activities of any third party.</p>:null}</div>
    <div onClick={()=>setShow1(!show1)}  className={valid.faq}><h3>2) What is consortium algorithm?<button className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className={valid.togg}>{ show1?<p>It is a blockchain-enabled network wherein consensus over unknown nodes is gained over the system of distributed network. Most popular consensus algorithms are POS & POW.</p>:null}</div>
    <div onClick={()=>setShow2(!show2)} className={valid.faq}><h3>3) What are the key feature of blockchain?<button  className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className={valid.togg}>{ show2?<p>Blockchain acts as a structured database on a decentralized ledger technology. It is immutable in nature, signifying that once the data has been entered, it cannot be tampered with. Users have full anonymity and blockchain also overcomes the problem of double spending.</p>:null}</div>
    <div onClick={()=>setShow3(!show3)}  className={valid.faq}><h3>4) What are the various types of blockchain?<button className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className={valid.togg}>{ show3?<p>The main type of blockchain can be classified as public blockchain, private blockchain and hybrid blockchain. Public blockchain is an open network from where data can be accessed freely while a private blockchain is a permissioned network where a user needs to join the network to access the data. Hybrid blockchain is a mix of above two.</p>:null}</div>
    <div onClick={()=>setShow4(!show4)} className={valid.faq}><h3>5) What are the business benefit of blockchain integration?<button className="down-arr"><span>&#x1F447;</span></button></h3></div>
    <div className={valid.togg}>{show4?<p>Blockchain technology provides the benefits of faster transaction settlement with improved transparency, security and traceability of transactions. It also improves efficiency of transactions thereby reducing the cost.</p>:null}</div>


</div>
<div className={valid.faq_image}>
<img src={faq_image}></img>
</div>
</div>

  {/* Further Grids */}

  <div className={valid.rem_grids}>
        <div className={valid.rem_grid}>
<h2>Get Started</h2>
<p>Loreal Ipsum  is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped.</p>
<button>Get Started</button>
        </div>


        <div className={valid.rem_grid}>
<h2>Validators Explorer</h2>
<p>Loreal Ipsum  is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped.</p>
<button>Get Started</button>
        </div>

        <div className={valid.rem_grid}>
<h2>Server Program</h2>
<p>Loreal Ipsum  is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped.</p>
<button>Get Started</button>
        </div>

        <div className={valid.rem_grid}>
<h2>Delegation Problem</h2>
<p>Loreal Ipsum  is Solana ultra-fast and low cost, it is censorship resistant. Meaning, the network will remain open for applications to run freely and transactions will never be stopped.</p>
<button>Get Started</button>
        </div>
        </div>
        </div>

      <Footer />
    </>
  )
}

export default Validators