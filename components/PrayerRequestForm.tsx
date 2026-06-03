"use client";

export function PrayerRequestForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: Replace this placeholder with the selected production form integration.
      }}
    >
      {/* TODO: Connect prayer requests using Formspree, a Resend email API route, Google Sheets, Airtable, or CRM integration with privacy controls. */}
      <div className="form-row">
        <label htmlFor="prayer-name">Name required</label>
        <input id="prayer-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-row">
        <label htmlFor="prayer-email">Email required</label>
        <input id="prayer-email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="form-row">
        <label htmlFor="prayer-phone">Phone optional</label>
        <input id="prayer-phone" name="phone" type="tel" placeholder="(555) 555-5555" />
      </div>
      <div className="form-row">
        <label htmlFor="prayer-message">Prayer request message required</label>
        <textarea id="prayer-message" name="message" rows={7} placeholder="Share what you would like prayer for." required />
      </div>
      <label className="checkbox-row">
        <input type="checkbox" name="urgent" />
        <span>Is this urgent?</span>
      </label>
      <label className="checkbox-row">
        <input type="checkbox" name="follow-up" />
        <span>May we follow up with you?</span>
      </label>
      <label className="checkbox-row">
        <input type="checkbox" name="private" />
        <span>Submit privately</span>
      </label>
      <button type="submit" className="button button--primary">
        Submit Prayer Request
      </button>
    </form>
  );
}
