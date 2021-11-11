import { PlayCircleFilled } from "@ant-design/icons";
import { Modal } from 'antd';
import React, { useState } from "react";


function SlideItem({props}) {

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
        setIsModalVisible(true);
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    }

    

    return (
        <div className="img-slideshow">
            <img className="carousel-style" src={props.banner} alt="banner" />
            <PlayCircleFilled className="btn-play" onClick={showModal}/>
            <Modal title={props.title} width={610} visible={isModalVisible} onCancel={handleCancel} footer={null}>
                <p><iframe width="560" height="315" src={props.traller} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </Modal> 
        </div>
    )
}

export default SlideItem
