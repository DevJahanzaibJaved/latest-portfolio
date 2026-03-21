import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/923244966088"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #25D366, #128C7E)',
        boxShadow: '0 0 20px rgba(37,211,102,0.4)',
      }}
    >
      <FaWhatsapp size={28} />
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-20"
        style={{ background: '#25D366' }} />
    </motion.a>
  )
}
