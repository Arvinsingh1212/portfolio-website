import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSubmitting(true)

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        e.target, // This is the form element
        'YOUR_USER_ID' // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          setStatusMessage('Your message has been sent successfully!')
          setIsSubmitting(false)
          setFormData({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setStatusMessage('Something went wrong. Please try again later.')
          setIsSubmitting(false)
        }
      )
  }

  return (
    <section id="contact" className="py-20 bg-blue-50 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-blue-700 mb-10 text-center">Contact</h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-8 rounded-xl shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {/* Status Message */}
        {statusMessage && (
          <div className="mt-4 text-center text-sm text-gray-700">
            {statusMessage}
          </div>
        )}

        {/* Contact Info Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-semibold text-blue-700">Contact Information</h3>
          <p className="mt-2 text-gray-600">Email: <a href="mailto:vansh.verma@mitaoe.ac.in" className="text-blue-600">vansh.verma@mitaoe.ac.in</a> | <a href="mailto:vanshverma1331@gmail.com" className="text-blue-600">vanshverma1331@gmail.com</a></p>
          <p className="mt-2 text-gray-600">Phone: <span className="text-blue-600">+91-7006600323</span></p>
        </div>
      </div>
    </section>
  )
}

export default Contact
