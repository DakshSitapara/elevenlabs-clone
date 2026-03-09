"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-bold text-gray-900">404</h1>

      <p className="mt-4 text-lg text-gray-500">
        The page you&apos;re looking for does not exist.
      </p>

      <div className="mt-8 flex gap-4">
        <Button
          onClick={() => router.back()}
          className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Go Back
        </Button>

        <Button
          asChild
          variant="link"
          className="px-4 py-2 text-sm font-medium text-gray-700"
        >
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
