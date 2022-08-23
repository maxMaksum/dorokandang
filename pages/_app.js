import { SessionProvider } from "next-auth/react"

import '../styles/globals.css';
import { StoreProvider } from "../components/contex/myContext"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
    <SessionProvider session={session}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SessionProvider>
     
    </>
  )
}
