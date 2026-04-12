import { Metadata } from 'next';
import PageTemplate from '../../components/PageTemplate';
import { siteContent } from '../../Content/siteContent';

const content = siteContent['/membership/renewal'];

export const metadata: Metadata = {
  title: 'Membership Renewal — CAFAA',
  description: content.description,
};

export default function MembershipRenewal() {
  return <PageTemplate content={content} />;
}
