"use client";

import { useApp } from "@/contexts/AppContext";
import { getComponentKey } from "@/lib/components/registry";
import dynamic from "next/dynamic";

// Dynamic component map for section types and variants - moved to client component
const SECTION_MAP = {
  // Dhruv Components - matching d2d schema exactly
  dhruv_header: dynamic(() => import("@/components/sections/dhruvHeader.jsx")),
  dhruv_hero: dynamic(() => import("@/components/sections/dhruvHero.jsx")),
  dhruv_services: dynamic(() => import("@/components/sections/dhruvServices.jsx")),
  dhruv_testimonials: dynamic(() => import("@/components/sections/dhruvTestimonials.jsx")),
  dhruv_book: dynamic(() => import("@/components/sections/dhruvBook.jsx")),
  dhruv_about: dynamic(() => import("@/components/sections/dhruvAbout.jsx")),
  dhruv_footer: dynamic(() => import("@/components/sections/dhruvFooter.jsx")),
  
  // Non-prefixed versions for backward compatibility
  header: dynamic(() => import("@/components/sections/dhruvHeader.jsx")),
  hero: dynamic(() => import("@/components/sections/dhruvHero.jsx")),
  services: dynamic(() => import("@/components/sections/dhruvServices.jsx")),
  testimonials: dynamic(() => import("@/components/sections/dhruvTestimonials.jsx")),
  book: dynamic(() => import("@/components/sections/dhruvBook.jsx")),
  about: dynamic(() => import("@/components/sections/dhruvAbout.jsx")),
  footer: dynamic(() => import("@/components/sections/dhruvFooter.jsx")),
  contact: dynamic(() => import("@/components/sections/dhruvContact.jsx"))
};

export default function PageContent({ page, sections, theme, config }) {
  // Use the app context to get theme values
  const { theme: contextTheme } = useApp();

  // Merge provided theme with context theme, with context taking precedence
  const themeToUse = { ...theme, ...(contextTheme || {}) };

  return (
    <main>
      <h1 className="sr-only">{page.title}</h1>
      {sections.map((section) => {
        // Get the component directly using the type from d2d schema
        const DynamicSection = SECTION_MAP[section.type];

        if (!DynamicSection) {
          console.warn(`No component found for section type: ${section.type}`);
          return null;
        }

        return (
          <section key={section.id} className="section-wrapper">
            <DynamicSection
              content={section.content}
              items={section.items}
              type={section.type}
              is_active={section.is_active}
              position={section.position}
              variant={section.variant}
              theme={themeToUse}
              config={config}
            />
          </section>
        );
      })}
    </main>
  );
}
