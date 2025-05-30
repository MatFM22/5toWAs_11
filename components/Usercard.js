/*
import styles from './UserCard.module.css';

export default function UserCard({ name, email, image}) {
    return (
        <div className={`${styles.card} bg-white rounded-xl shadow-md p-4`}>
            <img src={image} alt="Profile" className="w-24 h-24 rounded-full mx-auto" />
            <h2 className="text-xl semibold text-center mt-4">{name}</h2>
            <p className="text-gray-500 text-center">{email}</p>
        </div>
    );
}
*/

// components/Usercard.js
import styles from "./Usercard.module.css";
import { UserIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

export default function UserCard({ name, role, avatar }) {
  return (
    <div
      className={`${styles.card} bg-white rounded-xl shadow-md p-4 flex items-center space-x-4 hover:scale-105 transition-transform duration-300`}
    >
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-blue-900"
      />
      <div>
        <h2 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
          <UserIcon className="h-5 w-5 text-blue-900" />
          {name}
        </h2>
        <p className="text-gray-600 flex items-center gap-2">
          <BriefcaseIcon className="h-5 w-5 text-gray-500" />
          {role}
        </p>
      </div>
    </div>
  );
}
