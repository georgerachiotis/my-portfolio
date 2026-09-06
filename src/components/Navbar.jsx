import { useRef, useState } from 'react';
import { navigation } from '../data/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      setOpen(false);
      toggle.current?.focus();
    }
  }

  return (
    <nav className="nav" aria-label="Main navigation" onKeyDown={handleKeyDown}>
      <div className="container navInner">
        <a className="brand" href="#home" aria-label="Georgios Rachiotis, home"
          onClick={() => setOpen(false)}>GR<span>.</span></a>
        <button ref={toggle} className="menuToggle btn" type="button"
          aria-expanded={open} aria-controls="navigation-links"
          onClick={() => setOpen(!open)}>
          {open ? 'Close' : 'Menu'}
          <span aria-hidden="true">{open ? '×' : '+'}</span>
        </button>
        <div id="navigation-links" className={'navLinks' + (open ? ' isOpen' : '')}>
          {navigation.map((label) => (
            <a key={label} href={'#' + label.toLowerCase()} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}