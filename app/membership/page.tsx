import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/membership'];

export const metadata: Metadata = {
  title: 'Membership — CAFAA',
  description: content.description,
};

export default function Membership() {
  return <PageTemplate content={content} />;
}
