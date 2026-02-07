const homes = [
  {
    id: 1,
    name: "Modern Family Apartment",
    location: "Lekki, Lagos",
    price: "₦45,000 / night",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    id: 2,
    name: "Luxury City Condo",
    location: "Victoria Island",
    price: "₦65,000 / night",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 3,
    name: "Quiet Studio Retreat",
    location: "Ikeja",
    price: "₦30,000 / night",
    image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  },
]

const FeaturedHomes = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-brand-green-light/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-brand-green">
          Featured Homes
        </h2>
        <p className="text-gray-600 mt-2">
          Handpicked spaces guests love
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {homes.map((home) => (
            <div
              key={home.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              <img
                src={home.image}
                alt={home.name}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-brand-green">
                  {home.name}
                </h3>
                <p className="text-sm text-gray-500">
                  {home.location}
                </p>
                <p className="mt-2 font-medium">
                  {home.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedHomes
