import { NextResponse } from "next/server";

const MEDIUM_RSS_URL =
  "https://medium.com/feed/@risyadaddiva";

interface MediumItem {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail: string;
  content: string;
}

function extractText(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match ? match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim() : "";
}

function extractAllText(xml: string, tag: string): string[] {
  const results: string[] = [];
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "g");
  let match;
  while ((match = regex.exec(xml)) !== null) {
    results.push(match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim());
  }
  return results;
}

function estimateReadingTime(content: string): number {
  const words = content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function extractThumbnail(content: string): string {
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
  return imgMatch ? imgMatch[1] : "";
}

export async function GET() {
  try {
    const res = await fetch(MEDIUM_RSS_URL, {
      next: { revalidate: 300 }, // Cache diperbarui setiap 5 menit
    });

    if (!res.ok) {
      return NextResponse.json({ posts: [], error: "Medium RSS fetch failed" });
    }

    const xml = await res.text();

    // Extract all <item> blocks
    const itemBlocks: string[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let m;
    while ((m = itemRegex.exec(xml)) !== null) {
      itemBlocks.push(m[1]);
    }

    const posts: MediumItem[] = itemBlocks.slice(0, 6).map((block) => {
      const title = extractText(block, "title");
      const link = extractText(block, "link") || extractText(block, "guid");
      const pubDate = extractText(block, "pubDate");
      const categories = extractAllText(block, "category");
      const content =
        extractText(block, "content:encoded") ||
        extractText(block, "description");
      const thumbnail = extractThumbnail(content);

      return {
        title,
        link,
        pubDate,
        categories: categories.slice(0, 4),
        thumbnail,
        content: estimateReadingTime(content).toString(),
      };
    });

    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [], error: "Parse error" });
  }
}
