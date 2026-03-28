import { Metadata } from 'next';
import Container from '../components/Container';
import { siteContent } from '../Content/siteContent';

const content = siteContent['/members-area'];

export const metadata: Metadata = {
  title: 'Members Area - CAFAA',
  description: content.description,
};

export default function MembersArea() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <Container className="max-w-md">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">{content.title}</h1>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" className="btn-primary w-full">Log In</button>
        </form>
      </Container>
    </div>
  );
}
