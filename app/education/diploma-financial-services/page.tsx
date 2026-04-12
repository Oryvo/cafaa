import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/education/diploma-financial-services'];

export const metadata: Metadata = {
  title: 'Diploma in Financial Services — CAFAA',
  description: content.description,
};

export default function EducationDiplomaFinancialServices() {
  return <PageTemplate content={content} />;
}
