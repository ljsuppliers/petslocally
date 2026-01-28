import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with PetsLocally. We are here to help you find the best pet services in your area.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)] text-white py-16">
        <div className="content-narrow text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl opacity-90">
            We would love to hear from you
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="content-narrow">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6 text-[var(--color-forest)]">
                Get in Touch
              </h2>
              <p className="text-[var(--color-charcoal)]/80 mb-8">
                Have a question about finding pet services? Want to suggest a business for our directory? We are here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <h3 className="font-display font-bold mb-1">Email Us</h3>
                    <a 
                      href="mailto:hello@petslocally.co.uk" 
                      className="text-[var(--color-forest)] hover:text-[var(--color-sage)]"
                    >
                      hello@petslocally.co.uk
                    </a>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-2xl">⏰</div>
                  <div>
                    <h3 className="font-display font-bold mb-1">Response Time</h3>
                    <p className="text-[var(--color-charcoal)]/70">
                      We aim to respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="font-display text-xl font-bold mb-6 text-[var(--color-forest)]">
                Common Questions
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold mb-2">How do I list my pet business?</h4>
                  <p className="text-sm text-[var(--color-charcoal)]/70">
                    Email us with your business details and we will review your listing for inclusion in our directory.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">Is PetsLocally free to use?</h4>
                  <p className="text-sm text-[var(--color-charcoal)]/70">
                    Yes, our directory is completely free for pet owners. No registration required.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">How do you choose which businesses to list?</h4>
                  <p className="text-sm text-[var(--color-charcoal)]/70">
                    We verify all businesses for legitimacy and consider customer feedback and animal welfare standards.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold mb-2">I found incorrect information. How can I report it?</h4>
                  <p className="text-sm text-[var(--color-charcoal)]/70">
                    Please email us with the details and we will update our records promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-warm-white)]">
        <div className="content-narrow text-center">
          <h2 className="font-display text-2xl font-bold mb-4 text-[var(--color-forest)]">
            Ready to Find Pet Services?
          </h2>
          <p className="text-[var(--color-charcoal)]/70 mb-8">
            Browse our directory to find trusted services near you
          </p>
          <Link href="/locations" className="btn-primary">
            Browse Locations
          </Link>
        </div>
      </section>
    </>
  );
}
