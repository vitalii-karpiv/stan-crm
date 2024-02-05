export default class OrderService {

    listOrder() {
        return {
            itemList: [
                {id: 1, state: "active", name: "test1"},
                {id: 2, state: "active", name: "test2"},
                {id: 3, state: "active", name: "test3"}
            ],
            pageInfo: {
                pageIndex: 0,
                pageSize: 100,
                total: 3
            }
        }
    }

}