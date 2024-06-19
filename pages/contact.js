// pages/contact.js
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      <main>
        <h1>Contact</h1>
        <p>Get in touch...</p>
      </main>
      <style jsx>{`
        .container {
          background-color: #0a0a0a;
          color: white;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
