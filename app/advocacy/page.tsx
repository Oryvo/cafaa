import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/advocacy'];

export const metadata: Metadata = {
  title: 'Advocacy & Policy — CAFAA',
  description: content.description,
};

export default function Advocacy() {
  return <PageTemplate content={content} />;
}
