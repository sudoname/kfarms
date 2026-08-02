"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-20 bg-cream">
      {/* Hero */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <Shield className="w-4 h-4 text-gold-700" />
            <span className="text-sm font-medium text-foreground">Your privacy matters</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto glass-hover rounded-2xl p-8 md:p-12 space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Khan Farms ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website kfarms.ng or engage with our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, organization name, and any information you provide when contacting us.</li>
              <li>• <strong className="text-foreground">Usage Data:</strong> Information about how you access and use our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li>• <strong className="text-foreground">Communication Data:</strong> Records of correspondence when you contact us via email, WhatsApp, or our contact form.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Respond to your inquiries and provide customer support</li>
              <li>• Process partnership and collaboration requests</li>
              <li>• Send information about our platform, services, and opportunities</li>
              <li>• Improve our website and user experience</li>
              <li>• Comply with legal obligations</li>
              <li>• Protect against fraudulent or illegal activity</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• <strong className="text-foreground">Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business.</li>
              <li>• <strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights, property, or safety.</li>
              <li>• <strong className="text-foreground">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
              <li>• <strong className="text-foreground">With Your Consent:</strong> When you have given explicit consent for sharing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Access the personal information we hold about you</li>
              <li>• Request correction of inaccurate or incomplete information</li>
              <li>• Request deletion of your personal information</li>
              <li>• Object to or restrict the processing of your information</li>
              <li>• Withdraw consent at any time where we rely on consent</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:info@khan.ng" className="text-gold-700 hover:text-gold-800 transition-colors">info@khan.ng</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us so we can take appropriate action.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and maintained on servers located outside of your country of residence. By using our website, you consent to the transfer of information to countries outside of Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-foreground">Email:</strong> <a href="mailto:info@khan.ng" className="text-gold-700 hover:text-gold-800 transition-colors">info@khan.ng</a></p>
              <p><strong className="text-foreground">WhatsApp:</strong> <a href="https://wa.me/2348168166109" target="_blank" rel="noopener noreferrer" className="text-gold-700 hover:text-gold-800 transition-colors">+234 816 816 6109</a></p>
              <p><strong className="text-foreground">Company:</strong> Khan Farms (A subsidiary of Khan Innovations Nigeria Limited)</p>
              <p><strong className="text-foreground">Locations:</strong> Ikoyi (Osun State); Otu 1, Otu 2, Ilero &amp; Ikomu (Oyo State)</p>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
