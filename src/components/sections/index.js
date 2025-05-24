// Import dhruv components
import DhruvHeader from './dhruvHeader';
import DhruvHero from './dhruvHero';
import DhruvServices from './dhruvServices';
import DhruvTestimonials from './dhruvTestimonials';
import DhruvBook from './dhruvBook';
import DhruvAbout from './dhruvAbout';
import DhruvFooter from './dhruvFooter.jsx';

// Map component keys to their respective React components
export const componentMap = {
  // Dhruv Components
  dhruv_header: DhruvHeader,
  dhruv_hero: DhruvHero,
  dhruv_services: DhruvServices,
  dhruv_testimonials: DhruvTestimonials,
  dhruv_book: DhruvBook,
  dhruv_about: DhruvAbout,
  dhruv_footer: DhruvFooter
};

// Helper function to get component by type and variant
export const getComponent = (type, variant) => {
  // For dhruv components, we only need the type
  if (type.startsWith('dhruv_')) {
    return componentMap[type] || null;
  }
  
  return null;
}; 