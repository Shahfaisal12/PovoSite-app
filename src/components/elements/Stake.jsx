import React from 'react'

const Stake = () => {
    return (

            <div className="stake py-5">
                <div className="container mt-5">
                    <div className="row mt-5 pt-5">
                        <div className="col-md-6 col-12">
                            <img src="https://povo-site.netlify.app/static/media/stake.a753a95a.png" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="provo-content">
                                <div className="text-center">
                                    <h1>Provo
                                        <span style={{ color: 'rgb(255, 255, 255)' }}> Staking Platform </span>
                                    </h1>
                                    <a href="/" className='btn btn-lg fs-5 my-3 px-4 fw-bold'>Launched, Povo Staking</a>
                                </div>
                                <ul>
                                    <p><strong className='text-white'>Key features</strong></p>
                                    <li>You can stake your POVO at any time you choose. You can stake any amount of POVO you wish.</li>
                                    <li>Once staked, the contract will deliver a reward continuously for as long as tokens remain staked.</li>
                                    <li>You can withdraw any amount of staked POVO tokens without any locking period</li>
                                    <li>You are free to stake additional amounts at any time</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Stake