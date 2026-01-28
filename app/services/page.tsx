import Link from "next/link";

export const metadata = {
  title: "Pet Services",
  description: "Find all types of pet services across the UK. Vets, dog groomers, dog walkers, pet shops, kennels, and more.",
};

const services = [
  {
    id: "vets",
    name: "Veterinary Practices",
    icon: "🏥",
    description: "Find trusted vets for check-ups, vaccinations, surgery, and emergency care. Your pet's health is in good hands with our listed veterinary practices.",
    features: ["Regular health checks", "Vaccinations", "Surgery", "Emergency care", "Dental treatment", "Microchipping"],
  },
  {
    id: "groomers",
    name: "Dog Groomers",
    icon: "✂️",
    description: "Professional grooming keeps your dog healthy and looking great. Find groomers experienced with all breeds, from Poodles to Huskies.",
    features: ["Full grooming", "Bath and brush", "Nail trimming", "Ear cleaning", "Breed-specific cuts", "Puppy first groom"],
  },
  {
    id: "walkers",
    name: "Dog Walkers",
    icon: "🦮",
    description: "Reliable dog walkers to exercise your pet when you cannot. Solo walks, group walks, and flexible schedules available.",
    features: ["Solo walks", "Group walks", "Puppy visits", "Flexible scheduling", "GPS tracking", "Photo updates"],
  },
  {
    id: "pet-shops",
    name: "Pet Shops",
    icon: "🛒",
    description: "Quality pet food, toys, and supplies from local independent shops and trusted retailers.",
    features: ["Premium pet food", "Toys and accessories", "Beds and bedding", "Leads and collars", "Treats", "Expert advice"],
  },
  {
    id: "kennels",
    name: "Boarding Kennels",
    icon: "🏠",
    description: "Safe, comfortable boarding for your dog while you are away. Licensed facilities with experienced staff.",
    features: ["Overnight boarding", "Holiday stays", "Individual kennels", "Exercise areas", "Webcam access", "Collection service"],
  },
  {
    id: "sitters",
    name: "Pet Sitters",
    icon: "💝",
    description: "In-home pet care so your pet stays comfortable in familiar surroundings while you travel.",
    features: ["In-home stays", "Daily visits", "Feeding and medication", "Plant watering", "House security", "Multiple pets"],
  },
  {
    id: "training",
    name: "Dog Training",
    icon: "🎓",
    description: "Professional trainers to help with puppy training, obedience, behaviour issues, and specialist skills.",
    features: ["Puppy classes", "Obedience training", "Behaviour modification", "One-to-one sessions", "Agility training", "Recall training"],
  },
  {
    id: "catteries",
    name: "Catteries",
    icon: "🐱",
    description: "Specialist cat boarding with individual chalets, climbing spaces, and feline-focused care.",
    features: ["Individual chalets", "Heated accommodation", "Climbing areas", "Quiet environment", "Special diets", "Medication given"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-wide">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pet Services
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Whatever your pet needs, find trusted local providers across the UK
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-wide">
          <div className="space-y-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="card">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="text-5xl">{service.icon}</div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold mb-3 text-[var(--color-forest)]">
                        {service.name}
                      </h2>
                      <p className="text-[var(--color-charcoal)]/80 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span 
                            key={feature}
                            className="bg-[var(--color-sage)]/20 text-[var(--color-forest)] px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <Link 
                        href="/locations" 
                        className="btn-primary inline-block"
                      >
                        Find {service.name}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-forest)] text-white text-center">
        <div className="content-narrow">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Cannot Find What You Need?
          </h2>
          <p className="opacity-80 mb-8">
            Get in touch and we will help you find the right service for your pet
          </p>
          <Link href="/contact" className="btn-primary bg-[var(--color-gold)] text-[var(--color-charcoal)]">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
