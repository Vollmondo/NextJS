import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header>
      <nav>
        <Link href={"/"}>Главная</Link>
        <Link href={"/cat"}>Каталог</Link>
        <Link href={"/about"}>О нас</Link>
        <Link href={"/contacts"}>Контакты</Link>
      </nav>
    </header>
  );
};