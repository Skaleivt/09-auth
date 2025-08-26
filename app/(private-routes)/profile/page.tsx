import ProfilePage from "@/components/ProfilePage/ProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Page | NoteHub",
  description:
    "Manage your profile in NoteHub: update personal details, review activity, and customize your account for a better note-taking experience.",
  openGraph: {
    title: "Profile Page | NoteHub",
    description:
      "Your NoteHub profile: edit personal information, track activity, and adjust account settings to enhance your productivity with notes.",
    url: "https://notehub.com/profile",
    siteName: "NoteHub",
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "Profile",
      },
    ],
    type: "website",
  },
};

export default function userProfile() {
  return <ProfilePage />;
}
