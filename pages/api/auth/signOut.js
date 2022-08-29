import { getProviders, signIn,signOut } from "next-auth/react"

export default function SignOut () {

  console.log(providers)
  return (
    <>
 
        <div key={provider.name}>
          <button onClick={signOut()}>
            Sign in with {provider.name}
          </button>
        </div>
      
    </>
  )
}

// export async function getServerSideProps(context) {
//   const providers = await getProviders()
//   return {
//     props: { providers },
//   }
// }