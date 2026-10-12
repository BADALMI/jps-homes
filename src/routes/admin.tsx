import { createFileRoute } from "@tanstack/react-router";

import { AdminPage } from "@/components/AdminPage";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ title: "Admin — JPS Real Estates" }],
  }),
  component: AdminPage,
});
