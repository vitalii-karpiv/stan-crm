import OrderService from "../api/services/order-service";

function Orders() {
    const orderService = new OrderService();

    const orders = orderService.listOrder();


    return (
        <>
            <div>Orders</div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">State</th>
                    <th scope="col">Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    orders.itemList.map(order => {
                        return (
                            <tr>
                                <th scope="row">{order.id}</th>
                                <td>{order.state}</td>
                                <td>{order.name}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </>
    );
}

export default Orders;