import { Metadata } from 'next';
import PageTemplate from '../components/PageTemplate';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/my-profile'];

export const metadata: Metadata = {
  title: 'My Profile — CAFAA',
  description: content.description,
};

export default function MyProfile() {
  return <PageTemplate content={content} />;
}
