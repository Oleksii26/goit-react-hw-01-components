import css from './statistics.module.css';

export const Statistics = ({ data }) => {
    return <section className={css.statistics}>
        
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.list}>
            {data.map(e => {
                return <li className={css.item} style={{backgroundColor : `${getRandomHexColor()}`}} key={e.id}><span className={css.label}>{e.label}</span>
                    <span className={css.percentage}>{e.percentage}%</span></li>
            })}
            
        </ul>
    </section>
   

}
 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

