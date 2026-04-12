import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/member-directory/full-members'];

export const metadata: Metadata = {
  title: 'Full Members — CAFAA',
  description: content.description,
};

export default function MemberDirectoryFullMembers() {
  return <PageTemplate content={content} />;
}
