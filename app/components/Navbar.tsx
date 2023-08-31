"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navStyles from "../../styles/nav.module.css";
import { Avatar } from '@radix-ui/themes';
import { useTheme } from 'next-themes'


const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/stuff",
    name: "Cool stuff",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [hoveredPath, setHoveredPath] = useState(pathname);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }


  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }



  return (
    <div className={resolvedTheme === 'dark' ? navStyles.div1Dark : navStyles.div1Light}>
      <nav className={navStyles.nav}>
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={isActive ? resolvedTheme === 'dark' ? navStyles.link1Dark : navStyles.link1Light : resolvedTheme === 'dark' ? navStyles.link2Dark : navStyles.link2Light}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span className={navStyles.span}>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className={resolvedTheme === 'dark' ? navStyles.motionDark : navStyles.motionLight}
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 15,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
        <Avatar
          className={navStyles.avatar}
          src="/profilePicsquare.png"
          fallback="S"
        />
      </nav>
    </div>
  );
}