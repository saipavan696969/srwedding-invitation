"use client";

import { useState, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Users, MessageSquare, User } from "lucide-react";
import SectionDivider from "./SectionDivider";

interface FormState {
  name: string;
  guests: string;
  attending: "yes" | "no" | "";
  message: string;
}

interface FormErrors {
  name?: string;
  attending?: string;
  guests?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.attending) errors.attending = "Please select your attendance.";
  if (form.attending === "yes" && !form.guests) {
    errors.guests = "Please select number of guests.";
  }
  return errors;
}

export default function RSVPSection() {
  const nameId = useId();
  const guestsId = useId();
  const attendingId = useId();
  const messageId = useId();

  const [form, setForm] = useState<FormState>({
    name: "",
    guests: "1",
    attending: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate async (no backend)
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1000);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl font-body text-sm text-temple-text bg-temple-ivory border transition-all duration-200 outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-temple-muted/50";
  const errorClass = "mt-1.5 text-xs text-red-600 font-body";

  return (
    <section
      id="rsvp"
      className="section-pad bg-temple-cream"
      aria-labelledby="rsvp-heading"
    >
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="font-display text-gold text-xs tracking-[0.4em] uppercase mb-3">
            Kindly Respond
          </p>
          <h2
            id="rsvp-heading"
            className="font-heading text-maroon text-4xl sm:text-5xl italic"
          >
            RSVP
          </h2>
          <SectionDivider variant="ornate" />
          <p className="font-body text-temple-muted text-base">
            Your presence would be our greatest joy. Please let us know if you
            can join us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #FFFDF8 0%, #FFF9F0 100%)",
            border: "1px solid rgba(198,154,59,0.25)",
            boxShadow: "0 8px 40px rgba(109,22,40,0.08)",
          }}
        >
          {/* Top accent */}
          <div
            className="h-1.5"
            style={{
              background: "linear-gradient(90deg, #6D1628, #C69A3B, #1F4A3D)",
            }}
            aria-hidden="true"
          />

          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8"
                  role="alert"
                  aria-live="polite"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{
                      background: "linear-gradient(135deg, rgba(198,154,59,0.15), rgba(198,154,59,0.08))",
                      border: "2px solid rgba(198,154,59,0.4)",
                    }}
                    aria-hidden="true"
                  >
                    <CheckCircle size={28} className="text-gold" />
                  </div>
                  <h3 className="font-heading text-maroon text-3xl italic mb-3">
                    Thank You!
                  </h3>
                  <p className="font-body text-temple-muted text-base leading-relaxed">
                    Your response has been received. We are so excited to
                    celebrate with you!
                  </p>
                  <p className="mt-3 font-heading italic text-gold text-xl">
                    ✨ See you at the wedding ✨
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Wedding RSVP form"
                >
                  {/* Name */}
                  <div className="mb-5">
                    <label
                      htmlFor={nameId}
                      className="flex items-center gap-2 font-body text-temple-muted text-xs tracking-[0.2em] uppercase mb-2"
                    >
                      <User size={12} aria-hidden="true" />
                      Your Name *
                    </label>
                    <input
                      id={nameId}
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`${inputClass} ${errors.name ? "border-red-400" : "border-gold/25"}`}
                      aria-describedby={errors.name ? `${nameId}-error` : undefined}
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p id={`${nameId}-error`} className={errorClass} role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Attending */}
                  <div className="mb-5">
                    <fieldset>
                      <legend className="flex items-center gap-2 font-body text-temple-muted text-xs tracking-[0.2em] uppercase mb-3">
                        Will you attend? *
                      </legend>
                      <div className="grid grid-cols-2 gap-3">
                        {(["yes", "no"] as const).map((val) => (
                          <label
                            key={val}
                            className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-200 font-body text-sm
                              ${form.attending === val
                                ? "border-gold bg-gold/10 text-maroon font-medium"
                                : "border-gold/25 bg-transparent text-temple-muted hover:border-gold/50"
                              }`}
                          >
                            <input
                              type="radio"
                              name="attending"
                              id={`${attendingId}-${val}`}
                              value={val}
                              checked={form.attending === val}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {val === "yes" ? "✓ Joyfully accept" : "✗ Regretfully decline"}
                          </label>
                        ))}
                      </div>
                      {errors.attending && (
                        <p className={errorClass} role="alert">
                          {errors.attending}
                        </p>
                      )}
                    </fieldset>
                  </div>

                  {/* Guest count — only if attending */}
                  {form.attending === "yes" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-5 overflow-hidden"
                    >
                      <label
                        htmlFor={guestsId}
                        className="flex items-center gap-2 font-body text-temple-muted text-xs tracking-[0.2em] uppercase mb-2"
                      >
                        <Users size={12} aria-hidden="true" />
                        Number of Guests *
                      </label>
                      <select
                        id={guestsId}
                        name="guests"
                        value={form.guests}
                        onChange={handleChange}
                        className={`${inputClass} ${errors.guests ? "border-red-400" : "border-gold/25"}`}
                        aria-describedby={errors.guests ? `${guestsId}-error` : undefined}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                      {errors.guests && (
                        <p id={`${guestsId}-error`} className={errorClass} role="alert">
                          {errors.guests}
                        </p>
                      )}
                    </motion.div>
                  )}

                  {/* Message */}
                  <div className="mb-7">
                    <label
                      htmlFor={messageId}
                      className="flex items-center gap-2 font-body text-temple-muted text-xs tracking-[0.2em] uppercase mb-2"
                    >
                      <MessageSquare size={12} aria-hidden="true" />
                      Your Wishes (optional)
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Share your blessings and warm wishes..."
                      className={`${inputClass} border-gold/25 resize-none`}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl
                      font-body text-white text-sm tracking-wide
                      transition-all duration-300 hover:opacity-90 hover:scale-[1.01]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold
                      disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
                    style={{
                      background: submitting
                        ? "#8B1E2D"
                        : "linear-gradient(135deg, #6D1628, #8B1E2D)",
                      boxShadow: "0 4px 20px rgba(109,22,40,0.3)",
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} aria-hidden="true" />
                        Send RSVP
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
