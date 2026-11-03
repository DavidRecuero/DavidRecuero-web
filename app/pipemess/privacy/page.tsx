import type { Metadata } from 'next';
import LegalDocuments from '@/components/LegalDocuments';
import { privacyPolicies } from '@/data/pipemessPrivacy';

export const metadata: Metadata = {
  title: 'Pipe Mess – Privacy Policy',
  description: 'Privacy policy for the Pipe Mess mobile game.',
};

export default function PipeMessPrivacyPage() {
  return <LegalDocuments documents={privacyPolicies} />;
}
