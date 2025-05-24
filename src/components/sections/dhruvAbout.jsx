"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function DhruvAbout({ content, type, position, variant, items = [], is_active = true }) {
  if (!is_active) return null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            {content?.image_url && (
              <Image
                src={content.image_url}
                alt={content.title || "About Us"}
                fill
                className="object-cover"
              />
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-[#1a1a1a]">
                {content?.title || "About Nelson Hair Salon"}
              </h2>
              <p className="text-xl text-[#c8a97e]">
                {content?.subtitle || "Your Style, Our Passion"}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {content?.description || "Welcome to Nelson Hair Salon, where we combine artistry with expertise to create your perfect look."}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {items.map((item) => (
                <div key={item.id} className="space-y-4">
                  <div className="flex items-center space-x-4">
                    {item.icon === 'story' && (
                      <div className="w-12 h-12 rounded-full bg-[#c8a97e] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    )}
                    {item.icon === 'mission' && (
                      <div className="w-12 h-12 rounded-full bg-[#c8a97e] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    )}
                    {item.icon === 'star' && (
                      <div className="w-12 h-12 rounded-full bg-[#c8a97e] flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-[#1a1a1a]">{item.title}</h3>
                      <p className="text-[#c8a97e]">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            {content?.cta_text && (
              <div className="pt-8">
                <Link
                  href={content.cta_link || "/contact"}
                  className="inline-block bg-[#c8a97e] text-white px-8 py-4 rounded-md hover:bg-[#b38f5e] transition-colors"
                >
                  {content.cta_text}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 