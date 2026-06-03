type JotformEmbedProps = {
  title: string;
  formUrl: string;
};

export function JotformEmbed({ title, formUrl }: JotformEmbedProps) {
  if (!formUrl) {
    return (
      <div className="jotform-embed jotform-embed--placeholder">
        <h3>Prayer request form setup</h3>
        <p>
          Create the prayer request form in Jotform, turn on email notifications,
          then add the live form URL in the site settings.
        </p>
        <p className="jotform-embed__note">
          Recommended fields: name, email, phone, prayer request, urgent,
          follow-up permission, and private submission.
        </p>
      </div>
    );
  }

  return (
    <div className="jotform-embed">
      <iframe
        title={title}
        src={formUrl}
        loading="lazy"
        allow="geolocation; microphone; camera"
      />
    </div>
  );
}
