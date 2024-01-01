"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  //  Get the router (for example 2)

  //   const router: AppRouterInstance = useRouter();

  useEffect(() => {
    //  Works (example 1)

    // redirect("/will-be-hit");

    //  Also works (example 2)

    // const timeout = setTimeout(() => router.push("/will-be-hit"), 5000);

    //  Does not work (example 3)

    const timeout = setTimeout(() => redirect("/will-never-be-hit"), 5000);

    //  Cleanup on unmount

    return () => clearTimeout(timeout);
  }, []);

  return <p>Redirecting in 5...</p>;
}
