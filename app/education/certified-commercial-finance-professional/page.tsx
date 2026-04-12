import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/education/certified-commercial-finance-professional'];

export const metadata: Metadata = {
  title: 'CCFP — CAFAA',
  description: content.description,
};

export default function EducationCertifiedCommercialFinanceProfessional() {
  return <PageTemplate content={content} />;
}
