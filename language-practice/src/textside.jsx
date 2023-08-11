export default function TextSide(props) {

    return (
        <div className={props.className}>
            <h1>{props.className=="TextSideL" ? "Native language" : "Learning Language"}</h1>
            <p> {props.text} </p>
        </div>
    )
}