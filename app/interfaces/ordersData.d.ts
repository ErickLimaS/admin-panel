export interface Orders {

    year: number,
    ordersByMonth: OrdersWithinYear[]

}

export interface OrdersWithinYear {

    month: 'jan' | 'fev' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'set' | 'out' | 'nov' | 'dec',
    ordersByDays: {
        pending: number,
        shipping: number,
        completed: number,
    }[]

}