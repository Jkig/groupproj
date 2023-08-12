export default function Response(props){
    return(
        <li>
            <ul>
                <li className="horizontal">{props.speaker}: {props.textNative}</li>
                <li className="spacer5"></li>
                <li className="horizontal">{props.speaker}: {props.textTarget}</li>
                <p></p>
            </ul>
        </li>
    )
}