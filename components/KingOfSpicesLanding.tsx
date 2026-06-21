"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  CookingPot,
  HandPlatter,
  HeartHandshake,
  IndianRupee,
  Leaf,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Timer,
  Utensils,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";

const phoneNumber = "+918759900007";
const displayPhone = "+91 87599 00007";
const address =
  "Backside Vishal Mega Mart, near Main Bus Stand, GTB Market, Khanna, Punjab 141401";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reserve", href: "#reserve" },
  { label: "Contact", href: "#contact" },
];

const cuisines = [
  "North Indian",
  "Mughlai",
  "Chinese",
  "Biryani",
  "Pasta",
  "Rolls",
  "Beverages",
];

const particles = [
  { left: "8%", top: "26%", size: "h-1 w-1", delay: 0, duration: 4.2 },
  { left: "18%", top: "72%", size: "h-1.5 w-1.5", delay: 0.4, duration: 5.1 },
  { left: "34%", top: "18%", size: "h-1 w-1", delay: 0.7, duration: 4.8 },
  { left: "52%", top: "32%", size: "h-1.5 w-1.5", delay: 0.2, duration: 6.2 },
  { left: "71%", top: "20%", size: "h-1 w-1", delay: 0.9, duration: 5.4 },
  { left: "84%", top: "62%", size: "h-1.5 w-1.5", delay: 0.5, duration: 4.5 },
  { left: "92%", top: "38%", size: "h-1 w-1", delay: 1.1, duration: 5.8 },
  { left: "45%", top: "80%", size: "h-2 w-2", delay: 0.3, duration: 6.5 },
  { left: "60%", top: "10%", size: "h-1 w-1", delay: 0.8, duration: 4.0 },
  { left: "25%", top: "45%", size: "h-1 w-1", delay: 0.6, duration: 5.2 },
];

const dishes = [
  {
    name: "Butter Chicken",
    description:
      "Silky tomato gravy, slow-cooked spices and tender chicken finished with cream.",
    price: "from ₹330",
    tag: "North Indian",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Paneer Lababdar",
    description:
      "A rich paneer favourite with aromatic masala, butter and a mellow finish.",
    price: "from ₹280",
    tag: "Vegetarian",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Afghani Chicken",
    description:
      "Creamy tandoori-style chicken with soft spice, char and a royal texture.",
    price: "₹330",
    tag: "Tandoori",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "White Sauce Pasta",
    description:
      "Comforting cafe classic with a creamy sauce and a smooth continental note.",
    price: "₹190",
    tag: "Cafe",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Veg Biryani",
    description:
      "Fragrant rice, vegetables and warm spices layered for a hearty table favourite.",
    price: "₹260",
    tag: "Biryani",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=82",
  },
  {
    name: "Lassi Sweet",
    description:
      "A chilled Punjabi classic that pairs beautifully with rich gravies and tandoor plates.",
    price: "₹90",
    tag: "Beverage",
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=82",
  },
];

const menuHighlights = [
  "Soups",
  "Tandoori Snacks",
  "King Of Spices Specials",
  "Main Course",
  "Chinese Appetizers",
  "Breads",
  "Rice",
  "Biryani",
  "Raita, Papad & Salad",
  "Burgers",
  "Sandwiches",
  "Rolls",
  "Momos",
  "Pasta",
  "Dessert",
  "Drinks",
];

const features: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Fresh Ingredients",
    description: "Prepared with carefully selected produce, dairy and spices.",
    icon: Leaf,
  },
  {
    title: "Hygienic Kitchen",
    description: "Clean workflows and disciplined kitchen standards.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Service",
    description: "Thoughtful prep and quick table service for busy days.",
    icon: Timer,
  },
  {
    title: "Comfortable Ambience",
    description: "Warm lighting, calm seating and a refined cafe mood.",
    icon: Coffee,
  },
  {
    title: "Family Friendly",
    description: "A welcoming space for dinners, meetups and celebrations.",
    icon: Users,
  },
  {
    title: "Affordable Pricing",
    description: "Good value across cafe bites, full meals and group orders.",
    icon: IndianRupee,
  },
];

