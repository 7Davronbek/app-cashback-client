import React from 'react'

const VideoArea = () => {
    return (
        <div className='VideoArea'>
            <div className="row align-items-center" style={{position:'relative'}}>
                <div className="col-lg-7"style={{position:'relative'}}>
                    <div className="img">
                        <img src="../img/video-img.png" alt="" />
                    </div>
                    <div className="btn-play position-absolute">
                    <a href="https://www.youtube.com/watch?v=7e90gBu4pas">
                        <img src="../img/play-btn.png" alt="" />
                    </a>
                </div>
                </div>
               
                <div className="col-lg-5">
                    <div className="info">
                        <h2>Build The App That Everyonee Love</h2>
                        <p>Praesent fermentum nisl at ipsum facilisis viverra. Ut elementum accumsan finibus. Cras placerat lacinia mi, ac dictum ante. Donec libero enim, tincidunt sit amet venenatis id, maximus eu quam.</p>

                        <ul>
                            <li>
                                <div className="icon">
                                    <img src="../img/vs-icon.png" alt="" />
                                </div>

                                <div className="text">
                                    Pellentesque placerat, nisi congue vehicula efficitur</div></li>
                            <li>
                                <div className="icon">
                                    <img src="../img/vs-icon.png" alt="" />
                                </div>

                                <div className="text">
                                    Pellentesque placerat, nisi congue vehicula efficitur</div></li>
                            <li>
                                <div className="icon">
                                    <img src="../img/vs-icon.png" alt="" />
                                </div>

                                <div className="text">
                                    Pellentesque placerat, nisi congue vehicula efficitur</div></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoArea