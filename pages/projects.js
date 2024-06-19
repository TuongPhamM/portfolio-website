// pages/projects.js
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container">
      <main>
        <h1>Projects</h1>
        <p>Here are some of my projects...</p>
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
