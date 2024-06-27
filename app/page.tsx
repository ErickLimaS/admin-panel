import OverallStatistics from "./components/OveralStatistics";
import { faker } from '@faker-js/faker';
import { Orders } from "./interfaces/ordersData";

export default function Home() {

  const mockData: { orders: Orders[], cashFlow: any, salesFlow: any } = {
    orders: [
      {
        year: 2024,
        ordersByMonth: [{
          month: 'aug',
          ordersByDays: [{
            pending: faker.datatype.number({ min: 5, max: 5 }),
            shipping: faker.datatype.number({ min: 5, max: 5 }),
            completed: faker.datatype.number({ min: 5, max: 5 }),
          }]
        }]
      }
    ],
    cashFlow: {
      limitMonth: faker.datatype.number({ min: 0, max: 11 }),
      firstMonth: faker.datatype.number({ min: 0, max: 100 }),
      secondMonth: faker.datatype.number({ min: 0, max: 100 }),
      thirdMonth: faker.datatype.number({ min: 0, max: 100 }),
      forthMonth: faker.datatype.number({ min: 0, max: 100 }),
      fifthMonth: faker.datatype.number({ min: 0, max: 100 }),
    },
    salesFlow: {
      limitMonth: faker.datatype.number({ min: 0, max: 11 }),
      firstMonth: faker.datatype.number({ min: 0, max: 100 }),
      secondMonth: faker.datatype.number({ min: 0, max: 100 }),
      thirdMonth: faker.datatype.number({ min: 0, max: 100 }),
      forthMonth: faker.datatype.number({ min: 0, max: 100 }),
      fifthMonth: faker.datatype.number({ min: 0, max: 100 }),
    }
  }

  return (
    <main className="col-main min-h-screen container mx-auto my-8" >

      <OverallStatistics
        orders={mockData.orders}
        cashFlow={mockData.cashFlow}
        salesFlow={mockData.salesFlow}
      // if necessary, add new field
      />

    </main >
  );
}
