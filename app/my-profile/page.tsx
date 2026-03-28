import { Metadata } from 'next';
import Container from '../components/Container';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/my-profile'];

export const metadata: Metadata = {
  title: 'My Profile - CAFAA',
  description: content.description,
};

export default function MyProfile() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">{content.title}</h1>
        <p className="text-gray-700">{content.intro}</p>
      </Container>
    </div>
  );
}
