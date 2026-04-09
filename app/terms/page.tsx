"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="container-custom mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-6">
            <FileText className="w-4 h-4 text-gold" />
            <span className="text-sm font-medium">Terms & Conditions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Terms of <span className="gradient-text">Service</span>
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
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to Khan Farms. By accessing and using our website (kfarms.ng) or engaging with our services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">2. About Khan Farms</h2>
            <p className="text-muted-foreground leading-relaxed">
              Khan Farms is a subsidiary of Khan Innovations Nigeria Limited, operating as a modern agro-industrial platform focused on land development, oil palm cultivation, livestock, processing infrastructure, and sustainable carbon pathways across Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">3. Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• Use the website in any way that violates any applicable national or international law or regulation</li>
              <li>• Transmit any unsolicited or unauthorized advertising, promotional materials, or spam</li>
              <li>• Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              <li>• Attempt to gain unauthorized access to any portion of the website or any systems or networks</li>
              <li>• Use any automated means to access the website for any purpose without our express written permission</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Khan Farms or Khan Innovations Nigeria Limited and is protected by Nigerian and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">5. User Submissions</h2>
            <p className="text-muted-foreground leading-relaxed">
              By submitting any information, feedback, or materials through our contact forms, email, or other communication channels, you grant Khan Farms a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such submissions for business purposes. You represent that you have the right to grant this license and that your submissions do not infringe on any third-party rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">6. Partnership and Investment Opportunities</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Information about partnership, investment, or collaboration opportunities presented on this website is for informational purposes only and does not constitute:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-6">
              <li>• An offer to sell or a solicitation of an offer to buy any securities or investment products</li>
              <li>• Financial, investment, legal, or tax advice</li>
              <li>• A guarantee of returns, profits, or specific outcomes</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              All partnership and investment discussions are subject to separate agreements, due diligence, and mutual consent. We recommend consulting with qualified professionals before making any business or investment decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">7. Accuracy of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide accurate and up-to-date information about our operations, metrics, and plans, we make no representations or warranties regarding the completeness, accuracy, or reliability of any information on this website. Operational data, growth projections, and timelines are subject to change based on market conditions, agricultural factors, and business decisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">8. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites that are not owned or controlled by Khan Farms. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. You acknowledge and agree that Khan Farms shall not be liable for any damage or loss caused by your use of any third-party websites.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground leading-relaxed">
              THE WEBSITE AND ALL INFORMATION, CONTENT, MATERIALS, AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, KHAN FARMS DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">10. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, KHAN FARMS AND ITS PARENT COMPANY, KHAN INNOVATIONS NIGERIA LIMITED, SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">11. Indemnification</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree to defend, indemnify, and hold harmless Khan Farms, Khan Innovations Nigeria Limited, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the website or your violation of these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">12. Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the courts of Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">13. Modifications to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">14. Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect. The invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">15. Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms constitute the entire agreement between you and Khan Farms regarding your use of the website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">16. Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p><strong className="text-white">Email:</strong> <a href="mailto:info@khan.ng" className="text-gold hover:text-gold-400 transition-colors">info@khan.ng</a></p>
              <p><strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/2348168166109" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-400 transition-colors">+234 816 816 6109</a></p>
              <p><strong className="text-white">Company:</strong> Khan Farms (A subsidiary of Khan Innovations Nigeria Limited)</p>
              <p><strong className="text-white">Locations:</strong> Ikoyi (Osun State), Otu (Oyo State), Ilero (Oyo State)</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground">
              By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
