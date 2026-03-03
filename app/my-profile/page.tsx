import Container from '../components/Container';

export const metadata = {
  title: 'CAFAA | My Profile',
  description: 'Member profile placeholder.',
};

export default function MyProfile() {
  return (
    <div className="min-h-screen bg-white">
      <Container className="py-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">My Profile</h1>
        <p className="text-gray-700">[Profile information placeholder]</p>
      </Container>
    </div>
  );
}
