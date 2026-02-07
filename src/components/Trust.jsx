import { ShieldCheck, Sparkles, MapPin, Headphones } from "lucide-react"

const Trust = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "Verified Homes",
      text: "Every property is inspected and maintained.",
    },
    {
      icon: Sparkles,
      title: "Spotless Spaces",
      text: "Professionally cleaned for every stay.",
    },
    {
      icon: MapPin,
      title: "Prime Locations",
      text: "Live close to what matters most.",
    },
    {
      icon: Headphones,
      title: "Local Support",
      text: "Help when you need it, anytime.",
    },
  ]

  return (
    <section className="bg-brand-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="text-center">
            <item.icon
              size={36}
              className="mx-auto text-brand-green mb-4"
            />
            <h3 className="font-semibold text-brand-green">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trust
