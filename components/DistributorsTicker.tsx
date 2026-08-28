"use client";

/**
 * DistributorsTicker
 * Cinta turquesa que se desliza continuamente mostrando los logos
 * de los distribuidores que trabajan con Mr. Hyde.
 *
 * No requiere librerías externas — usa CSS puro (styled-jsx, incluido en Next.js).
 */

type Distributor = {
  name: string;
  logoUrl?: string; // si no hay logo, se muestra el nombre en texto
};

type Props = {
  distributors?: Distributor[];
  speedSeconds?: number; // qué tan rápido se desliza (menor = más rápido)
};

const DEFAULT_DISTRIBUTORS: Distributor[] = [
  { name: "Distribuidor 1" },
  { name: "Distribuidor 2" },
  { name: "Distribuidor 3" },
  { name: "Distribuidor 4" },
  { name: "Distribuidor 5" },
];

export default function DistributorsTicker({
  distributors = DEFAULT_DISTRIBUTORS,
  speedSeconds = 40,
}: Props) {
  // duplicamos la lista para que el loop sea infinito y sin "salto" visible
  const items = [...distributors, ...distributors];

  return (
    <div className="ticker-wrapper">
      <div className="ticker-track" style={{ animationDuration: `${speedSeconds}s` }}>
        {items.map((d, i) => (
          <div className="ticker-item" key={i}>
            {d.logoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={d.logoUrl} alt={d.name} className="ticker-logo" />
            ) : (
              <span className="ticker-name">{d.name}</span>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
          overflow: hidden;
          background-color: #5da58f; /* turquesa oficial de marca */
          transform: skewY(-2deg);
          padding: 8px 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }

        .ticker-track {
          display: flex;
          align-items: center;
          gap: 48px;
          width: max-content;
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 160px;
          transform: skewY(2deg); /* corrige la inclinación para que el logo quede recto */
          mix-blend-mode: multiply;
        }

        .ticker-logo {
          height: 105px;
          width: auto;
          object-fit: contain;
        }

        .ticker-name {
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
