"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

export function About() {
  return (
    <section
      className="py-24 px-4 md:px-16 bg-linear-to-br from-[#181c23] to-[#23272f] min-h-[50vh] relative"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight drop-shadow-neon">
          <span className="border-b-4 border-cyan-400 pb-1">About Me</span>
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed font-medium bg-[#23272f]/70 rounded-xl px-8 py-7 shadow-xl shadow-cyan-400/10 backdrop-blur-md border border-cyan-400/10">
          <span className="text-cyan-400 font-bold">Hey there!</span> I'm{" "}
          <span className="text-pink-400 font-bold">Dan</span>, a passionate
          video editor with a knack for{" "}
          <span className="text-cyan-400 font-semibold">Premiere Pro</span> and{" "}
          <span className="text-cyan-400 font-semibold">After Effects</span>.
          <br />
          <br />I love transforming raw footage into captivating stories that
          resonate with audiences. Whether it's a{" "}
          <span className="text-cyan-400">corporate video</span>, a{" "}
          <span className="text-pink-400">music video</span>, or a personal
          project, I bring creativity and attention to detail to every edit.
          <br />
          <br />
          <span className="font-bold text-cyan-400">
            Let's create something amazing together!
          </span>
        </p>
      </motion.div>
      <div className="mt-10 flex justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Button
            className="cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full font-bold text-lg bg-cyan-500/80 hover:bg-cyan-400 shadow-[0_0_18px_2px_rgba(34,211,238,0.25)] transition-all duration-200 border-b-4 border-cyan-400/70 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            onClick={() => (window.location.href = "mailto:dan@pushfwd.de")}
          >
            <Mail width={22} height={22} className="mr-1" /> Contact me
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
