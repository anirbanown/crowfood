import { AiOutlineClockCircle, AiFillCloud } from "react-icons/ai";
import { SiGooglepodcasts } from "react-icons/si";
import { FaHeadSideVirus } from "react-icons/fa";
import { MdOutlineCasino } from "react-icons/md";
import { SiTether } from "react-icons/si";

export const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Executive",
    path: "/executive",
  },
  {
    name: "Legislative",
    path: "/legislative",
  },
  {
    name: "Judiciary",
    path: "/judiciary",
  },
  {
    name: "Feedback",
    path: "/feedback",
  },
];

export const analytics = [
  {
    name: "Executive",
    desc: "*",
  },
  {
    name: "Legislative",
    desc: "*",
  },
  {
    name: "Judiciary",
    desc: "*",
  },
];

export const features = [
  "Gamified User Experience",
  "Detailed Informations",
  "AI Integrated Chatbot for any Doubts / Questions",
  "Quizes, Games, Animations and Lot More...",
];

export const controls = [
  {
    name: "Memory Cards",
    icon: FaHeadSideVirus,
    link: 'https://sansthaein-aur-samvidhan-memory-card.vercel.app/',
  },
  {
    name: "Spinning Wheel",
    icon: MdOutlineCasino,
    link: 'https://sansthaein-aur-samvidhan-spin-wheel.vercel.app/',
  },
  {
    name: "Play to earn on Web 3",
    icon: SiTether,
    link: '',
  },
];
