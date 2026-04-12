import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/member-directory/associate-members'];

export const metadata: Metadata = {
  title: 'Associate Members — CAFAA',
  description: content.description,
};

export default function MemberDirectoryAssociateMembers() {
  return <PageTemplate content={content} />;
}
