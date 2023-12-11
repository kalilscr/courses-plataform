import { getAccessToken, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0"
import { useUser } from "@auth0/nextjs-auth0/client"
import { GetServerSideProps } from "next"
import { MeQuery, useMeQuery } from "../../graphql/generated/graphql"
import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page"
import { withApollo } from "../../lib/withApollo"

function Home({ data }: any) {
    const { user } = useUser()
    const { data: me} = useMeQuery()
    return (
      <div className="text-violet-500">
         <h1>Hello Next!</h1>
  
         <pre>
          ok: {JSON.stringify(me, null, 2)}
         </pre>

        {/* <pre>
          {JSON.stringify(data.products, null, 2)}
        </pre> */}

         <pre>
          {JSON.stringify(user, null, 2)}
         </pre>
  
         {/* <a href="/api/auth/logout">Logout</a> */}
      </div>
    )
  }


export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    //getServerPageGetProducts({}, ctx);

    return {
      props: {}
    }
  }
});

export default withApollo(
  ssrGetProducts.withPage()(Home)
);

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

//       const token = await getAccessToken(req, res);

//       console.log(token);

//       return {
//         props: {},
//       }
// }