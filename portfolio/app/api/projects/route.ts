// /api/projects

import { getAllProjectsFromDB } from "@/lib/helper/projects";
import { NextResponse } from "next/server";


export const revalidate = 3600;

export async function GET(){
    try{
        const data = await getAllProjectsFromDB();
        return NextResponse.json({data: data});
    } catch (err) {
        console.error("/api/projects error: ", err);
        return NextResponse.json({error: "failed to fetch projects from db."});
    }
}