import React from 'react'

const Tokonomic = () => {
    return (
        <div className="tokonomic-section">
            <div class="container-fluid Tokenomics" id="Tokenomics">
                <div class="container text-white">
                    <h1 className='text-center'><span style={{ color: 'rgb(255, 255, 255)' }}>Povo</span> Tokenomics</h1>
                    <div class="row mt-5">
                        <div class="col-md-6">
                            <h5><strong>TOTAL SUPPLY: </strong>10,000,000</h5>
                            <h2>Token <strong style={{color:'#26a0d3'}}> Distribution</strong>
                                (Gamenomics)</h2>
                            <ul>
                                <li><span style={{ backgroundColor: 'rgb(23, 108, 165)', padding: '0px 80px', color: 'rgb(255, 255, 255)' }}>Presale</span> 30%</li>
                                <li><span style={{ backgroundColor: 'rgb(255, 193, 7)', padding: '0px 45px', color: 'rgb(255, 255, 255)' }}>Staking pool</span> 23%</li>
                                <li> <span style={{ backgroundColor: 'rgb(91, 63, 144)', padding: '0px 30px', color: 'rgb(255, 255, 255)' }}>Liquidity Pool</span>20%</li>
                                <li> <span style={{ backgroundColor: 'rgb(200, 30, 80)', padding: '0px 10px', color: 'rgb(255, 255, 255)' }}>Advisors</span>10%</li>
                                <li><span style={{ backgroundColor: 'rgb(235, 56, 116)', padding: '0px 10px', color: 'rgb(255, 255, 255)' }}>Airdop</span>7%</li>
                                <li><span style={{ backgroundColor: 'rgb(47, 172, 206)', padding: '0px 4px', color: 'rgb(255, 255, 255)' }}>Gaming</span> 7%</li>
                                <li><span style={{ backgroundColor: 'rgb(245, 140, 139)', padding: '0px', color: 'rgb(255, 255, 255)' }}>Team</span> 3%</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <img src="https://povo-site.netlify.app/static/media/chart.bae4ea49.png" alt="" width="100%" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Tokonomic