"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import navStyles from "../../styles/nav.module.css";
import { Avatar } from '@radix-ui/themes';


const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/now",
    name: "Now",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/writing/")) {
    pathname = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);
  
  return (
    <div className={navStyles.div1}>
      <nav className={navStyles.nav}>
        {navItems.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              className={isActive ? navStyles.link1 : navStyles.link2}
              data-active={isActive}
              href={item.path}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span className={navStyles.span}>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className={navStyles.motion}
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