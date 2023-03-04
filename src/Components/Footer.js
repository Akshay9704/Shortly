import Facebook from "../images/icon-facebook.svg";
import Twitter from "../images/icon-twitter.svg";
import Pinterest from "../images/icon-pinterest.svg";
import Instagram from "../images/icon-instagram.svg";
import logo from "../images/footer-logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="bg-slate-800 py-10 lg:py-20">
        <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <article>
            <img src={logo} alt="" />
          </article>

          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Features
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm">
                  Link Shortening
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">
                  Branded Links
                </button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">Analytics</button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Resources
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm">Blog</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">Developers</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">Support</button>
              </li>
            </ul>
          </article>
          <article>
            <h3 className="text-white text-lg font-bold tracking-wide">
              Company
            </h3>
            <ul>
              <li>
                <button className="text-slate-200 text-sm">About</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">Our Team</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">Careers</button>
              </li>
              <li>
                <button className="text-slate-200 text-sm">Contact</button>
              </li>
            </ul>
          </article>
          <article>
            <ul className="flex items-center">
              <li>
                <img src={Facebook} alt="" />
              </li>
              <li className="ml-4">
                <img src={Twitter} alt="" />
              </li>
              <li className="mx-5">
                <img src={Pinterest} alt="" />
              </li>
              <li>
                <img src={Instagram} alt="" />
              </li>
            </ul>
          </article>
        </div>
      </footer>
    </>
  );
}
