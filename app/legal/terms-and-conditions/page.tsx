import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/legal/terms-and-conditions'];

export const metadata: Metadata = {
  title: 'Terms and Conditions — CAFAA',
  description: content.description,
};

export default function LegalTermsAndConditions() {
  return <PageTemplate content={content} />;
}
