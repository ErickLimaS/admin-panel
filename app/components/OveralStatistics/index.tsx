"use client"
import React from 'react'
import { Orders } from '@/app/interfaces/ordersData'
import { GraphicLinesCard } from './components/GraphicLinesCard'
import { StatisticsCard } from './components/StatisticsCard'

type OverallComponentInterface = {
    orders: Orders[],
    cashFlow: {
        limitMonth: number,
        firstMonth: number,
        secondMonth: number,
        thirdMonth: number,
        forthMonth: number,
        fifthMonth: number,
    },
    salesFlow: {
        limitMonth: number,
        firstMonth: number,
        secondMonth: number,
        thirdMonth: number,
        forthMonth: number,
        fifthMonth: number,
    }
}

export default function OverallStatistics({ orders, cashFlow, salesFlow }: OverallComponentInterface) {
    return (

        <section>

            <ul className="grid grid-flow-row grid-cols-3 gap-8">

                <li>
                    <StatisticsCard
                        ordersData={orders}
                    />
                </li>
                <li>
                    <GraphicLinesCard
                        graphData={cashFlow}
                        title="Balance"
                        total={220}
                        type="money"
                    />
                </li>
                <li>
                    <GraphicLinesCard
                        graphData={salesFlow}
                        title="Sales"
                        total={2220}
                        type="number"
                    />
                </li>

            </ul>

        </section>
    )
}