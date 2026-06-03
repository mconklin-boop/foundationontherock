export function ContactForm() {
  return (
    <form className="contact-form">
      {/* TODO: Connect this form to the selected backend, CRM, or form provider before launch. */}
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Your name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="form-row">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="How can we help?"
        />
      </div>
      <button type="button" className="button button--primary">
        Send Message
      </button>
    </form>
  );
}
