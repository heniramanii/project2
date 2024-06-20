import React from 'react'


const Cards = () => {
    return (
        <>
            <div className='d-flex gap-5  mx-auto p-5'>
                <div className="card" style={{ width: '18rem' }}>
                    <img src="card.jpg" className="card-img-top" alt="C:\Users\Admin\Desktop\react_heni\demo\public\card.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Latest Arriavls</h5>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
                <div className="card " style={{ width: '18rem' }}>
                    <img src="card.jpg" className="card-img-top" alt="C:\Users\Admin\Desktop\react_heni\demo\public\card.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Latest Arriavls</h5>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
                <div className="card " style={{ width: '18rem' }}>
                    <img src="card.jpg" className="card-img-top" alt="C:\Users\Admin\Desktop\react_heni\demo\public\card.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Latest Arriavls</h5>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
                <div className="card " style={{ width: '18rem' }}>
                    <img src="card.jpg" className="card-img-top" alt="C:\Users\Admin\Desktop\react_heni\demo\public\card.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Latest Arriavls</h5>
                        <a href="#" className="btn btn-primary">Buy</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards