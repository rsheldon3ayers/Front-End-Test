import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ordersData } from '../lib/orders';
import OrdersTable from './OrdersTable';
import OrderDetailsTable from './OrderDetailsTable';
import DeleteOrder from './DeleteOrder';

const formatDate = (dateString) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(dateString);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    return `${month} ${day}, ${year} - ${hours}:${minutes}`;
}

export class Orders extends Component {
    static propTypes = {

    }

    state = {
        orders: [],
        selectedOrder: {},
        displayDelete: false
    }

    selectOrder = order => this.setState({ selectedOrder: order });
    clearSelected = () => this.setState({ selectedOrder: {} });
    deleteOrder = () => this.setState(({ displayDelete }) => ({ displayDelete: !displayDelete }));
    confirmDelete = () => {
        const { orders, selectedOrder } = this.state;
        const updated = orders.filter(({ id }) => id !== selectedOrder.id);
        this.setState({ orders: updated}, () => {
            this.clearSelected();
            this.deleteOrder();
        })
    }

    componentDidMount () {
        this.setState({ orders: ordersData })
    }

    render() {
        const { displayDelete, orders, selectedOrder } = this.state;
        const orderSelected = Object.keys(selectedOrder).length > 0
        const ordersActions = {
            selectOrder: this.selectOrder,
            deleteOrder: this.deleteOrder
        };
        const detailsActions = {
            clearSelected: this.clearSelected
        };
        const deleteActions = {
            clearSelected: this.clearSelected,
            confirmDelete: this.confirmDelete,
            deleteOrder: this.deleteOrder
        }

        const renderDisplay = () => {
            switch(true) {
                case displayDelete:
                    return <DeleteOrder data={selectedOrder} actions={deleteActions} />
                    break;
                case orderSelected:
                    return <OrderDetailsTable data={selectedOrder} actions={detailsActions} />
                    break;
                case !orderSelected:
                    return <OrdersTable data={orders} actions={ordersActions} />
                    break;
            }
        }

        return (
            <div className="layout">
                {renderDisplay()}
            </div>
        )
    }
}

export default Orders
