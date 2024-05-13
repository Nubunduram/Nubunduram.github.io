import "./_Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <header>
        <h2>
          let's connect
        </h2>
        <p>
          Feel free to reach out if you're interested in working together, You can also email me <a href="mailto:caron.antoine.pro@gmail.com">Here<span>.</span></a> All fields are required!
        </p>
      </header>

      <form id="contact-form" name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />

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
