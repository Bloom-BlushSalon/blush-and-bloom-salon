// SIMPLE SALON WEBSITE + BOOKING REQUEST FORM
// Clients submit booking requests and salon owner manually confirms appointments.

export default function BloomAndBlushWebsite() {
  const services = {
    nails: [
      { name: 'Basic Manicure', price: '$20–25', time: '45 min' },
      { name: 'Gel Manicure', price: '$30–40', time: '1 hr' },
      { name: 'Acrylic Set', price: '$40–50', time: '2 hrs' },
    ],
    lashes: [
      { name: 'Classic Set', price: '$15', time: '45 min' },
      { name: 'Full Set', price: '$20', time: '1 hr' },
      { name: 'Dramatic Set', price: '$25', time: '1 hr 15 min' },
    ],
    waxing: [
      { name: 'Brows', price: '$10–15', time: '15 min' },
      { name: 'Lip / Chin', price: '$8–10', time: '15 min' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-pink-200 via-pink-100 to-white py-20 px-6 text-center overflow-hidden">
        <div className="absolute top-10 left-10 text-pink-300 text-8xl opacity-40">✿</div>
        <div className="absolute bottom-10 right-10 text-pink-300 text-8xl opacity-40">❀</div>
        <div className="absolute top-1/2 left-1/4 text-pink-200 text-6xl opacity-30">✿</div>
        <div className="flex justify-center mb-8">
          <img
            src="/mnt/data/IMG_2127.jpeg"
            alt="Blush & Bloom Salon Logo"
            className="w-72 rounded-3xl shadow-2xl"
          />
        </div>
        <div className="max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold tracking-tight mb-4 text-black">
            Blush & Bloom Salon
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
            Luxury nails, lashes, and waxing services designed to help you feel beautiful and confident.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition-all">
              Book Appointment
            </button>

            <button className="border border-black px-8 py-4 rounded-2xl text-lg hover:bg-black hover:text-white transition-all">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="absolute right-10 top-10 text-pink-200 text-7xl opacity-30">✿</div>
        <div className="absolute left-10 bottom-10 text-pink-200 text-7xl opacity-30">❀</div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Blush & Bloom Salon, we specialize in elegant beauty services including nails, lashes, and waxing. Our mission is to create a relaxing luxury experience while helping every client leave feeling confident and refreshed.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Nails */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-semibold mb-6 text-pink-600">Nails</h3>
              <div className="space-y-5">
                {services.nails.map((service) => (
                  <div key={service.name} className="border-b pb-4">
                    <div className="flex justify-between font-medium text-lg">
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                    </div>
                    <p className="text-gray-500">{service.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lashes */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-semibold mb-6 text-pink-600">Lashes</h3>
              <div className="space-y-5">
                {services.lashes.map((service) => (
                  <div key={service.name} className="border-b pb-4">
                    <div className="flex justify-between font-medium text-lg">
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                    </div>
                    <p className="text-gray-500">{service.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Waxing */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-semibold mb-6 text-pink-600">Waxing</h3>
              <div className="space-y-5">
                {services.waxing.map((service) => (
                  <div key={service.name} className="border-b pb-4">
                    <div className="flex justify-between font-medium text-lg">
                      <span>{service.name}</span>
                      <span>{service.price}</span>
                    </div>
                    <p className="text-gray-500">{service.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-black via-pink-950 to-black text-white overflow-hidden">
        <div className="absolute top-0 left-0 text-pink-300 text-9xl opacity-10">✿</div>
        <div className="absolute bottom-0 right-0 text-pink-300 text-9xl opacity-10">❀</div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Book Your Appointment</h2>
          <p className="text-lg text-gray-300 mb-10">
            Request an appointment online and we will personally confirm your booking by text or phone. Payments are made in person at your appointment.
          </p>

          <form
            name="booking"
            method="POST"
            data-netlify="true"
            className="bg-gradient-to-b from-pink-50 to-white text-black rounded-[2rem] p-8 shadow-2xl text-left border-4 border-pink-200"
          >
            <input type="hidden" name="form-name" value="booking" />
            <div className="bg-pink-100 border border-pink-200 rounded-2xl p-4 mb-6 text-sm text-pink-900">
              ✨ Simple booking request form<br />
              ✨ Clients enter their phone number and requested appointment<br />
              ✨ Salon manually confirms bookings by text or phone
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  name="fullName"
                  className="w-full border-2 border-pink-200 bg-pink-50 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Phone Number</label>
                <input
                  name="phone"
                  className="w-full border-2 border-pink-200 bg-pink-50 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Select Service</label>
                <select
                  name="service"
                  className="w-full border-2 border-pink-200 bg-pink-50 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <option>Basic Manicure</option>
                  <option>Gel Manicure</option>
                  <option>Acrylic Set</option>
                  <option>Classic Lash Set</option>
                  <option>Full Lash Set</option>
                  <option>Dramatic Lash Set</option>
                  <option>Brows Wax</option>
                  <option>Lip / Chin Wax</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">Requested Appointment Date</label>
                <input
                  type="date"
                  name="appointmentDate"
                  className="w-full border-2 border-pink-200 bg-pink-50 rounded-2xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>
            </div>

            <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4 mt-6 mb-6 text-sm text-gray-700 shadow-sm">
              ✔ No customer account needed<br />
              ✔ Pay in person at your appointment<br />
              ✔ We personally confirm appointments by text or call
            </div>

            <button
              type="submit"
              className="mt-2 w-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:scale-[1.02] hover:shadow-xl text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="absolute right-10 top-10 text-pink-200 text-7xl opacity-30">✿</div>
        <div className="absolute left-10 bottom-10 text-pink-200 text-7xl opacity-30">❀</div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Beauty Gallery</h2>
          <p className="text-gray-600 mb-10 text-lg">
            Follow us on Instagram @BLOOM_ANDBLUSH26 for new sets, beauty content, and salon updates.
          </p>

          <div className="flex justify-center mb-12">
            <img
              src="/mnt/data/IMG_2142.jpeg"
              alt="Blush & Bloom Salon Instagram QR"
              className="w-72 rounded-3xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-100 h-72 rounded-3xl flex items-center justify-center text-gray-600 text-lg">
              Nail Designs
            </div>

            <div className="bg-pink-200 h-72 rounded-3xl flex items-center justify-center text-gray-700 text-lg">
              Lash Sets
            </div>

            <div className="bg-pink-50 h-72 rounded-3xl flex items-center justify-center text-gray-600 text-lg">
              Salon Space
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-3">Blush & Bloom Salon</h3>
            <p className="text-gray-400 max-w-sm">
              Luxury beauty services for nails, lashes, and waxing with elegant booking and appointment scheduling.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Hours</h4>
            <p className="text-gray-400">Monday: Closed</p>
            <p className="text-gray-400">Tuesday: Closed</p>
            <p className="text-gray-400">Wednesday: 3:45 PM – 6:30 PM</p>
            <p className="text-gray-400">Thursday: Closed</p>
            <p className="text-gray-400">Friday: 2:45 PM – 9:00 PM</p>
            <p className="text-gray-400">Saturday: 11:30 AM – 9:30 PM</p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <p className="text-gray-400">sophiaglaw@icloud.com</p>
            <p className="text-gray-400">(636) 286-8651</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
