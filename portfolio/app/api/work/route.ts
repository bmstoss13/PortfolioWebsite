'portfolio/app/pages/api/work'

import { getWorkExperienceFromDB } from "@/lib/helper/work";
// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const revalidate = 3600;

export async function GET(){
    try{
        const data = await getWorkExperienceFromDB();
        return NextResponse.json({ data: data});
    } catch (err){
        console.error("api error: failed to retrieve work experience: ", err);
        return NextResponse.json({ error: "failed to fetch work experience from db"});
    }

}