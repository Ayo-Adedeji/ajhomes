const steps = [
  { step: "01", title: "Search", text: "Find homes in your preferred location." },
  { step: "02", title: "Choose", text: "Select a space that fits your needs." },
  { step: "03", title: "Stay", text: "Move in and enjoy your stay." },
]

const HowItWorks = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-brand-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-green">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {steps.map((s) => (
            <div key={s.step}>
              <span className="text-brand-yellow font-bold text-xl">
                {s.step}
              </span>
              <h3 className="font-semibold mt-2">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
