import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/resources/constitution'];

export const metadata: Metadata = {
  title: 'Constitution — CAFAA',
  description: content.description,
};

export default function ResourcesConstitution() {
  return <PageTemplate content={content} />;
}
