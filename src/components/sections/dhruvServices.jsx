import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DhruvServices({ content, items, type, is_active, position, variant }) {
  if (!is_active) return null;

  const defaultServices = [
    {
      id: "697983ce-5f8b-46db-89be-22e6471f3f5a",
      section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
      title: "Web Development",
      subtitle: "Custom Solutions",
      description: "We build responsive, fast-loading websites that look great on any device.",
      icon: "code",
      image_url: "https://via.placeholder.com/400x300",
      rating: null,
      price: null,
      duration: null,
      tag: null,
      position: 0
    },
    {
      id: "8838565f-e964-40be-b8b8-5c0e38180d80",
      section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
      title: "E-commerce",
      subtitle: "Online Stores",
      description: "Create your online store with secure payment processing and inventory management.",
      icon: "search",
      image_url: "https://via.placeholder.com/400x300",
      rating: null,
      price: null,
      duration: null,
      tag: null,
      position: 1
    },
    {
      id: "19d93208-162d-46b8-a57c-69294d21ab14",
      section_id: "a088a10c-5616-42c0-a90a-c5b19544c757",
      title: "SEO Optimization",
      subtitle: "Improve Rankings",
      description: "Enhance your online presence with our search engine optimization services.",
      icon: "share",
      image_url: "https://via.placeholder.com/400x300",
      rating: null,
      price: null,
      duration: null,
      tag: null,
      position: 2
    }
  ];

  const servicesToShow = items.length > 0 ? items : defaultServices;

  return (
    <section 
      className="py-20 bg-gray-50"
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
          <h2 className="text-4xl font-bold mb-6">{content.title || "Our Services"}</h2>
          {content.description && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.description}</p>
          )}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesToShow.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {service.image_url && (
                <div className="relative h-48">
                  <Image
                    src={service.image_url}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                {service.subtitle && (
                  <p className="text-gray-600 mb-4">{service.subtitle}</p>
                )}
                <p className="text-gray-700 mb-4">{service.description}</p>
                {service.price && (
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-black">${service.price}</span>
                    {service.duration && (
                      <span className="text-gray-600">{service.duration}</span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {content.cta_text && content.cta_link && (
          <div className="text-center mt-12">
            <Link
              href={content.cta_link}
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              {content.cta_text}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
} 