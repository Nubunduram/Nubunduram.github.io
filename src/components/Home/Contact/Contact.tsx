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

      <form id="contactForm">
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows={10} cols={30} required></textarea>

        <button type="button">Send</button>

      </form>
    </section>
  )
}

export default Contact
