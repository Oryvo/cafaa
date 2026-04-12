import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/member-directory/affiliate-members'];

export const metadata: Metadata = {
  title: 'Affiliate Members — CAFAA',
  description: content.description,
};

export default function MemberDirectoryAffiliateMembers() {
  return <PageTemplate content={content} />;
}
