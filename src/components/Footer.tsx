'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative py-20 border-t border-gray-800">
      {/* VocoWeb Watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-8xl font-bold tracking-wider">VocoWeb</div>
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Status Column */}
          <div>
            <h4 className="font-mono text-sm text-safety-orange mb-4">STATUS</h4>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>BUILDER [ONLINE]</span>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-mono text-sm text-safety-orange mb-4">LINKS</h4>
            <div className="space-y-2 font-mono text-sm">
              <div><Link href="/contact" className="hover:text-safety-orange transition-colors">Contact Us</Link></div>
              <div><Link href="/report" className="hover:text-safety-orange transition-colors">Report Issue</Link></div>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-mono text-sm text-safety-orange mb-4">LEGAL</h4>
            <div className="space-y-2 font-mono text-sm">
              <div><Link href="/privacy" className="hover:text-safety-orange transition-colors">Privacy</Link></div>
              <div><Link href="/terms" className="hover:text-safety-orange transition-colors">Terms</Link></div>
              <div><Link href="/security" className="hover:text-safety-orange transition-colors">Security</Link></div>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-mono text-sm text-safety-orange mb-4">CONTACT</h4>
            <div className="space-y-2 font-mono text-sm">
              <div>office@vocoweb.in</div>
              <div>Support: 24/7</div>
              <div>Enterprise: Available</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-mono text-sm mb-4 md:mb-0">
              © 2026 VocoWeb.
            </div>
            <div className="font-mono text-xs text-gray-500">
              Architecting the future of automated enterprise.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}