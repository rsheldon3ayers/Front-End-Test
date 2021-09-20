import React from 'react'
import PropTypes from 'prop-types'

function DeleteOrder({ data, actions }) {
    const { customerName } = data;
    const { clearSelected, confirmDelete, deleteOrder } = actions;

    const handleClick = () => {
        clearSelected()
        deleteOrder()
    };

    return (
        <div>
            <h1>{`Are you sure you want to delete ${customerName}'s order?`}</h1>
            <div className="buttonGroup">
                <button
                    type="button"
                    className="detailButton"
                    onClick={() => {
                        clearSelected()
                        deleteOrder()
                    }}
                >
                    I changed my mind!
                </button>
                <button
                    type="button" 
                    className="deleteButton"
                    onClick={confirmDelete()}
                >
                    Trash it!
                </button>
            </div>
        </div>
    )
}

DeleteOrder.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.objectOf(PropTypes.func).isRequired
}

export default DeleteOrder

