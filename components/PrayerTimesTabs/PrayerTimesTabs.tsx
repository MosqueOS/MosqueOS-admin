import { Fragment } from "react"
import { Tab } from "@headlessui/react"
import { find } from "lodash"

const months = [
  { id: 1, name: "January", numberOfDays: 31 },
  { id: 2, name: "February", numberOfDays: 29 },
  { id: 3, name: "March", numberOfDays: 31 },
  { id: 4, name: "April", numberOfDays: 30 },
  { id: 5, name: "May", numberOfDays: 31 },
  { id: 6, name: "June", numberOfDays: 30 },
  { id: 7, name: "July", numberOfDays: 31 },
  { id: 8, name: "August", numberOfDays: 31 },
  { id: 9, name: "September", numberOfDays: 30 },
  { id: 10, name: "October", numberOfDays: 31 },
  { id: 11, name: "November", numberOfDays: 30 },
  { id: 12, name: "December", numberOfDays: 31 },
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function PrayerTimesTab({ prayerTimes }: any) {
  return (
    <Tab.Group as="div">
      <div className="flex overflow-x-auto sm:mx-0">
        <div className="flex-auto border-b border-gray-200 px-4">
          <Tab.List className="flex space-x-10">
            {months.map((tab) => (
              <Tab
                key={tab.name}
                className={({ selected }) =>
                  classNames(
                    selected
                      ? "border-indigo-500 text-indigo-600"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                    "whitespace-nowrap border-b-2 py-6 text-sm font-medium",
                  )
                }
              >
                {tab.name}
              </Tab>
            ))}
          </Tab.List>
        </div>
      </div>

      <Tab.Panels as={Fragment}>
        {months.map((month, monthIndex) => (
          <Tab.Panel key={month.name} className="space-y-16 pt-5">
            <div className="overflow-scroll shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="divide-y divide-gray-300 overflow-scroll">
                <thead className="bg-gray-100">
                  <tr className="text-center">
                    {columns.map((col, index) => (
                      <th
                        key={`${month.name}_${col.name}_${index}`}
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-3"
                      >
                        {col.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {Array.from(
                    { length: month.numberOfDays },
                    (_, i) => i + 1,
                  ).map((dayOfMonth, index) => {
                    const prayerTimeForDayOfMonth = find(prayerTimes, {
                      day: dayOfMonth,
                      month: monthIndex + 1,
                    })

                    return (
                      <tr
                        key={`${month.name}_${dayOfMonth}`}
                        className={classNames(
                          index % 2 === 0 ? "" : "bg-gray-50",
                          "cursor-pointer text-center hover:bg-gray-200",
                        )}
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {dayOfMonth} {month.name.slice(0, 3)}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.fajr.start}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.fajr.jamaah}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.sunrise}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.zuhr.start}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.zuhr.jamaah}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.asr.start}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.asr.startTwo}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.asr.jamaah}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.maghrib.start}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.maghrib.jamaah}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.isha.start}
                        </td>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          {prayerTimeForDayOfMonth.prayerTimes.isha.jamaah}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}
