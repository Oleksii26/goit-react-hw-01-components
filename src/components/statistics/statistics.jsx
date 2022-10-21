import { data } from "./data"
import css from './statistics.css'

export const Statistics = ({ title, stats }) => {
    return <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
            {data.map(e => {
                return <li className="item-friends" key={e.id}> <span className="label">{e.label}</span>
                    <span className="percentage">{e.percentage}%</span></li>
            })}
        </ul>
    </section>
}

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
//   }
//  export default getRandomHexColor()