import { Metadata } from 'next';
import PageTemplate from '../../../components/PageTemplate';
import { siteContent } from '../../../Content/siteContent';

const content = siteContent['/membership/types/full'];

export const metadata: Metadata = {
  title: 'Full Membership — CAFAA',
  description: content.description,
};

export default function MembershipTypesFull() {
  return <PageTemplate content={content} />;
}
