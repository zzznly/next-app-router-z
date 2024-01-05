import styles from "@/app/page.module.css";

type Props = { children: React.ReactNode; modal: React.ReactNode };

export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}

/*
  http://localhost:3000 일때,
    children -> page.tsx
    modal -> @modal/default.tsx

  http://localhost:3000/i/flow/login 일때,
    children -> i/flow/login/page.tsx
    modal -> @modal/i/flow/login/page.tsx

  여기서, children -> page.tsx, page -> @modal/.../login/page 가 되도록 하려면 Intercepting Routes 사용
*/

/*
  children -> /i/.., /login/.., page.tsx
  modal -> /@modal/..
*/