const gallery = [
  {
    label: "North Indian mains",
    height: "h-72 sm:h-80",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=82",
  },
  {
    label: "Warm dining ambience",
    height: "h-96",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=82",
  },
  {
    label: "Tandoori plates",
    height: "h-80 sm:h-96",
    image:
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=82",
  },
  {
    label: "Biryani favourites",
    height: "h-72",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=82",
  },
  {
    label: "Cafe pasta",
    height: "h-96",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=82",
  },
  {
    label: "Fresh beverages",
    height: "h-72 sm:h-80",
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=82",
  },
];

const testimonials = [
  {
    name: "Abhiraj Abhijit",
    role: "Dining guest",
    initials: "AA",
    rating: 5,
    review:
      "Delicious food and a satisfying dining experience. The flavours feel rich, fresh and made for a family table.",
  },
  {
    name: "Vikas",
    role: "Regular customer",
    initials: "VK",
    rating: 5,
    review:
      "Nice experience with good food and warm service. The menu has enough variety for both quick bites and full meals.",
  },
  {
    name: "Chirag",
    role: "Local food lover",
    initials: "CG",
    rating: 5,
    review:
      "Awesome service and a comfortable place to visit with friends. The tandoori and cafe items make it easy to order for everyone.",
  },
];

const revealViewport = { once: true, margin: "-90px" };

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 36, scale: shouldReduceMotion ? 1 : 0.96, filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={revealViewport}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase text-[#D4AF37]">
        <Sparkles className="h-3.5 w-3.5" />
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[1.08] text-current sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <p
        className={`mt-5 text-base leading-8 ${
          align === "center" ? "mx-auto" : ""
        } max-w-2xl text-current/68 sm:text-lg`}
      >
        {description}
      </p>
    </Reveal>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-2 text-sm font-medium text-[#FCA5A5]" role="alert">
      {message}
    </p>
  );
}

