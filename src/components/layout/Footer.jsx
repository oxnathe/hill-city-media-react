import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--hill-black)] px-5 pb-8 pt-20 text-white md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-oswald text-5xl font-bold uppercase leading-none md:text-7xl">
              Hill{" "}
              <span className="text-[var(--hill-red)]">
                City.
              </span>
            </p>

            <p className="font-poppins mt-6 max-w-md text-white/60">
              We create bold visual experiences that help ambitious brands
              stand out, connect and grow.
            </p>
          </div>

          <div>
            <h3 className="font-montserrat mb-5 text-sm font-bold uppercase tracking-widest text-[var(--hill-yellow)]">
              Navigate
            </h3>

            <div className="flex flex-col gap-3">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="font-montserrat text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-montserrat mb-5 text-sm font-bold uppercase tracking-widest text-[var(--hill-yellow)]">
              Let's Talk
            </h3>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-poppins text-lg"
            >
              Start a conversation
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6">
          <p className="font-montserrat text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}