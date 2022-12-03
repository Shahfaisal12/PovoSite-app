import React from 'react'

const Ifram = () => {
  return (
    <div className="ifram-section bg-dark py-3">
        <div className="container">
        <div className="d-flex justify-content-center" >
            <video controls autoPlay muted poster='' src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4" style={{width:'100%', height:'auto'}} />
        </div>
    </div>
    </div>
  )
}

export default Ifram