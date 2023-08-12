export default function Response(props){
    return(
        <li>
            <ul>
                <li className="horizontal">{props.speaker}: <div className={props.incorrect ? "incorrect" : "correct"}>{props.textNative}</div></li>
                <li className="spacer5"></li>
                <li className="horizontal">{props.speaker}: <div className={props.incorrect ? "incorrect" : "correct"}>{props.textTarget}</div></li>
                <p></p>
            </ul>
        </li>
    )
}