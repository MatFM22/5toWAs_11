import UserCard from '../../components/Usercard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 flex justify-center items-center">
      <UserCard 
        name= "Matias Aquino"
        email= "matias.aquino@tecsup.edu.pe"
        image= "https://randomuser.me/api/portraits/men/3.jpg"
      />
    </main>
  );
}
