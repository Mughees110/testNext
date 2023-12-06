import path from "path";
import fs from "fs";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import authOptions from "./auth/[...nextauth]";
import { getServerSession } from "next-auth";
export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
        res.status(401).json({ message: "Not authenticated!" });
        return;
    }
    const { method } = req;
    switch (method) {
        case "GET":
            try {
                const obj = { name: "mysaelf" };
                return res.status(201).json(obj);
            } catch (error) {
                console.error("Error fetching accomodations:", error);
                return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
            }

        default:
            return res.status(405).json({ message: "Method Not Allowed" });
    }
}
