import {useState,useEffect} from 'react'
import Square from '../../component/square' 
import ScrollData from '../../component/ScrollData' 
import * as echarts from 'echarts'
import {LineChart} from "echarts/charts"
import v from '../../static/img/v.png'
import w from '../../static/img/w.png'
import a from '../../static/img/a.png'
import c1 from '../../static/img/c-bg1.png'
import c2 from '../../static/img/c-bg2.png'

import {Progress} from 'antd'

import './home.scss'
let style = {
    width:'614px',
    height:'284px',
    color:'red',
    position:'relative'
}
let data={
    title:['设备名称','所在位置','传感器状态'],
    engrey:{A:'10A',V:"200V",W:'150W'},
    manlid:[{name:'1号井盖传感器',location:'会议室',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:false}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:false}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:false}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:true}
    ,{name:'2号井盖传感器',location:'2号教研楼',status:false}]
}
let dataSecurity={
    title:['设备名称','所在位置','电池电量','开门时间'],
    manlid:[{name:'1号井盖传感器',location:'会议室',eng:'80%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}
    ,{name:'2号井盖传感器',location:'2号教研楼',eng:'30%',time:'2021年1月21日 15:15:15'}]
}

let widStyle = {
    width:'33%'
}
let widStyles = {
    width:'25%'
}
echarts.use([LineChart])
export default function Home(){
    const leny = 960
    const [datas,setData] = useState({machineshow:20,machine:900})
    useEffect(()=>{
        let time = setInterval(()=>{
            let temp = 50
            datas.machineshow=temp+datas.machineshow
            if(datas.machineshow>datas.machine){
                datas.machineshow=datas.machine
                clearInterval(time)
            }
            // console.log(data,555)
            setData({...datas})
        },3000)
    },[])
    const [y,setY] = useState(960)
    useEffect(()=>{
        let y = leny-((datas.machineshow*leny)/datas.machine);
      
        setY(y)
        console.log(datas)
    },[datas.machineshow])
    // 基于准备好的dom，初始化echarts实例
    useEffect(()=>{
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六','周日']
            },
            yAxis: {
                name:'单位：℃/RH%',
                type: 'value'
            },
            legend: {
                data: [{name:'温度',textStyle:{color:'#2b80ff'}}, {name:'湿度',textStyle:{color:'#04cdf4'}}],
                top:60
            },
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {
                        origin:'start',
                        // color:'#04cdf4',
                        opacity:0.5,
                        color:{
                            type: 'linear',
                            x: 0.9,
                            y: 0,
                            x2: 0.7,
                            y2: 0.9,
                            colorStops: [{
                                offset: 0, color: 'rgba(43, 128, 255, 1)' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgba(43, 128, 255, 0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    itemStyle:{color:'#2b80ff'},
                    data: [-10, 0, 20,30,40,55,65]
                },
            {
                name: '湿度',
                type: 'line',
                stack: '总量',
                itemStyle:{color:'#04cdf4'},
                areaStyle: {
                    origin:'start',
                    // color:'#04cdf4',
                    opacity:0.5,
                    color:{
                        type: 'linear',
                        x: 0.9,
                        y: 0,
                        x2: 0.7,
                        y2: 0.9,
                        colorStops: [{
                            offset: 0, color: 'rgba(4, 205, 244,1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(4, 205, 244,0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                data: [-15, -5, 15,25,35,40,60]
            }]
        });
    })
    const [engrey,setEngrey] = useState(data.engrey)

    return (
        <div className='box'>
            <div className='title'>黄河水利职业技术学院4号楼可视化</div>
            <div className='data-box-top'>
                <div className='left'>
                    <div className='left-1 lefts'>
                        <div className='lefts-text'>
                            <span>lora红外报警</span>
                            <span><b>10620</b>次</span>
                            <span>近一周报警量：20365次 占报警总量：15.67%</span>
                        </div>
                        <div className='lefts-tu'>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#286cea',
                                  '100%': '#00cfff',
                                }}
                                width={80}
                                strokeWidth={5}
                                percent={40.8}
                            ></Progress>
                        </div>
                    </div>
                    <div className='left-2 lefts'>
                    <div className='lefts-text'>
                            <span>lora水浸报警</span>
                            <span><b>10620</b>次</span>
                            <span>近一周报警量：20365次 占报警总量：15.67%</span>
                        </div>
                        <div className='lefts-tu'>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#286cea',
                                  '100%': '#00cfff',
                                }}
                                width={80}
                                strokeWidth={5}
                                percent={80}
                            ></Progress>
                        </div>
                    </div>
                    <div className='left-3 lefts'>
                    <div className='lefts-text'>
                            <span>lora烟雾报警</span>
                            <span><b>10620</b>次</span>
                            <span>近一周报警量：20365次 占报警总量：15.67%</span>
                        </div>
                        <div className='lefts-tu'>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#286cea',
                                    '100%': '#00cfff',
                                }}
                                width={80}
                                strokeWidth={5}
                                percent={40}
                            ></Progress>
                        </div>
                    </div>
                    <div className='left-4 lefts'>
                    <div className='lefts-text'>
                            <span>电气火灾探测器报警</span>
                            <span><b>10620</b>次</span>
                            <span>近一周报警量：20365次 占报警总量：15.67%</span>
                        </div>
                        <div className='lefts-tu'>
                            <Progress
                                type="circle"
                                strokeColor={{
                                    '0%': '#286cea',
                                    '100%': '#00cfff',
                                }}
                                width={80}
                                strokeWidth={5}
                                percent={60}
                            ></Progress>
                        </div>
                    </div>
                </div>
                <div className='center'>
                    <div className='center-box'>
                        <img src={c1} alt="" className='pic'/>
                        <img src={c2} alt="" className='pic1'/>
                        <div className="boxxx1">
                            <svg width="200" height="200" viewBox="0 0 400 400">
                            <circle r="200" cx="200" cy="200" fill="transparent" strokeDasharray="960,1360" strokeDashoffset={y} className="inner1"/>
                            </svg>
                            <span className='target'>{datas.machineshow}</span>
                        </div>
                    </div>
                </div>
                <div className='right'>
                    <Square style={style}>
                        <ScrollData data={dataSecurity} wid={widStyles}></ScrollData>
                    </Square>
                    <Square style={style}></Square>
                </div>
            </div>
            <div className='data-box-bottom'>
                <Square style={style}>
                    <div id="main"></div>
                </Square>
                <Square style={style}>
                    <div className='tce'>
                        <div className='item'>
                            <img src={v} alt=""/>
                            <span className='text'>{engrey.V}</span>
                            <span>电压</span>
                        </div>
                        <div className='item'>
                            <img src={a} alt=""/>
                            <span className='text'>{engrey.A}</span>
                            <span>电流</span>
                        </div>
                        <div className='item'>
                            <img src={w} alt=""/>
                            <span className='text'>{engrey.W}</span>
                            <span>功率</span>   
                        </div>
                    </div>
                </Square>
                <Square style={style}>
                    <ScrollData data={data} wid={widStyle}></ScrollData>
                </Square>
            </div>
        </div>
    )
}