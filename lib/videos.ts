import {YoutubeAccount, YoutubeVideo} from "@/lib/types";
import {XMLParser} from "fast-xml-parser";

export class DataSpace {

    public static async fetch<T>(url: string | URL, params: Record<any, any> = {}): Promise<T> {
        const data = await fetch(url, params)
        return await data.json() as T
    }

    public static async videoBuilder(account: YoutubeAccount): Promise<YoutubeAccount> {
        const data = await fetch("/api/youtube", {
            method: "POST",
            body: JSON.stringify(account)
        })
        return await data.json() as YoutubeAccount
    }

}