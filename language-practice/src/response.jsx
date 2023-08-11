export default function Response(props){
    return(
        <li>
            <ul>
                <li className="horizontal">AI: {props.textNative}</li>
                <li className="spacer5"></li>
                <li className="horizontal">AI: {props.textTarget}</li>
            </ul>
        </li>
    )
}