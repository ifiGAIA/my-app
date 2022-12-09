
import Card from '../../UI/Card';
import styles from './Experience.module.css';
import ExperienceItem from './ExperienceItem';

const EXPERIENCE_LIST = [
    {
        id: 'e1',
        name: 'Web&APP',
        url:'https://ifigaia.github.io/Portfolio/webapp.html',
        title: 'Front-End Developer',
        description: [
            '利用簡單教學及敘述，讓吉他的初學者簡單認識吉他，不再覺得這是一個陌生的樂器，並搭配樂譜以及教學影片，使學習的成果事半功倍!',
            '以十二星座為主題發想的網站設計，內容包刮了對於十二星座的介紹以及故事，並搭配各星座的每日運勢及留言板，使網站多一點與使用者的互動。',
            'MOOD•PIXIE提供了一項可以簡單且即時抒發情緒、壓力的管道，讓人在低潮時能即時抒發，並當好友處於低潮時能在第一時間給予主動的關心，一同面對人生中的低潮。',
            '因缺少身邊人的關心，許多年長者處於不健康的情形。「AMOR的金色罐頭」，讓陪伴者能夠主動與年長者互動，來關心生活中的年長者們。',
        ],
    },
    {
        id: 'e2',
        name: 'Game',
        url:'https://ifigaia.github.io/Portfolio/gameintro.html',
        title: 'Game Developer',
        description: [
            '2D/橫向卷軸/解謎/恐怖/冒險遊戲，將兒時的恐懼作為核心概念，運用蒐集道具的方式拼湊一段關於家庭暴力的故事。',
            '利用Python設計的電腦射擊遊戲，玩家在指定秒數中躲避以及射擊細菌，並藉由掉落道具獲得不同能力。',
            '2D/橫向卷軸/解謎/恐怖/冒險遊戲，遊戲中玩家扮演主角丹默，透過探索與解謎，在充滿謎題的小鎮，一步步了解整段故事的真相。',
            'GlassBreaker為VR運動訓練遊戲，玩家利用手把抓取物件進行互動，並在虛擬環境中以敲擊或踢擊的方式擊碎玻璃完成任務。',
        ],
    }
];


export default function Experience(){

    const experienceList = EXPERIENCE_LIST.map((exp) => {
        return(
            <Card key={exp.id}>
                <ExperienceItem 
                    id={exp.id}
                    name={exp.name}
                    title={exp.title}
                    description={exp.description}
                    url={exp.url}
                ></ExperienceItem>
            </Card>
        );
    });

    return(
        <div className={styles.experiences}>
            <h1>My Experiences</h1>
            {experienceList}
        </div>
    );
}