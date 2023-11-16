import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0/client"
import { GetServerSideProps } from "next"

export default function Home() {
    const { user } = useUser()
    return (
      <div>
         <h1>Hello Next!</h1>
  
         <pre>{JSON.stringify(user, null, 2)}</pre>
  
         <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }


export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
//  async ({ req, res }) => {
//     const session = await getSession(req, res);

//     if(!session) {
//         return {
//           redirect: {
//             destination: '/api/auth/login',
//             permanent: false,
//           }
//         }
//       }

//       return {
//         props: {},
//       }
// }