import React from 'react'

const Benefit = () => {
    return (
        <div className="benefite-section py-5">
            <div class="container">
                <h1 className='text-center text-white'>Benefit of<span className='fw-bold' style={{color: 'rgb(255, 255, 255)'}}> Povo</span> </h1>
                <div class="row ">
                    <div class="col-md-6 mt-5">
                        <div className="benefit-content-section text-white lh-xl">
                        <h5>Anyone Who Owns Gaming Assets</h5>
                        <ul>
                            <li>Transfer items to another account</li>
                            <li>Renders the items to mount reserve values</li>
                            <li>Ease of using the items accross other supported games</li>
                        </ul>
                        <h5>Game tournament and receive winnings in your wallet</h5>
                        <h5>Artificial Intelligence improve players expericne</h5>
                        <h5>Withdraw funds using PayPal</h5>
                        </div>
                    </div>
                    <div class="col-md-6 ">
                        <img src="https://povo-site.netlify.app/static/media/benefit.568264db.png" width="100%" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit