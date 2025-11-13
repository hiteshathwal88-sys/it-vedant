import React from "react";
import "./History.css";

function History() {
  return (
    <div className="history-container">
      <h2>🎓 History of Children’s Day 🎓</h2>

      {/* Online image of Pandit Jawaharlal Nehru */}
      <img
        className="nehru-image"
        src="src/images/WhatsApp Image 2025-11-10 at 13.04.05_3ba34eee.jpg"
        alt="Pandit Jawaharlal Nehru"
      />

      <p className="history-text">
        Children’s Day is celebrated every year on <b>November 14</b> in India
        to honor the birthday of <b>Pandit Jawaharlal Nehru</b>, the first Prime
        Minister of India. Nehru was deeply fond of children and believed they
        were the real strength of the nation. Children affectionately called him
        <i> “Chacha Nehru.”</i>
      </p>

      <p className="history-text">
        He always emphasized the importance of providing education and equal
        opportunities to every child so they could grow into responsible and
        enlightened citizens. His vision for modern India included nurturing
        young minds with love, care, and curiosity.
      </p>

      <p className="history-text">
        Since his passing in 1964, November 14 has been celebrated across
        schools and communities in India with joy, cultural programs, and
        awareness about child rights and education. 🌈
      </p>
    </div>
  );
}

export default History;
