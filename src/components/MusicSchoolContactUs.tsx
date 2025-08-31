"use client";

import React, { FormEvent, useState } from "react";
import { Button } from "./ui/moving-border";
import { PinContainer } from "../components/ui/3d-pin";

export const MusicSchoolContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative z-10">
      <h1 className="text-4xl md:text-6xl text-center font-extrabold mb-4 text-white">
        Hey, I’m <span className="text-teal-400">Mritunjay Thakur</span>
      </h1>
      <p className="text-neutral-400 text-center max-w-2xl text-xl my-11 mx-auto mb-10">
        A passionate full-stack web developer who loves building interactive,
        creative, and user-focused websites. This project is a{" "}
        <strong>personal portfolio website</strong> built to showcase my skills
        using modern tools and technologies.
      </p>

      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 mb-12 shadow-lg">
        <h2 className="text-xl font-semibold text-white text-center mb-6">
          Tech Stack & Story Behind This Project
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-teal-400 border border-neutral-700">
            Next.js 14
          </span>
          <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-purple-400 border border-neutral-700">
            TypeScript
          </span>
          <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-pink-400 border border-neutral-700">
            TailwindCSS
          </span>
          <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-blue-400 border border-neutral-700">
            Aceternity UI
          </span>
          <span className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-red-400 border border-neutral-700">
            Gmail API
          </span>
        </div>

        <p className="text-neutral-400 text-center max-w-3xl mx-auto">
          This is my very first <strong>Next.js</strong> project, and building
          it has been an exciting journey! I wanted to create a personal
          portfolio that not only showcases my skills but also tells a story
          about my growth as a developer. With <strong>TypeScript</strong> for
          safety, <strong>TailwindCSS</strong> for modern styling, and{" "}
          <strong>Aceternity UI</strong> for interactive components, I learned a
          lot about building dynamic, responsive websites. Integrating the{" "}
          <strong>Gmail API</strong> added a practical touch for visitors to
          reach out directly. Every line of code, every component, and every
          design choice reflects my first steps into the world of Next.js and
          web development.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-white text-center mb-4">
        Contact Me
      </h2>
      <p className="text-neutral-500 text-center mb-8">
        Reach out for collaborations, freelance opportunities, or just to say
        hi. I’d love to connect!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full p-4 rounded-xl bg-neutral-950 text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          rows={5}
          className="w-full p-4 rounded-xl bg-neutral-950 text-white border border-neutral-800 focus:ring-2 focus:ring-teal-500"
          required
        ></textarea>

        {status === "success" && (
          <p className="text-teal-500 text-center font-medium">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-white-500 text-center font-medium">
            Failed to send message. Please try again.
          </p>
        )}

        <div className="flex justify-center mt-6">
          <Button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-500 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>

      <div className="h-auto w-full flex justify-center items-center gap-6 py-12">
        <PinContainer
          title="Instagram"
          href="https://instagram.com/___jaythakur___"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">Instagram</h3>
            <span className="text-slate-500 text-xs">___jaythakur___</span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500" />
          </div>
        </PinContainer>

        <PinContainer
          title="LinkedIn"
          href="https://www.linkedin.com/in/mritunjay-thakur-jay/"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">LinkedIn</h3>
            <span className="text-slate-500 text-xs">mritunjay-thakur-jay</span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400" />
          </div>
        </PinContainer>

        <PinContainer
          title="GitHub"
          href="https://github.com/mritunjay-thakur/mritunjay-thakur"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">GitHub</h3>
            <span className="text-slate-500 text-xs">mritunjay-thakur</span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-400" />
          </div>
        </PinContainer>

        <PinContainer title="Email" href="mailto:mritunjaythakur903@gmail.com">
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[14rem] h-[14rem]">
            <h3 className="font-bold text-base text-slate-100">Email</h3>
            <span className="text-slate-500 text-xs">
              mritunjaythakur903@gmail.com
            </span>
            <div className="flex-1 rounded-lg mt-4 bg-gradient-to-br from-red-500 via-pink-500 to-yellow-500" />
          </div>
        </PinContainer>
      </div>

      <footer className="mt-12 pt-6 text-center">
        <p className="text-lg text-neutral-500">
          Built with ❤️ by{" "}
          <span className="text-teal-400 font-medium">Mritunjay Thakur</span> .
        </p>
      </footer>
    </div>
  );
};
