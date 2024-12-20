import { getBlogContent } from "@/app/functions";
import { NextRequest, NextResponse } from "next/server";

type Params = Promise<{ slug: string}>;

export async function GET(request: NextRequest,
  { params }: { params: Params }) {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug is required" }, { status: 400 });
    }

    try {
      // Fetch the blog content
      const content = await getBlogContent(slug);

      return NextResponse.json(content);
    } catch (error) {
      // Handle errors
      if (error instanceof Error) {
        return NextResponse.json(
          { error: error.message || "An error occurred" },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 500 }
      );
    }
}
