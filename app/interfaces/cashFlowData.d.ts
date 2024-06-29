export interface CashFlow {

    year: number,
    cashFlowByMonth: OrdersWithinYear[]

}

export interface CashFlowWithinYear {

    month: 'jan' | 'fev' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'set' | 'out' | 'nov' | 'dec',
    cashFlowByDays: number[]

}