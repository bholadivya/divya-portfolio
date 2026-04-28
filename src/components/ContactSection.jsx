/*
  ContactSection Component

  Purpose:
  - Displays contact info (email, phone, location)
  - Provides a contact form
  - Shows toast notification on form submission

  Interview:
  Demonstrates form handling + state + user feedback (toast)
*/
import { Mail, Phone, Map, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  // useToast → used to trigger notifications
  const { toast } = useToast();

  // State to track form submission (loading state)
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setIsSubmitting(true); // show loading state

    /*
      Simulating API call using setTimeout
      (In real app → this would be backend request)
    */
    setTimeout(() => {
      // Trigger toast notification
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      e.target.reset(); // clear form inputs
      setIsSubmitting(false); //// stop loading
    }, 1500);
  };
  return (
    /*
      Section container
      id used for navbar navigation (#contact)
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
          I'm always open to discussing new oppurtunities.
        </p>
        {/* Grid Layout (Info + Form) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT SIDE → Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Email </h4>
                  <a
                    href="mailto:divya.bhola.ug22@nsut.ac.in"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    divya.bhola.ug22@nsut.ac.in
                  </a>
                </div>
              </div>
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    href="tel:+918595126645"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    (+91) 8595126645
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium"> Location </h4>
                  <a className="text-foreground/80 hover:text-primary transition-colors">
                    South delhi, New Delhi-110062
                  </a>
                </div>
              </div>
            </div>
            {/* Social links (optional) */}
            <div className="pt-8">
              <h4 className="font-medium mb-4 text-center">Connect With Me</h4>

              <div className="flex justify-center gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/bholadivya26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current text-primary"
                  >
                    <path
                      d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 
        5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.3c-1 
        0-1.8-.8-1.8-1.7s.8-1.7 1.8-1.7 1.8.8 
        1.8 1.7-.8 1.7-1.8 1.7zm13.5 
        10.3h-3v-4.5c0-1.1-.4-1.8-1.3-1.8-.7 
        0-1.1.5-1.3 1-.1.2-.1.5-.1.8v4.5h-3v-9h3v1.2c.4-.6 
        1.1-1.4 2.7-1.4 2 0 3.5 1.3 
        3.5 4.1v5.1z"
                    />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/bholadivya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current text-primary"
                  >
                    <path
                      d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 
        9.38 7.86 10.91.57.1.78-.25.78-.55 
        0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 
        1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 
        3.32.96.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.27-5.23-5.66 
        0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 
        0 0 .96-.31 3.15 1.17.91-.25 1.88-.38 
        2.85-.38.97 0 1.94.13 2.85.38 
        2.19-1.48 3.15-1.17 3.15-1.17.62 
        1.57.23 2.73.11 3.02.73.8 1.18 1.82 
        1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.77 
        1.08.77 2.18 0 1.58-.01 2.86-.01 3.25 
        0 .3.21.66.79.55C20.21 21.38 23.5 17.08 
        23.5 12 23.5 5.65 18.35.5 12 .5z"
                    />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:divya.bhola.ug22@nsut.ac.in"
                  target="_blank"
                  className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 hover:scale-110 transition-all"
                >
                  <Mail className="h-5 w-5 text-primary" />
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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="...your email"
                />
              </div>
              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
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
                {isSubmitting ? "Sending..." : "Send Message"}{" "}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
