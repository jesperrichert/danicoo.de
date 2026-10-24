"use server";
import { NextRequest, NextResponse } from "next/server";
import { YoutubePlaylist, YoutubeVideo } from "@/lib/types";
import { XMLParser } from "fast-xml-parser";
import { PUBLIC_SHOWCASE_PLAYLIST_URL } from "@/lib/constants";

export async function GET(req: NextRequest) {
  // ...?playlistId=2423&...
  const playlistId = req.url.split("?playlistId=")[1].split("&")[0];

  const account = {
    id: playlistId,
  } as YoutubePlaylist;
  const parser = new XMLParser();
  const feedData = await fetch(
    PUBLIC_SHOWCASE_PLAYLIST_URL.replaceAll("{id}", playlistId),
    {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
  const feedString = await feedData.text();
  const feed = await parser.parse(feedString);

  account.youtubeVideos = (feed.feed.entry as any[]).map((item) => {
    const videoId = item.id?.split(":").pop() ?? "";

    return {
      channelId: account.id,
      channelTitle: item.author?.name || "",
      videoId,
      thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
      title: item.title || "",
      published: item.published || "",
      link: `https://www.youtube.com/watch?v=${videoId}`,
    } satisfies YoutubeVideo;
  }) as YoutubeVideo[];

  return Response.json(account);
}
