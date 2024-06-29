
import { Orders } from "@/app/interfaces/ordersData"
import BoxSvg from "@/public/assets/svg/box-seam.svg"

export function StatisticsCard({ ordersData }: { ordersData: Orders[] }) {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Setember', 'October', 'November', 'December']

    const currMonthSelected = months.filter((month) =>
        month.toLocaleLowerCase().includes(ordersData[0].ordersByMonth[0].month.toLocaleLowerCase()) && month
    )

    return (

        <div className="flex flex-col-reverse justify-between gap-y-4 bg-white rounded-md py-4 px-8 h-full">

            <div className='flex items-center gap-8'>

                <div className='bg-[#03a9f4] p-5 rounded-sm shadow-xl'>
                    <BoxSvg fill="white" className="scale-150" />
                </div>

                <div>

                    <h2 className="text-black/60 font-semibold">Total Orders</h2>

                    <p className="font-bold text-4xl text-secondary">
                        {(ordersData[0].ordersByMonth[0].ordersByDays[0].completed
                            + ordersData[0].ordersByMonth[0].ordersByDays[0].pending
                            + ordersData[0].ordersByMonth[0].ordersByDays[0].shipping
                        ).toLocaleString("en-US", { style: "decimal" })}
                    </p>

                </div>

            </div>

            <div className="flex flex-row gap-2 justify-between">

                <div className="flex flex-col-reverse items-center">

                    <h3 className="text-black/60 text-lg font-medium">Pending</h3>

                    <span className="font-bold text-3xl text-secondary">
                        {ordersData[0].ordersByMonth[0].ordersByDays[0].pending.toLocaleString("en-US", { style: "decimal" })}
                    </span>

                </div>

                <div className="flex flex-col-reverse items-center">

                    <h3 className="text-black/60 text-lg font-medium">Shipping</h3>

                    <span className="font-bold text-3xl text-secondary">
                        {ordersData[0].ordersByMonth[0].ordersByDays[0].shipping.toLocaleString("en-US", { style: "decimal" })}
                    </span>

                </div>

                <div className="flex flex-col-reverse items-center">

                    <h3 className="text-black/60 text-lg font-medium">Completed</h3>

                    <span className="font-bold text-3xl  text-secondary">
                        {ordersData[0].ordersByMonth[0].ordersByDays[0].completed.toLocaleString("en-US", { style: "decimal" })}
                    </span>

                </div>

            </div>

            <div className='flex '>

                <h3 className='text-[#03a9f4] font-medium'>Order Statistics &#8226;</h3>

                <select
                    aria-label='Select Month'
                    defaultValue={currMonthSelected}
                >
                    {months.map((month) => (
                        <option value={month} key={month}>
                            {month}
                        </option>
                    ))}
                </select>

            </div>

        </div>
    )

}