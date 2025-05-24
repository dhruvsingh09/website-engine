"use client";

import React from 'react';
import PageContent from '@/components/PageContent';
import d2dData from '@/data/d2d.json';

export default function AboutPage() {
  const aboutPage = d2dData.pages.about;
  
  if (!aboutPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
      </div>
    );
  }

  return (
    <main>
      <PageContent page={aboutPage} sections={aboutPage.sections} />
    </main>
  );
} 