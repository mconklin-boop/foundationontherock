export function PrayerRequestForm() {
  return (
    <form className="contact-form">
      {/* TODO: Connect prayer requests to a secure backend or form provider before collecting real submissions. */}
      <div className="form-row">
        <label htmlFor="prayer-name">Name</label>
        <input id="prayer-name" name="name" type="text" placeholder="Your name" />
      </div>
      <div className="form-row">
        <label htmlFor="prayer-email">Email</label>
        <input id="prayer-email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="form-row">
        <label htmlFor="prayer-phone">Phone optional</label>
        <input id="prayer-phone" name="phone" type="tel" placeholder="(555) 555-5555" />
      </div>
      <div className="form-row">
        <label htmlFor="prayer-message">Prayer request message</label>
        <textarea id="prayer-message" name="message" rows={7} placeholder="How can we pray with you?" />
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
      <button type="button" className="button button--primary">
        Submit Prayer Request
      </button>
    </form>
  );
}
