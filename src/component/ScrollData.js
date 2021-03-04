import Swiper from 'swiper' 
import {useState,useEffect} from 'react'
import "swiper/swiper.scss";
import './scroll.scss';

export default function ScrollData(props){
    const [data,setData] = useState(props.data)
    useEffect(()=>{
        let swiper1 = new Swiper('.swiper-container', {
            direction: 'vertical',//竖向轮播
            loop: true,//无缝轮播
            autoplay: {// 自动滑动
                delay: 1000, //1秒切换一次
                disableOnInteraction: false
              },
            slidesPerView:'auto'
        })
        // console.log(swiper1,'555555')
        return 
    },[props.data])
    return(
        <div className='scroll-box'>
            <div className='title-box'>
                {
                   data.title.map((item)=>{
                       return(<span className='wid' style={props.wid}>{item}</span>)
                   }) 
                }
            </div>
            <div className="swiper-container">
            <div className="swiper-wrapper">
                {
                    data.manlid.map((item)=>{
                        return(<div className="swiper-slide boxx">
                            <span className='wid' style={props.wid}>{item.name}</span>
                            <span className='wid' style={props.wid}>{item.location}</span>
                            {!item.time&&<span className='wid' style={{color:!item.status?'red':'',...props.wid}}>{item.status?'正常':'异常'}</span>}
                            {item.eng&&<span className='wid' style={{...props.wid}}>{item.eng}</span>}
                            {item.time&&<span className='wid' style={{...props.wid}}>{item.time}</span>}
                        </div>)
                    }) 
                }
            </div>
            </div>
        </div>
    )
}