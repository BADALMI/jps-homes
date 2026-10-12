import { useState, type FormEvent } from "react";
import { ArrowRight, CircleCheck as CheckCircle2, User, Phone, MessageSquare } from "lucide-react";

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

  function handleSubmit(e: FormEvent) {
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
    }, 3500);
  }

  /* ───────── Hero variant: glass card ───────── */
  if (variant === "hero") {
    if (submitted) {
      return (
        <div className="flex items-center gap-3 rounded-xl border border-green-300/40 bg-green-500/15 px-6 py-5 text-white backdrop-blur-md">
          <CheckCircle2 className="h-6 w-6 shrink-0 text-green-300" />
          <div>
            <p className="text-sm font-semibold">Thank you, {name || "we got it"}!</p>
            <p className="text-xs text-white/75">We'll call you back within 24 hours.</p>
          </div>
        </div>
      );
    }

    return (
      <form
        onSubmit={handleSubmit}
        aria-label="Quick lead capture form"
        className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-md sm:p-6"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/90 text-primary-foreground">
            <ArrowRight className="h-4 w-4 rotate-[-45deg]" />
          </span>
          <div>
            <p className="text-sm font-bold text-white">Get a Callback</p>
            <p className="text-[11px] text-white/60">We'll reach out within 24 hours</p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {/* Name */}
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none transition-all backdrop-blur focus:border-white/50 focus:bg-white/20 focus:ring-2 focus:ring-white/20"
            />
          </div>
          {/* Phone */}
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
            <input
              type="tel"
              placeholder="Phone number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none transition-all backdrop-blur focus:border-white/50 focus:bg-white/20 focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>

        {/* Interest pills */}
        <div className="mt-3">
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-white/50">
            I'm interested in
          </p>
          <div className="flex flex-wrap gap-2">
            {interests.map((i) => {
              const active = interest === i;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setInterest(i)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    active
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "border border-white/25 bg-white/5 text-white/70 hover:border-white/50 hover:bg-white/15"
                  }`}
                >
                  {i}
                </button>
              );
            })}
          </div>
          <input type="hidden" required value={interest} onChange={() => {}} />
        </div>

        {/* Message */}
        <div className="relative mt-3">
          <MessageSquare className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-white/40" />
          <textarea
            placeholder="Message (optional)"
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-white/20 bg-white/10 py-2.5 pl-9 pr-3 text-sm text-white placeholder:text-white/50 outline-none transition-all backdrop-blur focus:border-white/50 focus:bg-white/20 focus:ring-2 focus:ring-white/20"
          />
        </div>

        <button
          type="submit"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl"
        >
          Request Callback <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  }

  /* ───────── Contact variant ───────── */
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
