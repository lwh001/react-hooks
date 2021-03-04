import {useState} from 'react'

export default function Detail(){
    const [text,setText] = useState('详情页')
    return (
        <div>
            我是{text}
        </div>
    )
}