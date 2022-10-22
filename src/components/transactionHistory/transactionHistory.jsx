import css from './transactionHistory.module.css'
import PropTypes from 'prop-types'

export const TransactionHistory = ({ items }) => {
    return <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(e => {
                return <tr key={e.id}>
                    <td>{e.type}</td>
                    <td>{e.amount}</td>
                    <td>{e.currency}</td>
                </tr>
            })}
        </tbody>
    </table>
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })).isRequired,
}




