import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-slate-800 mb-3"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{ originX: 0 }}
        className="h-1 w-12 bg-accent rounded-full mb-5"
      />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-500 text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
