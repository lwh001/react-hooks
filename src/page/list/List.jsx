import {useEffect, useState} from 'react'
import "./list.scss"
import w from '../../static/img/q1.png'
import n from '../../static/img/q2.png'

export default function List(){
    const len = 240
    const leny = 942
    const [data,setData] = useState({machineshow:20,machine:900})
    useEffect(()=>{
        let time = setInterval(()=>{
            let temp = 100
            data.machineshow=temp+data.machineshow
            if(data.machineshow>data.machine){
                data.machineshow=data.machine
                clearInterval(time)
            }
            // console.log(data,555)
            setData({...data})
        },3000)
    },[])
    const [x,setX] = useState(240)
    
    // const []
    //   弧长总长len = 240长度   目标长度 target   设备总个数machine =  235 展示的设备个数 machineshow = 44    
    /**
     * x = 240-((machineshow*len)/machine)
     */
       
    useEffect(()=>{
        let x = len-((data.machineshow*len)/data.machine);
        console.log(x)
        setX(x)
        console.log(data)
    },[data.machineshow])

    const [y,setY] = useState(960)
    useEffect(()=>{
        let y = leny-((data.machineshow*leny)/data.machine);
        console.log(x)
        setY(y)
        console.log(data)
    },[data.machineshow])
    return (
        <div>
            <div className="img-box">
                <img src={w} alt="" className="w"/>
                <img src={n} alt="" className="n"/>
            </div>
            <div className="boxxx">
                <svg width="50" height="50" viewBox="0 0 100 100">
                <circle r="50" cx="50" cy="50" fill="transparent" strokeDasharray="240,360" strokeDashoffset={x} className="inner"/>
                </svg>
                <span className='target'>{data.machineshow}</span>
            </div>
            <div className="boxxx1">
                <svg width="200" height="200" viewBox="0 0 400 400">
                <circle r="200" cx="200" cy="200" fill="transparent" strokeDasharray="942,1276" strokeDashoffset={y} className="inner1"/>
                </svg>
                <span className='target'>{data.machineshow}</span>
            </div>
            
        </div>
    )
}