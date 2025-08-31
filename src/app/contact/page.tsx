"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { MusicSchoolContactUs } from "@/components/MusicSchoolContactUs";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      <MusicSchoolContactUs />
    </div>
  );
}
