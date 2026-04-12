import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/members-area'];

export const metadata: Metadata = {
  title: 'Members Area — CAFAA',
  description: content.description,
};

export default function MembersArea() {
  return <PageTemplate content={content} />;
}
