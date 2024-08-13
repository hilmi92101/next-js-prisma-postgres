import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Define types for the request and params
interface Params {
    id: string;
}

export async function DELETE(request: Request, { params }: { params: Params }) {
    const id = params.id;

    const post = await prisma.post.delete({
        where: { id }
    });

    return NextResponse.json(post);
}