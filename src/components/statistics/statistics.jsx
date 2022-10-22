import css from './statistics.module.css';
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
    return <section className={css.statistics}>

        {title && <h2 className={css.title}>Upload stats</h2>}
        <ul className={css.list}>
            {stats.map(e => {
                return <li className={css.item} style={{ backgroundColor: `${getRandomHexColor()}` }} key={e.id}><span className={css.label}>{e.label}</span>
                    <span className={css.percentage}>{e.percentage}%</span></li>
            })}

        </ul>
    </section>


}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
}

