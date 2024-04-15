import "./_Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <header>
        <h2>
          let's connect
        </h2>
        <h3>
          Feel free to reach out if you're interested in working together, You can also email me at <a href="mailto:caron.antoine.pro@gmail.com?subject=Subject%20Here&body=Your%20message%20here">caron.antoine.pro@gmail.com</a>. All fields are required!
        </h3>
      </header>

      <form id="contact-form" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />

        {/* Add a honeypot field to prevent spam */}
        <p style={{ visibility: "hidden" }}>
          <label htmlFor="bot-field">Don’t fill this out if you're human: <input type="text" name="bot-field" /></label>
        </p>
        
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={10} cols={30} required></textarea>

        <button type="submit">Send</button>

      </form>
    </section>
  )
}

export default Contact
