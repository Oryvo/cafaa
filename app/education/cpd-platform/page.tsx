import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/education/cpd-platform'];

export const metadata: Metadata = {
  title: 'CPD Platform — CAFAA',
  description: content.description,
};

export default function EducationCpdPlatform() {
  return <PageTemplate content={content} />;
}
