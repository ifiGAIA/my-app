import styles from "./ExperienceItem.module.css";

export default function ExperienceItem(props){
    
    const description = props.description.map((description) => {
        return(
            <li key={Math.random()}>{description}</li>
        )
    })

    return(
        <div className={styles.experience}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.title}>
                    {props.title}
                </div>
                <div className={styles.description}>
                    {description}
                </div>
                <a href={props.url}>{props.LearnMore}</a>
            </div>
        </div>
    );
}