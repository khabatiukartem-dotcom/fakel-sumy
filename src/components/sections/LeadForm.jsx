import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    location: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normal submission logic goes here. Just alerting for demo.
    console.log('Form Submitted', formData);
    alert('Дякуємо! Наш тренер зв\'яжеться з вами найближчим часом.');
    setFormData({ name: '', age: '', phone: '', location: '' });
  };

  return (
    <section id="contact" className="relative py-24 bg-[var(--accent-fire)] overflow-hidden text-[#1a1a1a]">
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d15600] to-transparent z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-wide mb-6 text-black drop-shadow-sm flex flex-col gap-2">
              <span>ЗАПИШІТЬСЯ НА</span>
              <span className="text-white drop-shadow-md">БЕЗКОШТОВНЕ</span>
              <span>ПРОБНЕ ЗАНЯТТЯ</span>
            </h2>
            <p className="font-montserrat text-lg md:text-xl font-bold bg-[#1a1a1a] text-white self-start inline-block px-4 py-2 mt-2 rounded-tl-xl rounded-br-xl">
              Залиште контакт — наш тренер зв'яжеться з вами протягом дня.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1a1a] p-8 md:p-10 rounded-sm shadow-2xl relative"
          >
            {/* Visual accent square */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-white opacity-20"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              
              <div className="flex flex-col gap-2">
                <label className="text-[var(--text-muted)] text-sm font-montserrat uppercase tracking-wider">Ім'я</label>
                <input 
                  type="text"
                  required
                  placeholder="Ваше ім'я або ім'я дитини"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-3 focus:outline-none focus:border-[var(--accent-fire)] transition-colors rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[var(--text-muted)] text-sm font-montserrat uppercase tracking-wider">Вік</label>
                <input 
                  type="text"
                  required
                  placeholder="Вік дитини або ваш вік (від 5 років)"
                  value={formData.age}
                  onChange={e => setFormData({...formData, age: e.target.value})}
                  className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-3 focus:outline-none focus:border-[var(--accent-fire)] transition-colors rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[var(--text-muted)] text-sm font-montserrat uppercase tracking-wider">Телефон</label>
                <input 
                  type="tel"
                  required
                  placeholder="+38 (0__) ___-__-__"
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-3 focus:outline-none focus:border-[var(--accent-fire)] transition-colors rounded-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[var(--text-muted)] text-sm font-montserrat uppercase tracking-wider">Виберіть зал</label>
                <select 
                  required
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  className="bg-[#2a2a2a] border border-[#3a3a3a] text-white px-4 py-3 focus:outline-none focus:border-[var(--accent-fire)] transition-colors rounded-sm appearance-none"
                >
                  <option value="" disabled>--- Оберіть зручний зал ---</option>
                  <option value="lublinska">вул. Люблінська, 10</option>
                  <option value="petropavlivska">вул. Петропавлівська, 59</option>
                </select>
              </div>

              <button 
                type="submit"
                className="mt-4 bg-[var(--accent-gold)] hover:bg-[#b0923f] text-black font-bebas text-2xl tracking-widest uppercase py-4 rounded-sm transition-colors duration-300 shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:shadow-[0_0_25px_rgba(201,168,76,0.5)]"
              >
                Надіслати заявку
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LeadForm;
