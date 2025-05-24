import { FaHandSparkles, FaShoePrints, FaPalette, FaGripLines, FaHandHoldingHeart } from 'react-icons/fa'

const icons = {
  manucure: FaHandSparkles,
  pedicure: FaShoePrints,
  nailart: FaPalette,
  gel: FaGripLines,
  soin: FaHandHoldingHeart
}

export default function ServiceCard({ type, title, description }) {
  const Icon = icons[type]

  return (
    <div className="bg-noir/50 backdrop-blur-sm p-6 rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
      <div className="text-3xl text-gold mb-4">
        <Icon />
      </div>
      <h3 className="text-xl font-semibold text-gold mb-2">{title}</h3>
      <p className="text-marble/80">{description}</p>
    </div>
  )
} 