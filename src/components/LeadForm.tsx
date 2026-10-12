import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck as CheckCircle2 } from "lucide-react";

type LeadFormProps = {
  variant: "hero" | "contact";
  onSubmit: (data: { name: string; phone: string; interest: string; message?: string }) => void;
};

const interests = [
  "Buying a home",
  "Selling a property",
  "Investing in plots",
  "Renting",
];

export function LeadForm({ variant, onSubmit }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !interest) return;
    onSubmit({ name, phone, interest, message: message || undefined });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setPhone("");
      setInterest("");
      setMessage("");
    }, 3000);
  };

  if (variant === "hero") {
    if (submitted) {
      return (
        <div className="flex items-center gap-3 rounded-lg bg-white/15 px-5 py-4 text-white backdrop-blur">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />
          <p className="text-sm font-medium">Thank you! We'll call you back within 24 hours.</p>
        </div>
      );
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
        aria-label="Quick lead capture form"
      >
        <input
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur focus:border-white/60 focus:bg-white/20 sm:w-36"
        />
        <input
          type="tel"
          placeholder="Phone number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/60 outline-none backdrop-blur focus:border-white/60 focus:bg-white/20 sm:w-40"
        />
        <select
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-md border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white/70 outline-none backdrop-blur focus:border-white/60 focus:bg-white/20 sm:w-44"
          defaultValue=""
        >
          <option value="" disabled className="text-gray-800">
            I'm interested in…
          </option>
          {interests.map((i) => (
            <option key={i} value={i} className="text-gray-800">
              {i}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get Callback <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  }

  // Contact variant — vertical layout matching existing form
  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-background p-8 text-center shadow-xl">
        <CheckCircle2 className="h-10 w-10 text-green-500" />
        <h3 className="font-serif text-xl font-bold">Thank you!</h3>
        <p className="text-sm text-muted-foreground">
          Your request has been received. We'll reach out within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-xl bg-background p-6 text-foreground shadow-xl sm:p-8"
      onSubmit={handleSubmit}
    >
      <h3 className="font-serif text-xl font-bold">Request a Callback</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        Share your details and we will reach out within a day.
      </p>
      <div className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Your name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
        <input
          type="tel"
          placeholder="Phone number"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
        <select
          required
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
          defaultValue=""
        >
          <option value="" disabled>
            I'm interested in…
          </option>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Message (optional)"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
        />
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Request Callback
        </button>
      </div>
    </form>
  );
}
