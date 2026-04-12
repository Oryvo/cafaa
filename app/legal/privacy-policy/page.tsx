import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/legal/privacy-policy'];

export const metadata: Metadata = {
  title: 'Privacy Policy — CAFAA',
  description: content.description,
};

export default function LegalPrivacyPolicy() {
  return <PageTemplate content={content} />;
}
