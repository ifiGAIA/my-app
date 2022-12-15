import Card from '../../UI/Card';
import styles from './Experience.module.css';
import ExperienceItem from './ExperienceItem';
import LanguageContext from "../../LanguageContext/LanguageContext";
import { LanguageMap, LANGUAGE_LIST } from "../../Language/Language";
import { useContext } from "react";

const MYEXPERIENCE_LIST = {
    title:{
        us:'My Experiences',
        ch:'我的經歷'
    }
}

const EXPERIENCE_LIST = [
    {
        id: 'e1',
        name: 'Web&APP',
        url:'https://ifigaia.github.io/Portfolio/webapp.html',
        title_us: 'Front-end Development',
        title_ch: '前端開發',
        description_us: [
            'Make Web with HTML, CSS, JavaScript.',
            'Make a Web RWD design',
            'Use react-native to make mobile APP, and shortlisted mobile APP innovation contest.',
            'Using Unity to develop game interactive APP, and won the best work in the APP competition.',
        ],
        description_ch: [
            '使用 HTML, CSS, JavaScript 製作網頁。',
            '製作 RWD 響應式網站設計。',
            '使用 react-native 製作手機 APP，並入圍 APP 應用競賽決賽。',
            '使用 Uniity 開發遊戲互動 APP，於 APP 應用競賽榮獲佳作。',
        ],
        learnmore_us: 'Learn More',
        learnmore_ch: '知道更多',
    },
    {
        id: 'e2',
        name: 'Game',
        url:'https://ifigaia.github.io/Portfolio/gameintro.html',
        title_us: 'Game Development',
        title_ch: '遊戲開發',
        description_us: [
            'Using the Unity to make 2D, side scrolling, puzzle, horror game.',
            'Design a Computer Shooter Game with Python.',
            'Creating interactive Virtual Reality experience on Oculus.',
            'Make Virtual Reality games on HTC VIVE with steamVR.',
        ],
        description_ch: [
            '使用 Unity 遊戲開發引擎，製作 2D/橫向卷軸/解謎/恐怖/冒險遊戲',
            '利用 Python 設計電腦射擊遊戲',
            '在 Oculus 上製作 VR 互動體驗',
            '利用 steamVR 在 HTC VIVE 上製作 VR 遊戲。',
        ],
        learnmore_us: 'Learn More',
        learnmore_ch: '知道更多',
    }
];

export default function Experience(){
    const languageCtx = useContext(LanguageContext);
    const experienceList = EXPERIENCE_LIST.map((exp) => {
        return(
            <Card key={exp.id}>
                <ExperienceItem 
                    id={exp.id}
                    name={exp.name}
                    title={(languageCtx.language === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?exp.title_us:exp.title_ch)}
                    description={(languageCtx.language === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?exp.description_us:exp.description_ch)}
                    url={exp.url}
                    LearnMore={(languageCtx.language === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?exp.learnmore_us:exp.learnmore_ch)}
                ></ExperienceItem>
            </Card>
        );
    });

    return(
        <div className={styles.experiences}>
            <h1>{(languageCtx.language === LanguageMap.get(LANGUAGE_LIST.ENGLISH)?MYEXPERIENCE_LIST.title.us:MYEXPERIENCE_LIST.title.ch)}</h1>
            {experienceList}
        </div>
    );
}