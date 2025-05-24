import React from 'react';
import Image from 'next/image';

export default function DhruvTestimonials({ content, items, type, is_active, position, variant }) {
  if (!is_active) return null;

  const defaultTestimonials = [
    {
      id: "574ffd62-8291-4c24-9996-0022ae00bb93",
      section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
      title: "John Smith",
      subtitle: "CEO, TechStart",
      description: "Working with this team has been an incredible experience. Their attention to detail and commitment to excellence is unmatched.",
      icon: null,
      image_url: "https://via.placeholder.com/100x100",
      rating: 5,
      price: null,
      duration: null,
      tag: null,
      position: 0
    },
    {
      id: "8f60eb15-48cb-4332-9eb8-069c06116102",
      section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
      title: "Sarah Johnson",
      subtitle: "Marketing Director",
      description: "I was amazed at how quickly they understood our brand and delivered exactly what we needed. Highly recommended!",
      icon: null,
      image_url: "https://via.placeholder.com/100x100",
      rating: 5,
      price: null,
      duration: null,
      tag: null,
      position: 1
    },
    {
      id: "350c0ae3-a23d-4f07-988d-cc5d384732f7",
      section_id: "8453573e-d3e7-4e95-8057-9a3d7b8a5eed",
      title: "Michael Brown",
      subtitle: "Small Business Owner",
      description: "Their work helped transform my business. Professional, responsive, and truly talented team.",
      icon: null,
      image_url: "https://via.placeholder.com/100x100",
      rating: 4,
      price: null,
      duration: null,
      tag: null,
      position: 2
    }
  ];

  const testimonialsToShow = items.length > 0 ? items : defaultTestimonials;

  return (
    <section 
      className="py-20 bg-white"
      data-type={type}
      data-position={position}
      data-variant={variant}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          {content.subtitle && (
            <h2 className="text-xl text-gray-600 mb-4">{content.subtitle}</h2>
          )}
          <h2 className="text-4xl font-bold mb-6">{content.title || "What Our Clients Say"}</h2>
          {content.description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.description}</p>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsToShow.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              )}

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.description}"</p>

              {/* Client Info */}
              <div className="flex items-center">
                {testimonial.image_url && (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image_url}
                      alt={testimonial.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.title}</h4>
                  {testimonial.subtitle && (
                    <p className="text-gray-600 text-sm">{testimonial.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 