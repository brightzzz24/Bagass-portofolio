import {
  Instagram,
  Facebook,
  Youtube,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../Hooks/use-toast"; // Kita akan gunakan ini untuk notifikasi
import { useState, useRef } from "react"; // Impor useRef
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(); // 1. Buat ref untuk form

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = "service_5g2s0xk";
    const templateId = "template_jnys058";
    const publicKey = "kx4ajO7TSWoV30yHf";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey) // 2. Gunakan ref di sini
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast({
            title: "Pesan Terkirim!",
            description: "Terima kasih atas pesannya. Saya akan segera membalas.",
          });
          formRef.current.reset(); // 3. Reset form melalui ref
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast({
            title: "Gagal Mengirim Pesan",
            description: "Terjadi kesalahan. Silakan coba lagi nanti.",
            variant: "destructive",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Contact <span className="text-primary"> Me</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Saya antusias untuk mendengar tentang proyek Anda dan bagaimana saya
          dapat membantu mewujudkan visi Anda. Silakan tinggalkan pesan, dan
          saya akan menghubungi Anda kembali untuk menjadwalkan diskusi lebih
          lanjut.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ... Kolom Informasi Kontak (tidak ada perubahan) ... */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a href="mailto:bagasggg6@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    bagasggg6@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a href="tel:+6282164532282" className="text-muted-foreground hover:text-primary transition-colors">
                    (+62) 821-6453-2282
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Medan, Indonesia
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank"><Youtube /></a>
                <a href="#" target="_blank"><Twitter /></a>
                <a href="https://www.instagram.com/bagasxz.24" target="_blank"><Instagram /></a>
                <a href="https://www.facebook.com/bagas.septior" target="_blank"><Facebook /></a>
              </div>
            </div>
          </div>
          
          {/* 4. Hapus onSubmit dari div ini */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
            {/* 5. Tambahkan onSubmit dan ref ke form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Nama Kamu"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="yaya877@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tinggalkan pesan untukku!!!"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};