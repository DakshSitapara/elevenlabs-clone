"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/features/dashboard/components/dashboard-sidebar";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <SidebarProvider defaultOpen={true} className="h-svh">
      <DashboardSidebar />
      <SidebarInset className="min-h-0 min-w-0">
        <main className="flex min-h-0 flex-1 flex-col">
          <div className="flex min-h-[calc(100vh-2rem)] flex-col items-center justify-center text-center px-4">
            <h1 className="text-7xl font-bold text-gray-900">404</h1>

            <p className="mt-4 text-lg text-gray-500">
              The page you&apos;re looking for does not exist.
            </p>

            <div className="mt-8 flex gap-4">
              <Button
                onClick={() => router.back()}
                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>

              <Button
                variant="outline"
                className="px-4 py-2 text-sm font-medium text-gray-700"
                onClick={() => router.push("/")}
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
