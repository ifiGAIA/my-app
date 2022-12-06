import"./Card.css";

export default function Card (props){
    return (
        <div className="expcard">{props.children}</div>
    );
}
