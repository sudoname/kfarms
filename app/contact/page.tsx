"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interest: "",
    message: ""
  })

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setStatus("sent")
      setFormData({
        name: "",
        email: "",
        organization: "",
        interest: "",
        message: ""
      })
    }, 1000)
  }

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container-custom mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">
            Interested in partnering, investing, or collaborating? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Form and Info */}
      <section className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're interested in land partnership, strategic collaboration, or learning more about our integrated platform, we're open to conversations.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:info@kfarms.ng" className="text-muted-foreground hover:text-white transition-colors">
                      info@kfarms.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Locations</h3>
                    <p className="text-muted-foreground">Ikoyi, Osun State</p>
                    <p className="text-muted-foreground">Otu, Oyo State</p>
                    <p className="text-muted-foreground">Ilero, Oyo State</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="font-semibold text-white mb-3">Partnership Opportunities</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Land expansion and development</li>
                  <li>• Processing infrastructure</li>
                  <li>• Carbon credit development</li>
                  <li>• Strategic collaboration</li>
                  <li>• Supply chain partnerships</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-hover rounded-2xl p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-gold focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-white mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-gold focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-white mb-2">
                      Area of Interest
                    </label>
                    <select
                      id="interest"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-gold focus:outline-none transition-colors"
                    >
                      <option value="">Select one...</option>
                      <option value="partnership">Partnership</option>
                      <option value="investment">Investment</option>
                      <option value="supply">Supply Chain</option>
                      <option value="carbon">Carbon/Sustainability</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-gold focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-primary flex items-center justify-center group"
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : status === "sent" ? (
                    "Message Sent!"
                  ) : (
                    <>
                      Send Message
                      <Send className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-gold"
                  >
                    Thank you for your message. We'll be in touch soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center glass rounded-2xl p-12"
          >
            <h3 className="text-2xl font-bold mb-4">
              Khan Farms is a subsidiary of <span className="gradient-text">Khan Innovations Nigeria Limited</span>
            </h3>
            <p className="text-muted-foreground">
              For inquiries about our parent company or other subsidiaries (Real Estate, Fintech, Media, Marketing), please mention it in your message.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
