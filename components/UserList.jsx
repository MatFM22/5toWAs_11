// components/UserList.jsx
import UserCard from "./Usercard";

const users = [
  {
    id: 1,
    name: "María Fernández",
    role: "Desarrolladora Frontend",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Luis Ramírez",
    role: "Diseñador UI/UX",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    id: 3,
    name: "Ana Gómez",
    role: "Ingeniera de Software",
    avatar: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    id: 4,
    name: "Carlos López",
    role: "QA Analyst",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

export default function UserList() {
  return (
    <>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          role={user.role}
          avatar={user.avatar}
        />
      ))}
    </>
  );
}
