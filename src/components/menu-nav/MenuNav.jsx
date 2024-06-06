import React from "react";
import Link from "next/link";

const MenuNav = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-8 group">
          <li className="hover:underline">
            <Link href="#product">Products</Link>
          </li>
          <li className="hover:underline">
            <Link href="#solutions">Solutions</Link>
          </li>
          <li className="hover:underline">
            <Link href="#services">Services</Link>
          </li>
          <li className="hover:underline">
            <Link href="#about">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="#komunitas">Pricing</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuNav;
