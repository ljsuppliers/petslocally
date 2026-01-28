import Link from "next/link";

export const metadata = {
  title: "About PetsLocally",
  description: "Learn about PetsLocally, your trusted resource for finding local pet services across the UK.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-narrow text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About PetsLocally
          </h1>
          <p className="text-xl opacity-90">
            Helping pet owners find trusted local services since 2026
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-narrow">
          <div className="prose max-w-none">
            <h2>Our Mission</h2>
            <p>
              PetsLocally exists to make finding quality pet services simple. We know that your pet is part of your family, and finding the right vet, groomer, or dog walker matters. Our mission is to connect pet owners with trusted local services they can rely on.
            </p>

            <h2>What We Do</h2>
            <p>
              We maintain a comprehensive directory of pet services across the UK, from major cities to smaller towns. Our listings cover everything from veterinary practices and dog groomers to kennels, pet shops, and dog walkers.
            </p>
            <p>
              Beyond our directory, we provide educational resources to help you make informed decisions about your pet's care. Our guides cover topics from choosing the right vet to understanding dog grooming needs.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li><strong>Quality over quantity:</strong> We focus on featuring reliable, reputable services rather than listing everything available.</li>
              <li><strong>Truly local:</strong> We understand that proximity matters when your pet needs care. Our location-based approach helps you find services nearby.</li>
              <li><strong>Pet welfare first:</strong> Every recommendation we make considers what is best for animals. We do not feature businesses with poor animal welfare practices.</li>
              <li><strong>Free for pet owners:</strong> Finding pet services should not cost you anything. Our directory is completely free to use.</li>
            </ul>

            <h2>How We Help</h2>
            <p>
              Whether you have just moved to a new area, recently got your first pet, or simply want to find better services, PetsLocally helps you:
            </p>
            <ul>
              <li>Discover pet services in your local area</li>
              <li>Compare options based on the services they offer</li>
              <li>Learn what to look for when choosing providers</li>
              <li>Access expert guidance on pet care topics</li>
            </ul>

            <h2>Get in Touch</h2>
            <p>
              We love hearing from pet owners. Whether you have feedback about our directory, suggestions for services we should include, or questions about pet care, we are here to help.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
