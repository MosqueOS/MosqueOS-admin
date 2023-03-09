import { getPrayerTimesForMosque } from "@/services/PrayerTimesService"
import { getUserWithRoles } from "@/services/UserService"
import { getSession } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"
import PrayerTimesTab from "@/components/PrayerTimesTabs/PrayerTimesTabs"

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session: any = await getSession(req, res)
  const user = await getUserWithRoles(session.user.email)
  const prayerTimes = await getPrayerTimesForMosque(user.admins[0].mosqueId)

  return {
    props: {
      pageTitle: "Prayer Times",
      activeIndex: 2,
      prayerTimes,
    },
  }
}

export default function PrayerTimes({ prayerTimes }: any) {
  return <PrayerTimesTab prayerTimes={prayerTimes} />
}
