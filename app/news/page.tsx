import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/news'];

export const metadata: Metadata = {
  title: 'News & Insights — CAFAA',
  description: content.description,
};

export default function News() {
  return <PageTemplate content={content} />;
}
