import type { Metadata } from 'next';
import LegalDocuments from '@/components/LegalDocuments';
import { deleteAccountPages } from '@/data/pipemessDeleteAccount';

export const metadata: Metadata = {
  title: 'Pipe Mess – Delete your account',
  description: 'How to delete your Pipe Mess account and its data, from the game or by email.',
};

export default function PipeMessDeleteAccountPage() {
  return <LegalDocuments documents={deleteAccountPages} />;
}
