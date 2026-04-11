"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, DownloadSimpleIcon } from "@phosphor-icons/react";

const announcements = [
  {
    date: "09/04/2026",
    title: "IIMA BPGP Batch 2026-28 Applications Deadline - April 10, 2026",
    file: "/files/announcement1.pdf",
  },
  {
    date: "06/04/2026",
    title: "Recipients of the Deepak Ratan Memorial Award 2025-26",
    file: "/files/announcement2.pdf",
  },
  {
    date: "19/02/2026",
    title: 'Fifteenth edition of Hindi Magazine "Pratibimb" Published',
    file: "/files/announcement3.pdf",
  },
  {
    date: "15/01/2026",
    title: "Annual Sports Meet Registration Open for All Students",
    file: "/files/announcement4.pdf",
  },
  {
    date: "10/01/2026",
    title: "PhD Admissions Open for 2026-27 Academic Session",
    file: "/files/announcement5.pdf",
  },
  {
    date: "02/01/2026",
    title: "Revised Academic Calendar for Semester II Released",
    file: "/files/announcement6.pdf",
  },
];

const PAGE_SIZE = 3;

export default function Announcements() {
  const [page, setPage] = useState(0);
  const [hovered, setHovered] = useState(false);

  const totalPages = Math.ceil(announcements.length / PAGE_SIZE);
  const current = announcements.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  const hasNext = page < totalPages - 1;

  const handleDownload = (e: React.MouseEvent, file: string, title: string) => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = file;
    a.download = title;
    a.click();
  };

  return (
    <section
      className="w-full py-12 px-4 md:px-6 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold font-sans shrink-0">
            Announcements
          </h2>
          <div className="flex-1 h-px bg-border" />
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/announcements"
              className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-700 transition-colors flex items-center justify-center"
            >
              <ArrowRightIcon size={18} color="white" weight="bold" />
            </Link>
            <Link
              href="/announcements"
              className="text-red-600 font-semibold hover:underline text-sm"
            >
              View all
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {current.map((item, i) => (
              <div
                key={i}
                className="border border-border rounded-md p-5 hover:shadow-md transition-shadow flex flex-col gap-3 group relative"
              >
                <span className="text-sm text-red-600 font-medium">
                  {item.date}
                </span>
                <p className="text-sm text-foreground leading-relaxed pr-8">
                  {item.title}
                </p>

                {/* Download button */}
                <button
                  onClick={(e) => handleDownload(e, item.file, item.title)}
                  className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:opacity-100 transition-opacity hover:bg-red-50 hover:border-red-300"
                  title="Download circular"
                >
                  <DownloadSimpleIcon size={14} weight="bold" className="text-red-600" />
                </button>
              </div>
            ))}
          </div>

          {/* Next page arrow — appears on section hover */}
          {hasNext && (
            <button
              onClick={() => setPage((p) => p + 1)}
              className={`absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-md transition-all duration-300 ${
                hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
              }`}
              title="Next announcements"
            >
              <ArrowRightIcon size={18} color="white" weight="bold" />
            </button>
          )}

          {/* Back arrow */}
          {page > 0 && (
            <button
              onClick={() => setPage((p) => p - 1)}
              className={`absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 flex items-center justify-center shadow-md transition-all duration-300 rotate-180 ${
                hovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
              }`}
              title="Previous announcements"
            >
              <ArrowRightIcon size={18} color="white" weight="bold" />
            </button>
          )}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === page ? "bg-red-600 w-4" : "bg-border"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}