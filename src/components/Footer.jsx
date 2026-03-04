export default function Footer() {
    return (
        <footer className="footer">
        <div className="container footerInner reveal">
            <p className="footerText">
            © {new Date().getFullYear()} Georgios Rachiotis
            </p>

            <div className="footerLinks">
            <button
                className="btn btnGhost"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                type="button"
            >
                Back to top ↑
            </button>
            </div>
        </div>
        </footer>
    );
}