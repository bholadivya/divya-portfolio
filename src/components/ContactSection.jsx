/*
ContactSection Component

Purpose:

Displays contact details (email, phone, location)
Provides a contact form for users
Sends email using EmailJS
Shows feedback using toast notifications

Interview angle:
Demonstrates form handling, async operations, state management, and UX feedback
*/
import { Mail, Phone, Map, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const ContactSection = () => {
  // useToast → used to trigger notifications // Toast hook for success/error notifications
  const { toast } = useToast();

  // State to handle loading state of form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  /*
  Handles form submission:
  - Prevents default reload
  - Sends form data using EmailJS
  - Shows success/error feedback
  - Resets form after success
  */
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start loading

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE, // EmailJS service ID
        import.meta.env.VITE_EMAIL_TEMPLATE, // EmailJS template ID
        e.target, // Form reference
        import.meta.env.VITE_EMAIL_PUBLIC, // Public key
      )
      .then(
        () => {
          // Success toast
          toast({
            title: "Message sent!",
            description: "I'll get back to you soon.",
          });
          e.target.reset(); // Clear form fields
          setIsSubmitting(false); // Stop loading
        },
        (error) => {
          console.error(error); // Debugging (important for production)
          // Error toast
          toast({
            title: "Error",
            description: "Failed to send message",
          });

          setIsSubmitting(false); // Stop loading
        },
      );
  };
  return (
    /*
    Section container
    - id="contact" used for navigation scroll
    */
    <section id="contact" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        {/* Section description */}
        <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>
        {/* Layout: Left (info) + Right (form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE → Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 ">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium"> Email </h4>
                  <a
                    href="mailto:divya.bhola.ug22@nsut.ac.in"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    divya.bhola.ug22@nsut.ac.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium"> Phone </h4>
                  <a
                    href="tel:+918595126645"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    (+91) 8595126645
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10">
                  <Map className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-sm font-medium"> Location </h4>
                  <a className="text-foreground/80 hover:text-primary transition-colors">
                    South delhi, New Delhi-110062
                  </a>
                </div>
              </div>
            </div>

            {/* Social links (optional) */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>
              <div className="flex justify-center items-center gap-5">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bholadivya26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition"
                >
                  <FaLinkedin className="text-primary text-xl" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/bholadivya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition"
                >
                  <FaGithub className="text-primary text-xl" />
                </a>

                {/* Instagram (optional) */}
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition"
                >
                  <FaInstagram className="text-primary text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE → Contact Form */}
          <div
            className="bg-card 
  p-8 rounded-lg 
  shadow-md 
  border border-border"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form onSubmit={sendEmail} className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your name..."
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="...your email"
                />
              </div>

              {/* Message input (must match EmailJS template key) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
