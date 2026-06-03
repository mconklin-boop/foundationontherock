"use client";

export function VolunteerApplicationForm() {
  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO: Replace this placeholder with the selected production form integration.
      }}
    >
      {/* TODO: Connect volunteer applications using Formspree, a Resend email API route, Google Sheets, Airtable, or CRM integration. */}
      <div className="form-row">
        <label htmlFor="volunteer-name">Name required</label>
        <input id="volunteer-name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-email">Email required</label>
        <input id="volunteer-email" name="email" type="email" placeholder="you@example.com" required />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-phone">Phone required</label>
        <input id="volunteer-phone" name="phone" type="tel" placeholder="(555) 555-5555" required />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-interest">Area of interest required</label>
        <select id="volunteer-interest" name="interest" defaultValue="" required>
          <option value="" disabled>Choose an area</option>
          <option>Community Outreach</option>
          <option>Mentorship</option>
          <option>Prayer Team</option>
          <option>Administrative Support</option>
          <option>Event Volunteers</option>
          <option>Housing Assistance Support</option>
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-availability">Availability required</label>
        <input id="volunteer-availability" name="availability" placeholder="Weekdays, weekends, monthly, etc." required />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-experience">Relevant experience</label>
        <textarea id="volunteer-experience" name="experience" rows={5} placeholder="Tell us about your background or experience." />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-why">Why do you want to serve? required</label>
        <textarea id="volunteer-why" name="why" rows={5} placeholder="Share your heart for serving." required />
      </div>
      <label className="checkbox-row">
        <input type="checkbox" name="consent" required />
        <span>I consent to be contacted about volunteer opportunities.</span>
      </label>
      <button type="submit" className="button button--primary">
        Submit Volunteer Interest
      </button>
    </form>
  );
}
