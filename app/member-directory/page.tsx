import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/member-directory'];

export const metadata: Metadata = {
  title: 'Member Directory — CAFAA',
  description: content.description,
};

export default function MemberDirectory() {
  return <PageTemplate content={content} />;
}
