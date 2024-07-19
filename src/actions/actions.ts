'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { auth, currentUser } from "@clerk/nextjs/server";

export async function createPost(formData: FormData){
    const { userId } = auth();

    if(userId){
    const title = formData.get("title") as string
    const body = formData.get("body") as string
    // console.log(title)
    // console.log(body)

    await prisma.post.create({
        data: {
            title,
            body,
        }
    })

    revalidatePath('/posts')
}
    
}