import SocialCard from '@/components/SocialCard';
import ContactForm from '@/components/ContactForm';
import AvailabilityBadge from '@/components/AvailabilityBadge';
import { socialLinks } from '@/data/socials';

export default function ContactPage() {
  return (
    <main className="min-h-screen background text-primary pt-6 lg:pt-12 pb-32 px-6 lg:px-12 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column (Info & Links) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Availability Badge */}
            <AvailabilityBadge />

            {/* Social networks */}
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <SocialCard key={social.id || social.name} {...social} />
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Form Component */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  );
}