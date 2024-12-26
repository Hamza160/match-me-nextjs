"use client";
import { NavbarItem } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const NavLink = ({href, label}:{href:string; label:string}) => {
    const pathname = usePathname();
  return (
    <NavbarItem
    isActive={pathname === href}
      as={Link}
      href={href}
    >
      <span>{label}</span>
    </NavbarItem>
  )
}

export default NavLink