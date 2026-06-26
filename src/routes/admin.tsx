import { createFileRoute } from "@tanstack/react-router";
import { AdminPanel } from "@/components/AdminPanel";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel — VZN Architect" },
      { name: "description", content: "Admin dashboard for VZN Architect consultation submissions." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  return <AdminPanel />;
}
