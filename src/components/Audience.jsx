import { Users, Plane, User, Briefcase } from "lucide-react"

const Audience = () => {
  const groups = [
    { icon: Users, title: "Families", text: "Spacious, safe homes for everyone." },
    { icon: Plane, title: "Relocators", text: "Flexible stays, fully furnished." },
    { icon: User, title: "Solo Travelers", text: "Secure and comfortable spaces." },
    { icon: Briefcase, title: "Professionals", text: "Work-friendly environments." },
  ]

  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-green">
          Designed for Every Stay
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
          {groups.map((g, i) => (
            <div key={i} className="text-center">
              <g.icon size={40} className="mx-auto text-brand-yellow mb-4" />
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{g.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience
