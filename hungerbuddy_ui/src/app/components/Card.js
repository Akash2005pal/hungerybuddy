import styles from "./card.module.css"

export default function OfferCards() {
  const offers = [
    {
      title: "AIR PURIFIERS",
      discount: "70%",
      subtitle: "Winter Specials",
      img: "/images/thali.png", // change path to your real image
    },
    {
      title: "BODY LOTIONS",
      discount: "55%",
      subtitle: "Self Care & More",
      img: "/images/body.png",
    },
    {
      title: "RICE",
      discount: "35%",
      subtitle: "Kitchen Essentials",
      img: "/images/rice.png",
    },
  ];

  return (
    <div className={styles.container}>
      {offers.map((offer, index) => (
        <div key={index} className={styles.card}>
          <h3 className={styles.title}>{offer.title}</h3>
          <p className={styles.discount}>
            UP TO <span>{offer.discount}</span> OFF
          </p>
          <img src={offer.img} alt={offer.title} className={styles.image} />
          <p className={styles.subtitle}>{offer.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
