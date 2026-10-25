export type Customer = {
  name: string;
  url: string;
  logo: string;
  summary: string;
  socials: SocialLink[];
};

export type SocialLink = {
  link: string;
  icon: string;
};

export type Customers = Customer[];

export type YoutubePlaylist = {
  id: string;
  youtubeVideos: YoutubeVideo[];
};

export type YoutubeVideo = {
  id: string;
  thumbnail?: string;
  title: string;
  published: string;
  link: string;
  channel: YoutubeChannel;
};

export type YoutubeChannel = {
  id: string;
  title: string;
};
