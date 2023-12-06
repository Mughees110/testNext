import { signOut, getSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}
function Home() {
    useEffect(() => {
        //setIsLoading(true);
        const fetchAccomodations = async () => {
            try {
                const response = await fetch("/api/accomodations", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                } else {
                    console.error("Error fetching accomodations.");
                }
            } catch (error) {
                console.error("Error fetching accomodations:", error);
            }
        };

        fetchAccomodations();
    }, []);
    function logoutHandler() {
        signOut();
    }
    return (
        <>
            <p>This is home</p>
            <button onClick={logoutHandler}>Logout</button>
        </>
    );
}
export default Home;
