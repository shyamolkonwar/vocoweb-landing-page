'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EngineTerminal() {
  const [showOutput, setShowOutput] = useState(false);

  return (
    <section className="py-8 bg-[#070707]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#141414] border border-[#262626] rounded-lg overflow-hidden"
        >
          {/* Top Status Bar */}
          <div className="flex flex-row items-center justify-between px-4 py-2 border-b border-[#262626]">
            <span className="font-mono text-xs text-[#9CA3AF]">RIVTOR_KERNEL_v2.4.1</span>
            <div className="flex items-center gap-2 md:gap-4">
              <span className="font-mono text-xs text-[#9CA3AF]">
                <span className="text-[#E54826]">●</span> SYSTEM: ONLINE
              </span>
              <span className="hidden md:inline font-mono text-xs text-[#9CA3AF]">REGION: EU-WEST</span>
              <span className="hidden md:inline font-mono text-xs text-[#9CA3AF]">LATENCY: 42ms</span>
            </div>
          </div>

          {/* Split Container */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Pane - Directive */}
            <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#262626]">
              <div className="font-mono text-xs text-[#9CA3AF] mb-4">// DIRECTIVE_INPUT</div>
              <div className="font-mono text-sm text-[#F3F4F6] space-y-1 break-words">
                <div><span className="text-[#9CA3AF]">&gt;</span> INITIALIZE: Enterprise_Runtime_Environment</div>
                <div className="mt-4"><span className="text-[#9CA3AF]">&gt;</span> TARGET_ARCHITECTURE:</div>
                <div className="text-[#9CA3AF] pl-4">TYPE: ISO-9001_Compliance_Dashboard</div>
                <div className="text-[#9CA3AF] pl-4">SCOPE: Multi-Facility_Audit_Logging</div>
                <div className="mt-4"><span className="text-[#9CA3AF]">&gt;</span> ENFORCE_PROTOCOLS:</div>
                <div className="text-[#9CA3AF] pl-4">DATA_RESIDENCY: EU-Frankfurt (Strict)</div>
                <div className="text-[#9CA3AF] pl-4">IDENTITY: @rivtor/auth</div>
                <div className="text-[#9CA3AF] pl-4">RBAC_LEVELS: [Global_Admin, Facility_Manager, Floor_Operator]</div>
                <div className="mt-4"><span className="text-[#9CA3AF]">&gt;</span> INJECT_SCHEMA:</div>
                <div className="text-[#9CA3AF] pl-4">TABLE 01: Material_Batches (Relational)</div>
                <div className="text-[#9CA3AF] pl-4">TABLE 02: Inspection_Logs (Immutable)</div>
                <div className="text-[#9CA3AF] pl-4">TABLE 03: Corrective_Actions (Trigger_Alerts)</div>
                <div className="mt-4 text-[#E54826]"><span className="text-[#9CA3AF]">&gt;</span> EXECUTE_DEPLOYMENT: INSTANTANEOUS</div>
              </div>
            </div>

            {/* Right Pane - Output */}
            <div className="p-4 md:p-6 bg-[#141414]">
              {/* Mobile Toggle Button */}
              <div className="md:hidden mb-4">
                <button
                  onClick={() => setShowOutput(!showOutput)}
                  className="w-full flex items-center justify-between px-4 py-2 bg-[#1a1a1a] border border-[#262626] rounded text-[#9CA3AF] hover:text-[#F3F4F6] transition-colors"
                >
                  <span className="font-mono text-xs">
                    {showOutput ? '▼' : '▶'} LIVE_ENVIRONMENT_OUTPUT
                  </span>
                  <span className="font-mono text-xs text-[#E54826]">
                    {showOutput ? 'HIDE' : 'VIEW'}
                  </span>
                </button>
              </div>
              <div className="font-mono text-xs text-[#9CA3AF] mb-4">// LIVE_ENVIRONMENT : FACILITY_04_DASHBOARD</div>

              {/* Output Content - Always visible on desktop, toggleable on mobile */}
              <div className={`${showOutput ? 'block' : 'hidden'} md:block`}>
              {/* Desktop Data Table - Hidden on mobile */}
              <div className="hidden md:block border border-[#262626]">
                <div className="grid grid-cols-5 gap-2 px-4 py-2 border-b border-[#262626] bg-[#141414]">
                  <span className="font-mono text-xs text-[#9CA3AF]">BATCH_ID</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">TIME (UTC)</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">QC_STATUS</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">OPERATOR_ID</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">ENCRYPTION</span>
                </div>
                <div className="grid grid-cols-5 gap-2 px-4 py-3 border-b border-[#262626]">
                  <span className="font-mono text-xs text-[#F3F4F6]">BT-8902A</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">2026-02-22 08:14</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">VERIFIED</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">USR-492</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">SHA-256</span>
                </div>
                <div className="grid grid-cols-5 gap-2 px-4 py-3 border-b border-[#262626]">
                  <span className="font-mono text-xs text-[#F3F4F6]">BT-8903B</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">2026-02-22 09:30</span>
                  <span className="font-mono text-xs text-[#E54826]">AUDIT_REQ</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">USR-118</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">SHA-256</span>
                </div>
                <div className="grid grid-cols-5 gap-2 px-4 py-3">
                  <span className="font-mono text-xs text-[#F3F4F6]">BT-8904C</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">2026-02-22 10:45</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">VERIFIED</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">USR-044</span>
                  <span className="font-mono text-xs text-[#F3F4F6]">SHA-256</span>
                </div>
              </div>

              {/* Mobile Stacked Data Logs - Visible only on mobile */}
              <div className="md:hidden space-y-4">
                {/* Log Entry 1 */}
                <div className="font-mono text-xs text-[#F3F4F6]">
                  <div className="text-[#9CA3AF]">[ BATCH_ID: BT-8902A ]</div>
                  <div className="mt-1">TIME: 2026-02-22 08:14 (UTC)</div>
                  <div>STATUS: VERIFIED</div>
                  <div>OPERATOR: USR-492 | ENCRYPTION: SHA-256</div>
                </div>
                <div className="border-t border-dashed border-[#262626]"></div>

                {/* Log Entry 2 */}
                <div className="font-mono text-xs text-[#F3F4F6]">
                  <div className="text-[#9CA3AF]">[ BATCH_ID: BT-8903B ]</div>
                  <div className="mt-1">TIME: 2026-02-22 09:30 (UTC)</div>
                  <div className="text-[#E54826]">STATUS: AUDIT_REQ</div>
                  <div>OPERATOR: USR-118 | ENCRYPTION: SHA-256</div>
                </div>
                <div className="border-t border-dashed border-[#262626]"></div>

                {/* Log Entry 3 */}
                <div className="font-mono text-xs text-[#F3F4F6]">
                  <div className="text-[#9CA3AF]">[ BATCH_ID: BT-8904C ]</div>
                  <div className="mt-1">TIME: 2026-02-22 10:45 (UTC)</div>
                  <div>STATUS: VERIFIED</div>
                  <div>OPERATOR: USR-044 | ENCRYPTION: SHA-256</div>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mt-4">
                <span className="font-mono text-xs text-[#9CA3AF]">INFRASTRUCTURE: SERVERLESS_EDGE</span>
                <span className="font-mono text-xs text-[#9CA3AF]">DB_SYNC: REALTIME</span>
                <span className="font-mono text-xs text-[#9CA3AF]">EXPORT_READY: TRUE</span>
              </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
