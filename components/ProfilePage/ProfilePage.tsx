// "use client";
// import { useAuthStore } from "@/lib/store/authStore";
// import css from "./ProfilePage.module.css";

// export default function ProfilePage() {
//   const { user } = useAuthStore();
//   return (
//     <main className={css.mainContent}>
//       <div className={css.profileCard}>
//         <div className={css.header}>
//           <h1 className={css.formTitle}>Profile Page</h1>
//           {/* <a src="" className={css.editProfileButton}>
//             Edit Profile
//           </a> */}
//         </div>
//         <div className={css.avatarWrapper}>
//           {/* <img
//             src="Avatar"
//             alt="User Avatar"
//             width={120}
//             height={120}
//             className={css.avatar}
//           /> */}
//         </div>
//         <div className={css.profileInfo}>
//           <p>Username: {user?.username}</p>
//           <p>Email: {user?.email}</p>
//         </div>
//       </div>
//     </main>
//   );
// }
