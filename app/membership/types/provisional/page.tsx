import { Metadata } from 'next';
import PageTemplate from '../../../components/PageTemplate';
import { siteContent } from '../../../Content/siteContent';

const content = siteContent['/membership/types/provisional'];

export const metadata: Metadata = {
  title: 'Provisional Membership — CAFAA',
  description: content.description,
};

export default function MembershipTypesProvisional() {
  return <PageTemplate content={content} />;
}
