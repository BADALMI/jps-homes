import { useCallback, useEffect, useState } from "react";

export type Lead = {
  id: string;
  name: string;
  phone: string;
  interest: string;
  message?: string;
  createdAt: string;
  source: "hero" | "contact";
};

const STORAGE_KEY = "jps_leads";
const PASSWORD = "1234";

const demoLeads: Lead[] = [
  {
    id: "demo-1",
    name: "Aarav Sharma",
    phone: "+91 98765 43210",
    interest: "Buying a home",
    message: "Looking for a 3BHK in Gomti Nagar under 80 lakhs.",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    source: "hero",
  },
  {
    id: "demo-2",
    name: "Priya Verma",
    phone: "+91 91234 56780",
    interest: "Investing in plots",
    message: "Interested in residential plots in Sushant Golf City.",
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    source: "contact",
  },
  {
    id: "demo-3",
    name: "Rohan Mishra",
    phone: "+91 99887 76655",
    interest: "Selling a property",
    message: "Have a 2BHK in Indira Nagar, want to sell.",
    createdAt: new Date(Date.now() - 86400000 * 3).toISOString(),
    source: "hero",
  },
  {
    id: "demo-4",
    name: "Sneha Gupta",
    phone: "+91 90909 80808",
    interest: "Buying a home",
    message: "Need a villa in Hazratganj area, budget 1.5 Cr.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    source: "contact",
  },
  {
    id: "demo-5",
    name: "Vikram Singh",
    phone: "+91 93456 12378",
    interest: "Renting",
    message: "Looking for a furnished apartment for rent in Aliganj.",
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    source: "hero",
  },
];

function loadLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(demoLeads));
      return demoLeads;
    }
    return JSON.parse(raw) as Lead[];
  } catch {
    return demoLeads;
  }
}

export function useLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLeads(loadLeads());
    setReady(true);
  }, []);

  const addLead = useCallback(
    (lead: Omit<Lead, "id" | "createdAt">) => {
      const newLead: Lead = {
        ...lead,
        id: `lead-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };
      setLeads((prev) => {
        const next = [newLead, ...prev];
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        return next;
      });
      return newLead;
    },
    [],
  );

  const deleteLead = useCallback((id: string) => {
    setLeads((prev) => {
      const next = prev.filter((l) => l.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const clearAll = useCallback(() => {
    setLeads([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return { leads, addLead, deleteLead, clearAll, ready };
}

export { PASSWORD };
