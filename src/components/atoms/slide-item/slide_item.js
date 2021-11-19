import { PlayCircleFilled } from "@ant-design/icons";
import { Modal } from 'antd';
import React, { useRef, useState } from "react";

function SlideItem({props}) {   

    const iframeRef = useRef();

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }


    return (
        <div className="img-slideshow">
            <img className="carousel-style" src={props.banner} alt="banner" />
            <PlayCircleFilled className="btn-play" onClick={showModal}/>
            <Modal title={props.title} width={610} visible={isModalVisible} onCancel={handleCancel} footer={null}>   
                <p><iframe ref={iframeRef} title="YTB" width="100%" height="315" src={`${props.traller}?enablejsapi=1&playerapiid=ytplayer`} frameBorder="0"></iframe></p>
            </Modal> 
        </div>
    )
}

export default SlideItem
