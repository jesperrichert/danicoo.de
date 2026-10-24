import {YoutubePlaylist, YoutubeVideo} from "@/lib/types";

export class Fetcher {

    public static async fetch<T>(url: string | URL, params: Record<any, any> = {}): Promise<T> {
        const data = await fetch(url, params)
        return await data.json() as T
    }

    public static async fetchYoutubeVideosFromPlaylist({playlistId}: {playlistId: string}): Promise<YoutubePlaylist> {
        const data = await fetch(`/api/youtube/playlists?playlistId=${playlistId}`)
        return await data.json() as YoutubePlaylist
    }

}