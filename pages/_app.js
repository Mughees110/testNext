import { useContext } from "react";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
    console.log(pageProps.session);
    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
