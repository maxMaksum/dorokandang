
import {useSession, signIn, signOut, getSession, SessionProvider } from "next-auth/react"
import '../styles/globals.css';
import { StoreProvider } from "../components/contex/myContext"

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
  ) 
}

export default MyApp
