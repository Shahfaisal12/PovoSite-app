import React from 'react'

const Rugpul = () => {
    return (
        <div className="rugpul-section text-white">
                <div class="container">
                    <h1>How <span style={{color: 'darkred'}}>Povo</span> is Rugpul protected</h1>
                    <div class="row">
                        <div class="col-md-6 mt-5 pt-5">
                            <ul>
                                <li>Povo Presale is going held on UniCrypt which prevents rug-pull by offering auto liquidity lock functionality</li>
                                <li>60% of raised funds in presale is locked into liquidity by UniCrypt for 266 years</li>
                                <li>Transaction fee is never above 7% max.</li>
                                <li>Newly created LP tokens are locked in order to ensure transparency.</li>
                                <li>Smart Contract is audited by CertTik.</li>
                            </ul>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src="https://povo-site.netlify.app/static/media/why.75179918.png" className='img-fluid' width="80%" alt="" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Rugpul