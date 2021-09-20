import React from 'react'
import PropTypes from 'prop-types'

function OrderDetailsTable({ data, actions }) {
    const { customerName, items } = data;
    const { clearSelected } = actions;
    const totalQuantity = items.reduce((total, item) => total += item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total += (item.price/100), 0);

    return (
        <div>
            <div className="headerContent">
                <h1>{customerName}'s Order</h1>
                <button
                    type="button"
                    className="backButton"
                    onClick={clearSelected}
                >
                    Back To List
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.size || 'n/a'}</td>
                                <td>{item.quantity}</td>
                                <td>{`$${item.price/100}`}</td>
                            </tr>
                    ))}

                    <tr>
                        <td />
                        <td />
                        <td>{totalQuantity}</td>
                        <td>{'$'+totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

OrderDetailsTable.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default OrderDetailsTable

