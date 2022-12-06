import "./ExperienceItem.css";

export default function ExperienceItem(props){
    
    const description = props.description.map((description) => {
        return(
            <li key={Math.random()}>{description}</li>
        )
    })
    return(
        <div className="experience">
            <div>
                <h3>{props.name}</h3>
                <div className="title">
                    {props.title}
                </div>
                <div className="desciption">
                    {description}
                </div>
            </div>
        </div>
    );
}