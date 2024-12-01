import { getBlogContent } from "@/app/functions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  // Destructure slug from params
  const { slug } = params;

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 });
  }

  try {
    // Get content from the blog (ensure getBlogContent is async or returns a Promise)
    const content = await getBlogContent(slug);

    return NextResponse.json(content);
  } catch (error: unknown) {
    // Narrow the error type to 'Error' and handle accordingly
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message || "An error occurred" }, { status: 500 });
    }

    // Handle case where the error is not an instance of Error
    return NextResponse.json({ error: "An unknown error occurred" }, { status: 500 });
  }
}
