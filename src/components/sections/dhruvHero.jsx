"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function DhruvHero({ 
  content = {}, 
  type, 
  is_active = true, 
  position, 
  variant 
}) {
  // Add console log for debugging
  console.log('Hero Component Props:', { content, type, is_active, position, variant });

  if (!is_active) {
    console.log('Hero component is not active');
    return null;
  }

  const backgroundImageUrl = content?.background_url || 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80';

  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-background"
      )}
      data-type={type}
      data-position={position}
      data-variant={variant}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImageUrl}
          alt={content?.title || "Hero Background"}
          fill
          priority
          className="object-cover"
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {content?.title || "Premium Hair Salon"}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          {content?.description || "Experience the art of styling with our expert stylists. We bring style and precision to every cut."}
        </p>
        {content?.cta_text && content?.cta_link && (
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-100"
          >
            <Link href={content.cta_link}>
              {content.cta_text}
            </Link>
          </Button>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
} 