import { transition } from './transactions'

export const TransactionHistory = () => {
    return <table className="transaction-history">
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