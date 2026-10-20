import React, { useRef } from "react";
import "./AgriBestDeals.css";

const agriDeals = [
  {
    id: 1,
    name: "Nitrogen Fertilizer - 50kg Bag",
    price: "₹1200",
    image:
"https://th.bing.com/th/id/OSK.TMLNxeo7UH1SNT3mSOzd6-PtF9kkA7cGEuSCSYHn_mcOLog?w=168&h=250&c=4&rs=1&qlt=80&o=6&cb=thwsc4&dpr=1.3&pid=SANGAM"  },
  {
    id: 2,
    name: "Hybrid Corn Seeds Pack",
    price: "₹450",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Organic Pesticide Spray Bottle",
    price: "₹350",
    image:
      "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Handheld Hoe Tool",
    price: "₹800",
    image:
      "https://images.unsplash.com/photo-1585079540467-9bcf463e9ca8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Farm Gloves Pair",
    price: "₹150",
    image:
      "https://images.unsplash.com/photo-1579710752600-cac2ee733a96?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Potato Seeds Pack",
    price: "₹300",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Tractor Oil 5L",
    price: "₹2200",
    image:
      "https://images.unsplash.com/photo-1517971071642-2d5a7cc2132f?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Water Sprinkler",
    price: "₹1250",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
];

export default function AgriBestDeals() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <div className="agri-deals-full-container">
      <div className="header-slider">
        <h2>आज के बेस्ट डील्स (Agriculture Shop)</h2>
        <a href="/all-deals" className="show-all-link">
          Show All &gt;
        </a>
      </div>

      <div className="slider-wrapper">
        <button
          className="slider-btn left-btn"
          onClick={scrollLeft}
          aria-label="Scroll Left"
        >
          &#10094;
        </button>

        <div className="slider" ref={sliderRef}>
          {agriDeals.map((deal) => (
            <div className="card" key={deal.id} title={deal.name}>
              <img src={deal.image} alt={deal.name} />
              <div className="info">
                <p className="name">
                  {deal.name.length > 30
                    ? deal.name.slice(0, 27) + "..."
                    : deal.name}
                </p>
                <p className="price">{deal.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-btn right-btn"
          onClick={scrollRight}
          aria-label="Scroll Right"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
