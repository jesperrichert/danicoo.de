import { InstagramIcon } from "@/components/icons/instagram";
import { TwitchIcon } from "@/components/icons/twitch";
import { YoutubeIcon } from "@/components/icons/youtube";
import { JSX } from "react/jsx-runtime";

export const ICONS: Record<string, () => JSX.Element> = {
  twitch: TwitchIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
};
