import { useState } from 'react'
import BlurText from '../components/reactbits/BlurText'
import Lightbox from '../components/Lightbox'
import { Link } from 'react-router-dom'

const images = [
  { src: 'https://lh3.googleusercontent.com/E97EhisrSWrbNHMp4W65ZOgDdF5qEskS7OpkNR-qmvzyR_Tw6O11gym9GC-1pX5bGu_F_O9eYhQOgTQ4MdJXM8zmTcRXrN63ZX9Ed9Tf=w1600-rw', alt: 'Mayur Art — Store Front' },
  { src: 'https://img.magicpin.com/3874943_store_images_0.jpg', alt: 'Sign Board Display' },
  { src: 'https://img.magicpin.com/3874943_store_images_1.jpg', alt: 'LED Sign Board Work' },
  { src: 'https://img.magicpin.com/3874943_store_images_2.jpg', alt: 'Custom Signage' },
  { src: 'https://img.magicpin.com/3874943_store_images_3.jpg', alt: 'SS Letter Signs' },
  { src: 'https://img.magicpin.com/3874943_store_images_4.jpg', alt: 'Shop Signage' },
  { src: 'https://img.magicpin.com/3874943_store_images_5.jpg', alt: 'Name Plates & Signs' },
  { src: 'https://img.magicpin.com/3874943_store_images_6.jpg', alt: 'Vinyl Sign Board' },
  { src: 'https://img.magicpin.com/3874943_store_images_7.jpg', alt: 'LED Glow Sign Board' },
  { src: 'https://img.magicpin.com/3874943_store_images_8.jpg', alt: 'Neon Sign Work' },
  { src: 'https://img.magicpin.com/3874943_store_images_9.jpg', alt: 'Custom Fabrication' },
  { src: 'https://img.magicpin.com/3874943_store_images_10.jpg', alt: 'Outdoor Signage' },
  { src: 'https://img.magicpin.com/3874943_store_images_11.jpg', alt: 'Acrylic Nameplate' },
  { src: 'https://img.magicpin.com/3874943_store_images_12.jpg', alt: 'Stainless Steel Work' },
  { src: 'https://img.magicpin.com/3874943_store_images_13.jpg', alt: 'LED Illuminated Sign' },
  { src: 'https://img.magicpin.com/3874943_store_images_14.jpg', alt: 'Vehicle Wrap Design' },
  { src: 'https://img.magicpin.com/3874943_store_images_15.jpg', alt: 'Office Sign Board' },
  { src: 'https://img.magicpin.com/3874943_store_images_16.jpg', alt: 'Police Sign Board' },
  { src: 'https://img.magicpin.com/3874943_store_images_17.jpg', alt: 'Custom Letter Sign' },
  { src: 'https://img.magicpin.com/3874943_store_images_18.jpg', alt: 'Branding Solutions' },
]

export default function GalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (i) => { setLightboxIndex(i); setLightboxOpen(true) }

  const prev = () => setLightboxIndex(i => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setLightboxIndex(i => (i === images.length - 1 ? 0 : i + 1))

  return (
    <main className="pt-24 pb-16 sm:pt-28 bg-white dark:bg-gray-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="inline-block text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <BlurText text="Our Work" animateBy="words" delay={150} className="text-3xl sm:text-4xl font-extrabold" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A glimpse of our sign boards, nameplates, vehicle wraps, and custom signage solutions.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-gray-100 text-left transition focus:outline-none focus:ring-2 focus:ring-primary dark:border-gray-700 dark:bg-gray-800"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              <p className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100 sm:text-sm">
                {img.alt}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/#contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-light"
          >
            Get Custom Signage
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </main>
  )
}
