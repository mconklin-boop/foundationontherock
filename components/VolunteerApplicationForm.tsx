export function VolunteerApplicationForm() {
  return (
    <form className="contact-form">
      {/* TODO: Connect volunteer applications to a backend, CRM, or form provider before launch. */}
      <div className="form-row">
        <label htmlFor="volunteer-name">Name</label>
        <input id="volunteer-name" name="name" type="text" placeholder="Your name" />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-email">Email</label>
        <input id="volunteer-email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-phone">Phone</label>
        <input id="volunteer-phone" name="phone" type="tel" placeholder="(555) 555-5555" />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-interest">Area of interest</label>
        <select id="volunteer-interest" name="interest" defaultValue="">
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
        <label htmlFor="volunteer-availability">Availability</label>
        <input id="volunteer-availability" name="availability" placeholder="Weekdays, weekends, monthly, etc." />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-experience">Relevant experience</label>
        <textarea id="volunteer-experience" name="experience" rows={5} placeholder="Tell us about your background or experience." />
      </div>
      <div className="form-row">
        <label htmlFor="volunteer-why">Why do you want to serve?</label>
        <textarea id="volunteer-why" name="why" rows={5} placeholder="Share your heart for serving." />
      </div>
      <label className="checkbox-row">
        <input type="checkbox" name="consent" />
        <span>I consent to be contacted about volunteer opportunities.</span>
      </label>
      <button type="button" className="button button--primary">
        Submit Volunteer Interest
      </button>
    </form>
  );
}
