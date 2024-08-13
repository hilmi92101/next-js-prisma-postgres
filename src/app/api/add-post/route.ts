import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request): Promise<NextResponse> {
    // Parse JSON from request body
    const res = await request.json();
    const { title, content } = res;

    // Create a new post in the database
    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {
                create: {
                    name: 'maryam'
                }
            }
        }
    });

    // Return the result as JSON
    return NextResponse.json({ result });
}