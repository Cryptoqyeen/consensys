import "./index.css";

export default function Navbar() {
  return (
    <header className="header fixed top-0 w-full flex-center">
      <nav className="px-8 py-3 w-full navbar flex items-center justify-between md:flex-row flex-col">
        <span className="flex-center gap-1">
          <img
            src="/assets/consensys.svg"
            alt="ConsensysAI"
            className="nav-logo"
          />
          <span className="beta-span p-1 flex-center">Beta</span>
        </span>
        <div className="flex-center gap-3">
          <a href="#roadmap" className="roadmap-btn-wrap p-2" role="button">
            Roadmap
          </a>
          <a href="#" className="" role="button">
            Presale
          </a>
          <a
            href="https://bscscan.com/token/0xad67b1583086b44837cdf3750d5661e90a6b2cab"
            className=""
            role="button"
            target="_blank"
          >
            Contract
          </a>
        </div>
      </nav>
    </header>
  );
}
