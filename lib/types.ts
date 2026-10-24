export type Customer = {
    name: string
    url: string
    logo: string
    summary: string
}
export type Customers = Customer[]

export type YoutubePlaylist = {
    id: string
    youtubeVideos: YoutubeVideo[]
}

export type YoutubeVideo = {
    channelId: string;
    channelTitle: string;
    thumbnail?: string;
    videoId: string;
    title: string;
    published: string;
    link: string;
}