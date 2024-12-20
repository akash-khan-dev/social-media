import { FaUserFriends } from "react-icons/fa";
import { GoFileMedia } from "react-icons/go";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";

export const ProfileData = [
  {
    icon: IoNewspaperOutline,
    title: "News Feed",
    link: "/",
  },
  {
    icon: RiMessage2Line,
    title: "Message",
    link: "/message",
  },
  {
    icon: FaUserFriends,
    title: "Friends",
    link: "/friends",
  },
  {
    icon: GoFileMedia,
    title: "Media",
    link: "/media",
  },
  {
    icon: IoSettingsOutline,
    title: "Settings",
    link: "settings",
  },
];
