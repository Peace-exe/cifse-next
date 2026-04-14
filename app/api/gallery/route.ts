import GalleryImageId from "@/models/GalleryImageId";
import { NextResponse } from "next/server";
export async function GET(){
    try{
        const imageId = await GalleryImageId.find({}, { public_id: 1, _id: 0 }).lean();
        if (!imageId.length){
             throw new Error("Couldn't fetch Image IDs")
        }
        return NextResponse.json({
            message:"Successfully fetched imageId",
            data:imageId
        },{status:200});
    }
    catch(err){
        const message = err instanceof Error ? err.message : 'Something went wrong.';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}