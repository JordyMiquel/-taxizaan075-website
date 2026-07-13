"use client";

import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    naam: "",
    telefoon: "",
    email: "",
    ophalen: "",
    bestemming: "",
    datum: "",
    tijd: "",
    personen: "",
    opmerkingen: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const whatsappMessage = encodeURIComponent(`
🚖 Nieuwe reservering TaxiZaan075

Naam: ${form.naam}
Telefoon: ${form.telefoon}
E-mail: ${form.email}

Ophaaladres: ${form.ophalen}
Bestemming: ${form.bestemming}

Datum: ${form.datum}
Tijd: ${form.tijd}

Aantal personen: ${form.personen}

Opmerkingen:
${form.opmerkingen}
`);

  const emailSubject = encodeURIComponent("Nieuwe reservering TaxiZaan075");

  const emailBody = encodeURIComponent(`
Naam: ${form.naam}

Telefoon: ${form.telefoon}

E-mail: ${form.email}

Ophaaladres: ${form.ophalen}

Bestemming: ${form.bestemming}

Datum: ${form.datum}

Tijd: ${form.tijd}

Aantal personen: ${form.personen}

Opmerkingen:
${form.opmerkingen}
`);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-green-500 text-center mb-10">
          Boek uw Taxi
        </h2>

        <div className="space-y-4">

          <input
            name="naam"
            placeholder="Naam"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            name="telefoon"
            placeholder="Telefoonnummer"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            name="email"
            placeholder="E-mailadres"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            name="ophalen"
            placeholder="Ophaaladres"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            name="bestemming"
            placeholder="Bestemming"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            type="date"
            name="datum"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            type="time"
            name="tijd"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <input
            name="personen"
            placeholder="Aantal personen"
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <textarea
            name="opmerkingen"
            placeholder="Extra opmerkingen"
            rows={4}
            onChange={handleChange}
            className="w-full p-4 rounded bg-zinc-900"
          />

          <div className="flex gap-4 flex-wrap">

            <a
              href={`https://wa.me/31612349144?text=${whatsappMessage}`}
              target="_blank"
              className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl font-bold"
            >
              📱 Boek via WhatsApp
            </a>

            <a
              href={`mailto:jmbenjamins@outlook.com?subject=${emailSubject}&body=${emailBody}`}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold"
            >
              📧 Boek via E-mail
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}