export default function KingOfSpicesLanding() {
  const shouldReduceMotion = useReducedMotion();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitState, setSubmitState] = useState<
    "idle" | "submitting" | "success"
  >("idle");

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 90]);
  const heroScale = useTransform(scrollYProgress, [0, 0.25], [1.05, 1]);

  const today = useMemo(() => {
    const date = new Date();
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date.toISOString().slice(0, 10);
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const activeReview = testimonials[testimonialIndex];

  function handleFieldChange(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    if (submitState === "success") {
      setSubmitState("idle");
    }
  }

  function validateForm() {
    const nextErrors: Record<string, string> = {};
    const phoneDigits = formValues.phone.replace(/\D/g, "");
    const normalizedPhone =
      phoneDigits.length === 12 && phoneDigits.startsWith("91")
        ? phoneDigits.slice(2)
        : phoneDigits;

    if (formValues.name.trim().length < 2) {
      nextErrors.name = "Enter the guest name.";
    }

    if (!/^[6-9]\d{9}$/.test(normalizedPhone)) {
      nextErrors.phone = "Enter a valid 10 digit Indian mobile number.";
    }

    const guestCount = Number(formValues.guests);
    if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 40) {
      nextErrors.guests = "Choose between 1 and 40 guests.";
    }

    if (!formValues.date) {
      nextErrors.date = "Select a reservation date.";
    } else if (formValues.date < today) {
      nextErrors.date = "Choose today or a future date.";
    }

    if (!formValues.time) {
      nextErrors.time = "Select a preferred time.";
    }

    return nextErrors;
  }

  function handleReservationSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("submitting");
    window.setTimeout(() => {
      setSubmitState("success");
    }, 800);
  }

  function goToReview(direction: "previous" | "next") {
    setTestimonialIndex((current) => {
      if (direction === "previous") {
        return current === 0 ? testimonials.length - 1 : current - 1;
      }

      return (current + 1) % testimonials.length;
    });
  }

  return (
    <main className="overflow-hidden bg-[#111111] text-[#FAFAFA]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111111]/70 backdrop-blur-2xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a
            href="#home"
            className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            aria-label="King Of Spices home"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/12 shadow-[0_0_42px_rgba(212,175,55,0.18)]">
              <ChefHat className="h-5 w-5 text-[#D4AF37]" />
            </span>
            <span>
              <span className="block font-display text-xl font-semibold leading-none">
                King Of Spices
              </span>
              <span className="mt-1 block text-[11px] font-semibold uppercase text-[#FAFAFA]/55">
                Khanna Restaurant & Cafe
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#FAFAFA]/72 transition hover:bg-white/8 hover:text-[#FAFAFA] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 text-sm font-semibold text-[#FAFAFA] transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
            >
              <Phone className="h-4 w-4 text-[#D4AF37]" />
              {displayPhone}
            </a>
            <a
              href="#reserve"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-[#D4AF37] px-5 text-sm font-bold text-[#111111] shadow-[0_18px_50px_rgba(212,175,55,0.24)] transition hover:bg-[#E8C960] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
            >
              Reserve
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/8 text-[#FAFAFA] transition hover:bg-white/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] lg:hidden"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              className="border-t border-white/10 bg-[#111111]/95 px-5 pb-5 shadow-2xl backdrop-blur-2xl lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
            >
              <div className="mx-auto grid max-w-7xl gap-2 pt-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#FAFAFA]/80 transition hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={`tel:${phoneNumber}`}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-4 py-3 text-sm font-bold text-[#111111]"
                >
                  <Phone className="h-4 w-4" />
                  Call {displayPhone}
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>

      <section
        id="home"
        className="luxury-noise relative flex min-h-screen items-end overflow-hidden bg-[#111111] px-5 pb-12 pt-28 sm:px-8 sm:pb-16 lg:px-10"
      >
        <motion.div
          className="absolute inset-0"
          style={{
            y: shouldReduceMotion ? 0 : heroY,
            scale: shouldReduceMotion ? 1 : heroScale,
            willChange: "transform",
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2400&q=82"
            alt="Elegant restaurant table with warm lighting"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,17,17,0.94),rgba(17,17,17,0.72)_42%,rgba(17,17,17,0.42)),linear-gradient(180deg,rgba(17,17,17,0.36),rgba(17,17,17,0.92))]" />

        <div className="pointer-events-none absolute inset-0">
          {particles.map((particle) => (
            <motion.span
              key={`${particle.left}-${particle.top}`}
              className={`absolute rounded-full bg-[#D4AF37]/70 ${particle.size}`}
              style={{ left: particle.left, top: particle.top }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      opacity: [0.18, 0.75, 0.18],
                      y: [0, -18, 0],
                    }
              }
              transition={{
                duration: particle.duration || 5.4,
                delay: particle.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-end gap-12 lg:grid-cols-[1fr_390px]">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.85 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 bg-[#111111]/50 px-4 py-2 text-xs font-bold uppercase text-[#D4AF37] backdrop-blur-xl">
              <CookingPot className="h-4 w-4" />
              Best Restaurant & Cafe in Khanna
            </p>
            <h1 className="font-display max-w-5xl text-4xl font-semibold leading-[1.05] text-[#FAFAFA] sm:text-5xl md:text-7xl xl:text-8xl">
              Experience Authentic Flavours At King Of Spices
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FAFAFA]/76 sm:text-xl">
              Where great food, warm ambience and unforgettable moments come
              together.
            </p>

            <div className="mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <motion.a
                href="#menu"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-7 text-base font-bold text-[#111111] shadow-[0_26px_70px_rgba(212,175,55,0.26)] transition hover:bg-[#E8C960] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA] sm:w-auto"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Explore Menu
                <ArrowRight className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="#reserve"
                className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 text-base font-bold text-[#FAFAFA] backdrop-blur-xl transition hover:border-[#D4AF37]/55 hover:bg-[#D4AF37]/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] sm:w-auto"
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Reserve Table
                <CalendarDays className="h-5 w-5 text-[#D4AF37]" />
              </motion.a>
            </div>

            <div className="mt-10 flex w-full gap-3 overflow-x-auto hide-scrollbar whitespace-nowrap pb-2 sm:flex-wrap sm:justify-center lg:justify-start">
              {cuisines.map((cuisine) => (
                <span
                  key={cuisine}
                  className="shrink-0 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-[#FAFAFA]/72 backdrop-blur-xl"
                >
                  {cuisine}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.aside
            className="lg:pb-8"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.85,
              delay: shouldReduceMotion ? 0 : 0.18,
            }}
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D4AF37]/25 bg-[#2B1D14]/80 p-6 shadow-[0_35px_100px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
              <div className="relative">
                <p className="text-sm font-semibold uppercase text-[#D4AF37]">
                  Tonight&apos;s mood
                </p>
                <h2 className="font-display mt-3 text-3xl font-semibold leading-tight">
                  Spice, smoke and table-side warmth.
                </h2>
                <div className="gold-divider my-6" />
                <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                  {[
                    ["4.2", "Delivery"],
                    ["11 PM", "Open till"],
                    ["238", "Menu items"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/8 p-3"
                    >
                      <p className="font-display text-2xl font-semibold text-[#D4AF37]">
                        {value}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase text-[#FAFAFA]/55">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="about" className="bg-[#F5F1EB] px-5 py-16 text-[#111111] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal className="relative">
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div className="space-y-4 pt-0 sm:space-y-5 sm:pt-12">
                <div className="relative h-72 overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=900&q=82"
                    alt="Warm restaurant seating"
                    fill
                    sizes="(max-width: 1024px) 45vw, 320px"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[1.5rem] border border-[#2B1D14]/10 bg-white/70 p-5 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-6 w-6 text-[#D4AF37]" />
                    <p className="text-sm font-bold uppercase text-[#2B1D14]/65">
                      Trusted local favourite
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 sm:space-y-5">
                <div className="rounded-[1.5rem] border border-[#2B1D14]/10 bg-[#111111] p-5 text-[#FAFAFA] shadow-2xl">
                  <p className="font-display text-5xl font-semibold text-[#D4AF37]">
                    11
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase text-[#FAFAFA]/60">
                    AM to 11 PM
                  </p>
                </div>
                <div className="relative h-96 overflow-hidden rounded-[2rem] shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=82"
                    alt="Crisp Indian snacks served hot"
                    fill
                    sizes="(max-width: 1024px) 45vw, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Our story"
              title="A Khanna dining room built for real moments."
              description="King Of Spices is a modern cafe and restaurant in Khanna that combines authentic taste with a contemporary dining experience. Whether it's family dinners, coffee meetups or celebrations, we create memorable experiences for everyone."
            />

            <Reveal delay={0.12} className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Utensils,
                  label: "Full meals",
                  text: "North Indian, Mughlai and biryani favourites.",
                },
                {
                  icon: Coffee,
                  label: "Cafe bites",
                  text: "Pasta, sandwiches, rolls and cold beverages.",
                },
                {
                  icon: HeartHandshake,
                  label: "Occasions",
                  text: "Family dinners, meetups and small celebrations.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[#2B1D14]/10 bg-white/70 p-5 shadow-[0_24px_70px_rgba(17,17,17,0.08)]"
                  >
                    <Icon className="h-6 w-6 text-[#D4AF37]" />
                    <h3 className="mt-4 font-display text-xl font-semibold">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#111111]/62">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#111111] px-5 py-16 text-[#FAFAFA] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <SectionHeading
              eyebrow="Signature dishes"
              title="A menu that moves from tandoor to cafe table."
              description="Built around the restaurant's public menu categories: North Indian, Mughlai, Chinese appetizers, tandoori snacks, pasta, biryani, rolls, sandwiches and beverages."
            />
            <Reveal delay={0.1} className="rounded-[2rem] border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <HandPlatter className="h-6 w-6 text-[#D4AF37]" />
                <p className="text-sm font-bold uppercase text-[#FAFAFA]/62">
                  Menu range
                </p>
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto hide-scrollbar whitespace-nowrap pb-2 sm:max-h-32 sm:flex-wrap sm:overflow-hidden sm:whitespace-normal sm:pb-0">
                {menuHighlights.map((item) => (
                  <span
                    key={item}
                    className="shrink-0 rounded-full border border-white/10 bg-[#2B1D14]/70 px-3 py-1.5 text-xs font-semibold text-[#FAFAFA]/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {dishes.map((dish, index) => (
              <Reveal key={dish.name} delay={index * 0.04}>
                <motion.article
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl"
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -8, scale: 1.01 }
                  }
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                >
                  <div className="relative aspect-[1.2] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/86 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full border border-[#D4AF37]/35 bg-[#111111]/62 px-3 py-1.5 text-xs font-bold uppercase text-[#D4AF37] backdrop-blur-xl">
                      {dish.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold">
                        {dish.name}
                      </h3>
                      <p className="rounded-full bg-[#D4AF37] px-3 py-1.5 text-sm font-extrabold text-[#111111]">
                        {dish.price}
                      </p>
                    </div>
                    <p className="mt-4 min-h-16 text-sm leading-7 text-[#FAFAFA]/62">
                      {dish.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2B1D14] px-5 py-16 text-[#FAFAFA] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why choose us"
            title="Everything guests expect, delivered with polish."
            description="A restaurant site should sell trust in seconds. These service pillars make King Of Spices feel reliable, welcoming and ready for both dine-in and takeaway moments."
            align="center"
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 0.04}>
                  <motion.article
                    className="group h-full rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_26px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }
                    }
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  >
                  <div className="grid h-[52px] w-[52px] place-items-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/12 text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-[#111111]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display mt-6 text-2xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#FAFAFA]/62">
                      {feature.description}
                    </p>
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#F5F1EB] px-5 py-16 text-[#111111] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Gallery"
            title="A visual appetite before the first bite."
            description="Warm interiors, tandoori char, creamy mains, cafe staples and Punjabi comfort. The grid is designed to feel editorial rather than stock-template."
            align="center"
          />

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.map((item, index) => (
              <Reveal
                key={item.label}
                delay={index * 0.04}
                className="mb-5 break-inside-avoid"
              >
                <motion.figure
                  className={`group relative ${item.height} overflow-hidden rounded-[2rem] shadow-[0_28px_80px_rgba(17,17,17,0.16)]`}
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/78 via-[#111111]/8 to-transparent opacity-80 transition group-hover:opacity-95" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-2xl font-semibold text-[#FAFAFA]">
                      {item.label}
                    </p>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#111111] px-5 py-16 text-[#FAFAFA] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Customer testimonials"
              title="Reviews that feel local, direct and believable."
              description="The carousel is built for quick social proof with avatars, ratings and concise dining feedback."
            />
            <Reveal delay={0.1} className="mt-8 flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() => goToReview("previous")}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/14 bg-white/8 transition hover:border-[#D4AF37]/55 hover:bg-[#D4AF37]/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => goToReview("next")}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/14 bg-white/8 transition hover:border-[#D4AF37]/55 hover:bg-[#D4AF37]/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </Reveal>
          </div>

          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/7 p-6 shadow-[0_35px_110px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8">
              <AnimatePresence mode="wait">
                <motion.article
                  key={activeReview.name}
                  className="relative"
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -28 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.34 }}
                >
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="grid h-16 w-16 place-items-center rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/16 font-display text-xl font-semibold text-[#D4AF37]">
                        {activeReview.initials}
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-semibold">
                          {activeReview.name}
                        </h3>
                        <p className="mt-1 text-sm font-semibold uppercase text-[#FAFAFA]/48">
                          {activeReview.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-1 text-[#D4AF37]" aria-label="5 star rating">
                      {Array.from({ length: activeReview.rating }).map((_, index) => (
                        <Star key={index} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="mt-8 font-display text-3xl leading-[1.25] text-[#FAFAFA] sm:text-4xl">
                    &ldquo;{activeReview.review}&rdquo;
                  </p>
                </motion.article>
              </AnimatePresence>

              <div className="mt-9 flex gap-2">
                {testimonials.map((review, index) => (
                  <button
                    key={review.name}
                    type="button"
                    aria-label={`Show review from ${review.name}`}
                    onClick={() => setTestimonialIndex(index)}
                    className={`h-2.5 rounded-full transition ${
                      testimonialIndex === index
                        ? "w-10 bg-[#D4AF37]"
                        : "w-2.5 bg-white/22 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="reserve" className="bg-[#F5F1EB] px-5 py-16 text-[#111111] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Reserve a table"
              title="Make the booking feel effortless before they arrive."
              description="A clean booking form with validation, mobile-friendly keyboards and clear submit feedback."
            />
            <Reveal delay={0.1} className="mt-8 rounded-[2rem] bg-[#111111] p-6 text-[#FAFAFA] shadow-[0_28px_90px_rgba(17,17,17,0.18)]">
              <div className="flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-full bg-[#D4AF37]/15 text-[#D4AF37]">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display text-2xl font-semibold">
                    Open daily
                  </p>
                  <p className="mt-1 text-sm font-semibold uppercase text-[#FAFAFA]/55">
                    11 AM - 11 PM
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <form
              onSubmit={handleReservationSubmit}
              noValidate
              className="rounded-[2rem] border border-[#2B1D14]/10 bg-white p-5 shadow-[0_35px_100px_rgba(17,17,17,0.14)] sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-[#111111]/72">
                    Name
                  </span>
                  <input
                    name="name"
                    value={formValues.name}
                    onChange={handleFieldChange}
                    placeholder="Guest name"
                    autoComplete="name"
                    className="mt-2 h-[52px] w-full rounded-2xl border border-[#111111]/12 bg-[#F5F1EB] px-4 text-base font-medium outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/16"
                  />
                  <FieldError message={errors.name} />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#111111]/72">
                    Phone Number
                  </span>
                  <input
                    name="phone"
                    value={formValues.phone}
                    onChange={handleFieldChange}
                    placeholder="+91 87599 00007"
                    autoComplete="tel"
                    inputMode="tel"
                    className="mt-2 h-[52px] w-full rounded-2xl border border-[#111111]/12 bg-[#F5F1EB] px-4 text-base font-medium outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/16"
                  />
                  <FieldError message={errors.phone} />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#111111]/72">
                    Guests
                  </span>
                  <input
                    name="guests"
                    value={formValues.guests}
                    onChange={handleFieldChange}
                    type="number"
                    min="1"
                    max="40"
                    inputMode="numeric"
                    className="mt-2 h-[52px] w-full rounded-2xl border border-[#111111]/12 bg-[#F5F1EB] px-4 text-base font-medium outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/16"
                  />
                  <FieldError message={errors.guests} />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-[#111111]/72">
                    Date
                  </span>
                  <input
                    name="date"
                    value={formValues.date}
                    onChange={handleFieldChange}
                    type="date"
                    min={today}
                    className="mt-2 h-[52px] w-full rounded-2xl border border-[#111111]/12 bg-[#F5F1EB] px-4 text-base font-medium outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/16"
                  />
                  <FieldError message={errors.date} />
                </label>

                <label className="block sm:col-span-2">
                  <span className="text-sm font-bold text-[#111111]/72">
                    Time
                  </span>
                  <select
                    name="time"
                    value={formValues.time}
                    onChange={handleFieldChange}
                    className="mt-2 h-[52px] w-full rounded-2xl border border-[#111111]/12 bg-[#F5F1EB] px-4 text-base font-medium outline-none transition focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/16"
                  >
                    <option value="">Select preferred time</option>
                    {[
                      "11:00 AM",
                      "12:30 PM",
                      "2:00 PM",
                      "5:00 PM",
                      "7:00 PM",
                      "8:30 PM",
                      "10:00 PM",
                    ].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  <FieldError message={errors.time} />
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={submitState === "submitting"}
                className="mt-7 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#111111] px-6 text-base font-bold text-[#FAFAFA] shadow-[0_22px_60px_rgba(17,17,17,0.18)] transition hover:bg-[#2B1D14] disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.985 }}
              >
                {submitState === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#D4AF37] border-t-transparent" />
                    Checking availability
                  </>
                ) : (
                  <>
                    Send Reservation Request
                    <ArrowRight className="h-5 w-5 text-[#D4AF37]" />
                  </>
                )}
              </motion.button>

              <AnimatePresence>
                {submitState === "success" ? (
                  <motion.div
                    className="mt-5 rounded-2xl border border-emerald-500/20 bg-emerald-50 px-4 py-3 text-sm font-semibold leading-6 text-emerald-800"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    Reservation request prepared. Please call {displayPhone} to
                    confirm the table instantly.
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="bg-[#111111] px-5 py-16 text-[#FAFAFA] sm:px-8 md:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Location & contact"
            title="Find King Of Spices near Khanna's main bus stand."
            description="The contact block is built for immediate action: call, directions, hours and a premium map placeholder."
            align="center"
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <Reveal>
              <div className="map-grid relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#2B1D14] p-6 shadow-[0_35px_110px_rgba(0,0,0,0.26)] md:min-h-[460px]">
                <div className="absolute left-[48%] top-[48%] -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="grid h-20 w-20 place-items-center rounded-full bg-[#D4AF37] text-[#111111] shadow-[0_0_0_18px_rgba(212,175,55,0.12),0_0_90px_rgba(212,175,55,0.35)]"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { scale: [1, 1.06, 1] }
                    }
                    transition={{ duration: 2.4, repeat: Infinity }}
                  >
                    <MapPin className="h-9 w-9" />
                  </motion.div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-[#111111]/72 p-5 backdrop-blur-2xl">
                  <p className="font-display text-2xl font-semibold">
                    Google Maps placeholder
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#FAFAFA]/62">
                    {address}
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=King%20Of%20Spices%20GTB%20Market%20Khanna%20Punjab"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#111111] transition hover:bg-[#E8C960] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FAFAFA]"
                  >
                    Open directions
                    <Navigation className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5">
              {[
                {
                  icon: MapPin,
                  title: "King Of Spices - Best Restaurant & Cafe in Khanna",
                  text: address,
                },
                {
                  icon: Phone,
                  title: "Phone",
                  text: displayPhone,
                  href: `tel:${phoneNumber}`,
                },
                {
                  icon: Clock,
                  title: "Hours",
                  text: "11 AM - 11 PM",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp / Calls",
                  text: "Tap to start a quick enquiry or reservation call.",
                  href: `https://wa.me/${phoneNumber.replace("+", "")}`,
                },
              ].map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <article className="h-full rounded-[1.6rem] border border-white/10 bg-white/7 p-6 shadow-[0_26px_80px_rgba(0,0,0,0.2)] backdrop-blur-xl transition hover:border-[#D4AF37]/35">
                    <Icon className="h-6 w-6 text-[#D4AF37]" />
                    <h3 className="font-display mt-5 text-2xl font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#FAFAFA]/62">
                      {item.text}
                    </p>
                  </article>
                );

                return (
                  <Reveal key={item.title} delay={index * 0.04}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="block rounded-[1.6rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0B0B0B] px-5 py-12 text-[#FAFAFA] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/12">
                <ChefHat className="h-6 w-6 text-[#D4AF37]" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold">
                  King Of Spices
                </p>
                <p className="mt-1 text-xs font-semibold uppercase text-[#FAFAFA]/48">
                  Best Restaurant & Cafe in Khanna
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#FAFAFA]/56">
              Authentic food, warm ambience and cafe favourites for families,
              friends and celebrations in GTB Market, Khanna.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase text-[#D4AF37]">
              Quick links
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#FAFAFA]/58 transition hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase text-[#D4AF37]">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-[#FAFAFA]/58">
              <p>{displayPhone}</p>
              <p>{address}</p>
              <p>Open daily, 11 AM - 11 PM</p>
            </div>
            <div className="mt-5 flex gap-3">
              {[
                { label: "Call", icon: Phone, href: `tel:${phoneNumber}` },
                {
                  label: "WhatsApp",
                  icon: MessageCircle,
                  href: `https://wa.me/${phoneNumber.replace("+", "")}`,
                },
                {
                  label: "Directions",
                  icon: Navigation,
                  href: "https://www.google.com/maps/search/?api=1&query=King%20Of%20Spices%20GTB%20Market%20Khanna%20Punjab",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={item.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/8 text-[#FAFAFA] transition hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/12 hover:text-[#D4AF37] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="gold-divider mx-auto my-8 max-w-7xl" />
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#FAFAFA]/42 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright © {new Date().getFullYear()} King Of Spices. All rights
            reserved.
          </p>
          <p>Designed as a premium sample website for client presentation.</p>
        </div>
      </footer>
    </main>
  );
}
