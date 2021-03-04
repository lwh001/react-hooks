import bg from '../static/img/f-bg.png'

let styleImg = {
    width:'100%',
    height:'100%',
    position:'absolute',
    left:0,
    top:0
}

export default function square(props){
    return(
        <div className='square-model' style={props.style}>
            <img src={bg} style={styleImg}></img>
            {props.children}
        </div>
    )
}