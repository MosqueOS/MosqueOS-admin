import MosqueProfileDisplay from "@/components/MosqueProfileDisplay/MosqueProfileDisplay"
import { getMosque } from "@/services/MosqueService"
import { getUserWithRoles } from "@/services/UserService"
import { getSession } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session: any = await getSession(req, res)
  const user = await getUserWithRoles(session.user.email)
  const mosque = await getMosque(user.admins[0].mosqueId)

  return {
    props: {
      pageTitle: "Mosque Profile",
      activeIndex: 1,
      mosque,
    },
  }
}

export default function MosqueProfile({ mosque }: any) {
  return <MosqueProfileDisplay mosque={mosque} />
}
