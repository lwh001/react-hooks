import {useState} from 'react'

export default function Option(){
    const [text,setText] = useState('配置页')
    return (
        <div>
            我是{text}
        </div>
    )
}