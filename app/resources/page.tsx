import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/resources'];

export const metadata: Metadata = {
  title: 'Member Resources — CAFAA',
  description: content.description,
};

export default function Resources() {
  return <PageTemplate content={content} />;
}
