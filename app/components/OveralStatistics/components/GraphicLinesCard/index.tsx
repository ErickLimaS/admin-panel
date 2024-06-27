import DollarSvg from "@/public/assets/svg/currency-dollar.svg"
import BagSvg from "@/public/assets/svg/bag-check-fill.svg"
import { Chart as ChartJS, Tooltip, Legend, LinearScale, PointElement, LineElement, Title, CategoryScale } from "chart.js";
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

type OverallComponentInterface = {
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

export function GraphicLinesCard({ graphData, title, type, total }: {
    title: string, graphData: OverallComponentInterface["cashFlow" | "salesFlow"], type: "money" | "number", total: number
}) {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    )

    function orderMonthsLabel(): string[] {

        const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December']

        let orderedLabels = labels.slice(labels.length - graphData.limitMonth - 1, labels.length)

        orderedLabels = [...orderedLabels, ...labels.slice(0, graphData.limitMonth + 1)]

        return orderedLabels

    }

    const labels = orderMonthsLabel()

    return (

        <div className="flex flex-col-reverse gap-y-4 bg-white rounded-md py-6 px-8">

            <div className="bg-white  rounded-md flex items-center gap-8">

                <div className='bg-[#03a9f4] p-5 rounded-sm shadow-xl'>

                    {type == "money" && (<DollarSvg fill="white" className="scale-[2]" />)}
                    {type == "number" && (<BagSvg fill="white" className="scale-150" />)}

                </div>

                <div>

                    <h2 className="text-black/60 font-semibold">{title}</h2>

                    <p className="font-bold text-4xl text-secondary">
                        {type == "money" ?
                            total.toLocaleString("en-US", { style: "currency", currency: "USD" })
                            : total.toLocaleString("en-US", { style: "decimal" })}
                    </p>

                </div>

            </div>

            <div className='max-h-[300px]'>
                <Line
                    options={{
                        maintainAspectRatio: false,

                        responsive: true,
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                backgroundColor: "#15283c"
                            }
                        },
                    }}
                    data={{
                        labels,
                        datasets: [
                            {
                                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                                borderColor: "#15283c",
                                backgroundColor: "#15283c",
                                tension: 0.5
                            },
                        ],
                    }} />
            </div>

        </div>

    )

}