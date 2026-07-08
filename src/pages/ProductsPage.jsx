import BlurText from '../components/reactbits/BlurText'
import SpotlightCard from '../components/reactbits/SpotlightCard'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Shop LED Sign Board', desc: 'Acrylic body, custom dimensions, rectangular. SMD LEDs, 1 yr warranty.', price: '₹50 / Inch', specs: 'Acrylic, SMD LED, Rectangle' },
  { name: 'Company LED Sign Board', desc: 'Premium corporate signage. Bright, energy-efficient LED illumination.', price: '₹550 / Sq Ft', specs: 'Aluminum/Acrylic, LED, Custom' },
  { name: 'LED Signboards (Top Quality)', desc: 'Acrylic/Aluminum/SS body. Round, square, or rectangle. Blue/White/Red.', price: 'Custom', specs: 'Multi-material, Outdoor, Energy efficient' },
  { name: 'Background LED Signage Board', desc: 'Acrylic, custom size, rectangle. Bright display, energy efficient.', price: 'Custom', specs: 'Acrylic, LED, Easy installation' },
  { name: 'High Class LED Signage', desc: 'Superior brightness with modern design for premium storefronts.', price: 'Custom', specs: 'Premium LED, Modern design' },
  { name: 'Stainless Steel Sign Board', desc: 'Jindal 202/304 grade with stamping process. Custom dimensions.', price: 'Custom', specs: 'SS, Stamping process, Durable' },
  { name: '3D Stainless Steel Letter Sign', desc: 'Premium 3D letters with brown finish. Stamping process.', price: 'Custom', specs: '3D SS, Brown finish, Premium' },
  { name: 'Exterior SS Wall Sign', desc: 'Heavy-duty exterior signage built to last in all weather.', price: 'Custom', specs: 'SS, Weather resistant, Heavy duty' },
  { name: 'SS Name Board', desc: 'Adjustable size, any shape. High accuracy, easy maintenance.', price: 'Custom', specs: 'SS, Adjustable, Compact' },
  { name: 'Direction Sign Board', desc: 'Golden & brown finish. Smooth polished surface. Wall mount.', price: 'Custom', specs: 'Wood/Metal, Golden/Brown, Wall mount' },
  { name: 'Clinic Sign Board', desc: 'Custom design for clinics & hospitals. Red/Blue/White/Black.', price: 'Custom', specs: 'Custom colors, Professional' },
  { name: 'Police Wall Sign Board', desc: 'Official-grade wall sign boards for government use.', price: 'Custom', specs: 'Heavy duty, Official grade' },
  { name: 'Water Proof Office Signs', desc: 'Weather-resistant signage for indoor & outdoor office use.', price: 'Custom', specs: 'Waterproof, Durable' },
  { name: 'SS Powder Coated Letters', desc: 'Durable powder-coated lettering in various finishes.', price: 'Custom', specs: 'SS, Powder coated, Various colors' },
  { name: 'Acrylic Name Plates', desc: 'Temperature resistant, suitable for outdoor. Low power consumption.', price: 'Custom', specs: 'Acrylic, UV resistant, Durable' },
  { name: 'High Quality PVC Nameplates', desc: 'Durable PVC nameplates for offices, homes, and institutions.', price: 'Custom', specs: 'PVC, Customizable, Long-lasting' },
  { name: 'Neon Sign Board', desc: 'Eye-catching neon signs for shops, cafes, and storefronts.', price: 'Custom', specs: 'Neon/LED, Custom designs' },
  { name: 'Vinyl Sign Board', desc: 'Vinyl signage for indoor & outdoor applications. Custom graphics.', price: 'Custom', specs: 'Vinyl, Weatherproof' },
  { name: 'Caution Sign Board', desc: 'Safety & caution signage for industrial and commercial use.', price: 'Custom', specs: 'Durable materials, Standard/ Custom' },
  { name: 'HSRP Number Plates', desc: 'High Security Registration Plates. Compliant with government norms.', price: 'Custom', specs: 'HSRP, Tamper-proof, Laser coded' },
]

export default function ProductsPage() {
  return (
    <main className="pt-28 pb-16 bg-white dark:bg-gray-950 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="inline-block text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <BlurText text="Our Products" animateBy="words" delay={150} className="text-3xl sm:text-4xl font-extrabold" />
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            19+ products across signage, nameplates, letters, and safety boards. Serving Maharashtra since 2017.
            <br />
            <span className="text-sm text-gray-500 dark:text-gray-500">Payment: CAD · COD · Cheque · Cash Advance · DA | Sample Available</span>
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <SpotlightCard key={i}>
              <div className="flex h-full flex-col">
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{p.name}</h3>
                    <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary dark:bg-primary/20 dark:text-primary-light">
                      {p.specs?.split(',')[0]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
                  {p.specs && (
                    <p className="mt-2 text-[11px] text-gray-400 dark:text-gray-500">{p.specs}</p>
                  )}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-700">
                  <span className="rounded-full border border-amber-500/30 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600 dark:bg-amber-500/10 dark:text-amber-400">
                    {p.price}
                  </span>
                  <Link
                    to="/#contact"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary-light"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </main>
  )
}
