import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/legal/disclaimer'];

export const metadata: Metadata = {
  title: 'Disclaimer — CAFAA',
  description: content.description,
};

export default function LegalDisclaimer() {
  return <PageTemplate content={content} />;
}
