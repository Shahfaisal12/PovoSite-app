import React from 'react'

const Brand = () => {
    return (
        <div className="brand-section py-5">
            <div class="container">
                <h1 className='text-center'>
                    <span style={{ color: 'rgb(255, 255, 255)' }}>Friends of</span> Povo
                </h1>
                <div class="row mt-2 text-center">
                    <div class="col-sm-3">
                        <a href="/"><img src="./assests/marketcap.png" alt="" width="100%" /></a>
                    </div>
                    <div class="col-sm-3">
                        <a href="/"><img src="https://povo-site.netlify.app/static/media/f2.e9f0bb4f.svg" alt="" width="100%" /></a>
                    </div>
                    <div class="col-sm-3">
                        <a href="/"><img src="./assests/bsc-scan.png" alt="" width="100%" /></a>
                    </div>
                    <div class="col-sm-3">
                        <a href="/"><img src="./assests/pankcake.png" alt="" width="100%" /></a>
                    </div>
                </div>
                <div class="row  text-center">
                    <div class="col-sm-6">
                        <a href="/"><img src="./assests/cointoplist.png" alt="" width='100%' /></a>
                    </div>
                    <div class="col-sm-6">
                        <a href="/" target="_blank" rel="">
                            <img src="./assests/coinhunter.png" width="100%" alt="" />
                        </a>
                    </div>
                </div>
                <div class="row mt-2 text-center">
                    <div class="col-sm-3">
                        <a href="/"><img src="./assests/gamerfinder.png" alt="" width="100%" /> </a>
                    </div>
                    <div class="col-sm-4">
                        <a href="/" target="_blank">
                            <img src="https://povo-site.netlify.app/static/media/f11.84d90b8d.png" alt="" width="100%" />
                        </a>
                    </div>
                    <div class="col-sm-4">
                        <a href="/" target="_blank">
                            <img src="https://povo-site.netlify.app/static/media/f9.0af30a97.png" alt="" width="100%" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Brand