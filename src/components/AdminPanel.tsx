import { useMemo, useState } from "react";
import {
  X,
  Lock,
  Search,
  Trash2,
  Phone,
  MapPin,
  Calendar,
  Download,
} from "lucide-react";

import type { Lead } from "@/hooks/use-leads";
import { PASSWORD } from "@/hooks/use-leads";

type AdminPanelProps = {
  open: boolean;
  onClose: () => void;
  leads: Lead[];
  onDelete: (id: string) => void;
  onClearAll: () => void;
};

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function AdminPanel({ open, onClose, leads, onDelete, onClearAll }: AdminPanelProps) {
  const [authed, setAuthed] = useState(false);
  const [passInput, setPassInput] = useState("");
  const [passError, setPassError] = useState(false);

  const [search, setSearch] = useState("");
  const [filterInterest, setFilterInterest] = useState("all");
  const [filterSource, setFilterSource] = useState("all");

  const interestOptions = useMemo(() => {
    const set = new Set(leads.map((l) => l.interest));
    return Array.from(set);
  }, [leads]);

  const filtered = useMemo(() => {
    return leads.filter((l) => {
      if (filterInterest !== "all" && l.interest !== filterInterest) return false;
      if (filterSource !== "all" && l.source !== filterSource) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        if (
          !l.name.toLowerCase().includes(q) &&
          !l.phone.toLowerCase().includes(q) &&
          !(l.message ?? "").toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [leads, search, filterInterest, filterSource]);

  function handleLogin() {
    if (passInput === PASSWORD) {
      setAuthed(true);
      setPassError(false);
    } else {
      setPassError(true);
    }
  }

  function handleClose() {
    onClose();
    // reset after close animation
    setTimeout(() => {
      setAuthed(false);
      setPassInput("");
      setPassError(false);
      setSearch("");
      setFilterInterest("all");
      setFilterSource("all");
    }, 300);
  }

  function exportCsv() {
    const headers = ["Name", "Phone", "Interest", "Source", "Message", "Date"];
    const rows = filtered.map((l) => [
      l.name,
      l.phone,
      l.interest,
      l.source,
      l.message ?? "",
      formatDate(l.createdAt),
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "jps-leads.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden
      />
      <div className="relative flex h-full w-full max-w-3xl flex-col bg-background shadow-2xl animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div>
            <h2 className="font-serif text-xl font-bold">Lead Dashboard</h2>
            <p className="text-xs text-muted-foreground">
              {authed ? `${filtered.length} of ${leads.length} leads shown` : "Admin access required"}
            </p>
          </div>
          <button
            onClick={handleClose}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Close admin panel"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Password Gate */}
        {!authed && (
          <div className="flex flex-1 items-center justify-center px-6">
            <div className="w-full max-w-sm text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-lg font-bold">Admin Login</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Enter the admin password to view leads.
              </p>
              <div className="mt-6">
                <input
                  type="password"
                  placeholder="Password"
                  value={passInput}
                  onChange={(e) => {
                    setPassInput(e.target.value);
                    setPassError(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className={`w-full rounded-md border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/30 ${
                    passError ? "border-destructive" : "border-input focus:border-primary"
                  }`}
                  autoFocus
                />
                {passError && (
                  <p className="mt-2 text-xs text-destructive">Incorrect password. Try again.</p>
                )}
                <button
                  onClick={handleLogin}
                  className="mt-4 w-full rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Unlock
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Dashboard */}
        {authed && (
          <>
            {/* Filter Bar */}
            <div className="space-y-3 border-b border-border px-6 py-4">
              <div className="flex flex-wrap gap-3">
                <div className="relative flex-1 min-w-[180px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search name, phone, message…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <select
                  value={filterInterest}
                  onChange={(e) => setFilterInterest(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  <option value="all">All Interests</option>
                  {interestOptions.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <select
                  value={filterSource}
                  onChange={(e) => setFilterSource(e.target.value)}
                  className="rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
                >
                  <option value="all">All Sources</option>
                  <option value="hero">Hero Form</option>
                  <option value="contact">Contact Form</option>
                </select>
                <button
                  onClick={exportCsv}
                  className="inline-flex items-center gap-1.5 rounded-md border border-input bg-background px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <Download className="h-4 w-4" /> Export
                </button>
              </div>
            </div>

            {/* Leads List */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {filtered.length === 0 ? (
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <p className="font-serif text-lg font-bold text-muted-foreground">No leads found</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Try adjusting your filters or search.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map((lead) => (
                    <div
                      key={lead.id}
                      className="rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold text-foreground">{lead.name}</h4>
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                                lead.source === "hero"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {lead.source === "hero" ? "Hero" : "Contact"}
                            </span>
                          </div>
                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Phone className="h-3.5 w-3.5" /> {lead.phone}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5" /> {lead.interest}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar className="h-3.5 w-3.5" /> {formatDate(lead.createdAt)}
                            </span>
                          </div>
                          {lead.message && (
                            <p className="mt-2 rounded-md bg-secondary/60 px-3 py-2 text-sm text-foreground">
                              {lead.message}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => onDelete(lead.id)}
                          className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                          aria-label="Delete lead"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-border px-6 py-3">
              <p className="text-xs text-muted-foreground">
                {leads.length} total leads · stored in this browser
              </p>
              <button
                onClick={() => {
                  if (confirm("Delete all leads? This cannot be undone.")) {
                    onClearAll();
                  }
                }}
                className="text-xs font-medium text-destructive hover:underline"
              >
                Clear all
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
