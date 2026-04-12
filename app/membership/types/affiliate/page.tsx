import { Metadata } from 'next';
import PageTemplate from '../../../components/PageTemplate';
import { siteContent } from '../../../Content/siteContent';

const content = siteContent['/membership/types/affiliate'];

export const metadata: Metadata = {
  title: 'Affiliate Membership — CAFAA',
  description: content.description,
};

export default function MembershipTypesAffiliate() {
  return <PageTemplate content={content} />;
}
