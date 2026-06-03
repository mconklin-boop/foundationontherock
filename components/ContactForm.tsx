"use client";

export function ContactForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: Replace this placeholder with the selected production form integration.
      }}
    >
      {/* TODO: Connect this form using Formspree, a Resend email API route, Google Sheets, Airtable, or CRM integration. */}
      <div className="form-row">
        <label htmlFor="name">Name required</label>
        <input id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email required</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message required</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us how we can help, partner, or pray with you."
          required
        />
      </div>
      <button type="submit" className="button button--primary">
        Send Message
      </button>
    </form>
  );
}
