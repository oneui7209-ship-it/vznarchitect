import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, Building2 } from "lucide-react";
import { saveConsultationSubmission } from "../lib/supabase";

export function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 3500);

    return () => window.clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await saveConsultationSubmission(formData);
      setSubmitted(true);
      setTimeout(() => handleClose(), 2500);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-background border border-gold/20 shadow-2xl overflow-hidden"
          >
            {/* Gold accent top bar */}
            <div className="h-1 w-full bg-gold-gradient" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-gold transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 border border-gold/40 rounded-sm grid place-items-center text-gold">
                    <Building2 size={20} strokeWidth={1.3} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-gold">
                      Free Consultation
                    </div>
                    <div className="font-display text-lg text-foreground">
                      VZN Architect
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-3 mb-6 leading-relaxed">
                  Get expert architectural guidance for your dream project. Share your details and our team will reach out within 24 hours.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Full Name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      required
                    />
                    <InputField
                      label="Phone Number"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                      required
                    />
                  </div>
                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                  <SelectField
                    label="Service Interested In"
                    value={formData.service}
                    onChange={(v) => setFormData({ ...formData, service: v })}
                    options={[
                      "Architectural Design",
                      "Interior Design",
                      "3D Visualization",
                      "Building Plan Approval",
                      "Vastu Consultation",
                      "Turnkey Construction",
                    ]}
                    required
                  />
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                      Project Details
                    </label>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-surface border border-gold/20 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gold-gradient px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-gold-foreground font-medium hover:gold-glow transition-all duration-500 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send size={13} />
                    {isSubmitting ? "Submitting..." : "Book Free Consultation"}
                  </button>
                </form>

                <p className="text-[10px] text-muted-foreground/60 text-center mt-4">
                  Your information is kept strictly confidential.
                </p>
              </div>
            ) : (
              /* Success State */
              <div className="p-8 sm:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 15, stiffness: 200 }}
                  className="w-16 h-16 mx-auto mb-5 border border-gold/40 rounded-full grid place-items-center text-gold"
                >
                  <CheckCircle size={32} strokeWidth={1.2} />
                </motion.div>
                <h3 className="font-display text-2xl text-foreground mb-2">
                  Thank You!
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                  Your consultation request has been received. Our team will contact you within 24 hours.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Reusable field components ── */

function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-surface border border-gold/20 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-surface border border-gold/20 px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-gold/50 transition-colors appearance-none cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a0a0a0' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        <option value="" disabled>
          Select a service
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
