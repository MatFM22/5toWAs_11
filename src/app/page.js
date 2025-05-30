/*
import UserCard from '../../components/Usercard';
import Button from "@/components/Button";


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
*/

"use client";

import CardContainer from "../../components/CardContainer";
import UserList from "../../components/UserList";
import Button from "../../components/Button";

export default function HomePage() {
  const handleClick = () => {
    alert("¡Botón presionado!");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">
          Lista de Usuarios
        </h1>
        <Button onClick={handleClick}>Agregar Usuario</Button>
      </div>

      <CardContainer>
        <UserList />
      </CardContainer>
    </main>
  );
}
