"use client";
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="About Me"
          ></MenuItem>
        </Link>

        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/course"> All Courses</HoveredLink>
              <HoveredLink href="/course"> All projects</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
