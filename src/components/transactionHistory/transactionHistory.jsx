import css from './transactionHistory.module.css'

export const TransactionHistory = ({ transition }) => {
    return <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transition.map(e => {
                return <tr key={e.id}>
                <td>{e.type}</td>
                <td>{e.amount}</td>
                <td>{e.currency}</td>
            </tr>
            })}
        </tbody>
    </table>
}