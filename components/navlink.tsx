"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  label: string;
  target: string;
};

export default function NavLink({ label, target }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={target}
      className={clsx("btn btn-primary btn-sm md:btn-md join-item min-w-24", {
        "btn-outline": pathname != target,
      })}
    >
      {label}
    </Link>
  );
}
