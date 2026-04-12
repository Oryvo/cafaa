import { Metadata } from 'next';
import PageTemplate from '../../../components/PageTemplate';
import { siteContent } from '../../../Content/siteContent';

const content = siteContent['/membership/types/associate'];

export const metadata: Metadata = {
  title: 'Associate Membership — CAFAA',
  description: content.description,
};

export default function MembershipTypesAssociate() {
  return <PageTemplate content={content} />;
}
