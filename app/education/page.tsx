import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/education'];

export const metadata: Metadata = {
  title: 'Education & CPD — CAFAA',
  description: content.description,
};

export default function Education() {
  return <PageTemplate content={content} />;
}
