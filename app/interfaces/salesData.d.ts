export interface Sales {

    year: number,
    salesByMonth: OrdersWithinYear[]

}

export interface SalesWithinYear {

    month: 'jan' | 'fev' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'set' | 'out' | 'nov' | 'dec',
    salesByDays: {
        pending: number,
        canceled: number,
        completed: number,
    }[]

}