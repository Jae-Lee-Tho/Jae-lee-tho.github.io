import { contactInfo } from '../data/contact'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="text-accent font-bold text-xl">JL.</span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          Building intelligent systems at the intersection of robotics and software.
        </p>
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} {contactInfo.name} | Built with React &amp; Tailwind
        </p>
      </div>
    </footer>
  )
}
