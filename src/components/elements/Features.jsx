import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const cardData = [{
    id: '1',
    image: 'https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c92caf0644a6350eba414b_1.svg',
    title1: 'In-game items',
    content: 'In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games'
}, {
    id: '2',
    image: 'https://povo-site.netlify.app/static/media/h2.17c263d5.png',
    title1: 'Cross chain interpretability',
    title2: '& custom wallet',
    content: 'DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the'

}, {
    id: '3',
    image: 'https://povo-site.netlify.app/static/media/h3.c5f8acdf.png',
    title1: 'Multiverse',
    title2: 'gaming',
    content: 'The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one'
}, {
    id: '4',
    image: 'https://povo-site.netlify.app/static/media/h1.4f9f7525.png',
    title1: 'Tokenize character',
    title2: 'items',
    content: 'Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game'
}, {
    id: '5',
    image: 'https://povo-site.netlify.app/static/media/idea.d16413b8.svg',
    title1: 'Gamer/devs can introduce their own token',
    content: 'Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely'
}, {
    id: '6',
    image: 'https://povo-site.netlify.app/static/media/h4.e66c6e38.png',
    title1: 'Dapp Store and game studio integration',
    content: 'Decentralized applications are a set of programs that harness excess power from different nodes globally.'
},]



const Features = () => {


    const [data, setdata] = useState({
        title: '',
        image: null,
        content: ''
    });
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="feature-section py-5">
            <div className="container">
                <div className="row">
                    <h1 className="text-center text-white">Povo Features</h1>
                </div>
                <div className="row">
                    {
                        cardData.map((cardItem, index) => {
                            return (
                                <div className="col-md-4 col-12" key={cardItem.id}>
                                    <div className="card mycard pt-5 border-0 mt-4" style={{ backgroundColor: index % 2 === 1 ? '#8b0000' : 'white' }} >
                                        <div className="d-flex justify-content-center">
                                            <img src={cardItem.image} alt="" width="80px" />
                                        </div>
                                        <div className="card-body">
                                            <div className="title text-center fs-5 fw-bold lh-sm fw-bold mb-3" style={{ color: index % 2 === 1 ? '#FFFFFF' : '#8b0000' }}>
                                                <span class="card-title">{cardItem.title1}</span><br />
                                                <span class="card-title">{cardItem.title2}</span>
                                            </div>
                                            <p className="card-text" style={{ fontWeight: '500', color: index % 2 === 1 ? '#FFFFFF' : '#777' }}>{cardItem.content}</p>
                                            <div className="btn-read d-flex justify-content-end pt-3">
                                                <Button id={cardItem.id} type='buttton' className='btn btn-link fs-5 text-warning fw-bold text-decoration-none' onClick={() => {
                                                    setdata({
                                                        title: `${cardItem.title1} ${cardItem.title2}`,
                                                        content: cardItem.content,
                                                        image: cardItem.image
                                                    });
                                                    handleShow();
                                                }}>Read more</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="feature-modal">
                    <div className="modal-data" >
                        <Modal show={show} onHide={handleClose}>
                            <div>
                                <Modal.Header className='border-0' closeButton>
                                    <Modal.Title style={{ color: '#8b0000' }}>{data.title}</Modal.Title>
                                </Modal.Header>
                                <div className="d-flex justify-content-center py-4">
                                    <img src={data.image} alt="..." width="80px" />
                                </div>
                                <Modal.Body>{data.content}</Modal.Body>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features