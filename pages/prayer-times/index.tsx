export const getServerSideProps = async () => {
  return {
    props: {
      pageTitle: "Prayer Times",
      activeIndex: 2,
    },
  }
}

const months = [
  { name: "January", numberOfDays: 31 },
  { name: "February", numberOfDays: 29 },
  { name: "March", numberOfDays: 31 },
  { name: "April", numberOfDays: 30 },
  { name: "May", numberOfDays: 31 },
  { name: "June", numberOfDays: 30 },
  { name: "July", numberOfDays: 31 },
  { name: "August", numberOfDays: 31 },
  { name: "September", numberOfDays: 30 },
  { name: "October", numberOfDays: 31 },
  { name: "November", numberOfDays: 30 },
  { name: "December", numberOfDays: 31 },
]

const columns = [
  { name: "Day of month" },
  { name: "Fajr Starts" },
  { name: "Fajr Jama'ah" },
  { name: "Sunrise" },
  { name: "Zuhr Starts" },
  { name: "Zuhr Jama'ah" },
  { name: "Asr Mithl 1" },
  { name: "Asr Mithl 2" },
  { name: "Asr Jama'ah" },
  { name: "Maghrib Starts" },
  { name: "Maghrib Jama'ah" },
  { name: "Isha Starts" },
  { name: "Isha Jama'ah" },
]

export default function PrayerTimes() {
  return (
    <div>
      {months.map((month) => (
        <section key={month.name} className="mb-7 border-b">
          <h2 className="mb-2 text-xl font-semibold">{month.name}</h2>
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={`${month.name}_${col.name}`}
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                  >
                    {col.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {Array.from({ length: month.numberOfDays }, (_, i) => i + 1).map(
                (dayOfMonth, index) => (
                  <tr
                    key={`${month.name}_${dayOfMonth}`}
                    className={index % 2 === 0 ? undefined : "bg-gray-50"}
                  >
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {dayOfMonth}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {dayOfMonth}
                    </td>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                      {dayOfMonth}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  )
}
