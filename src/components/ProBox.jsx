import { useState } from "react";

function ProBox({
  title,
  img,
  description,
  scrollY,
  cName,
}) {
  const [scroll, setScroll] = useState(false);
  return (
    <>
      <div className={`pro pro__1 ${cName}`}>
        <div className="pro__img">
            <img
              src={img}
              alt="website"
              style={{
                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                transition: "transform 10s ease-in-out",
              }}
              onMouseEnter={() => setScroll(true)}
              onMouseLeave={() => setScroll(false)}
            />
        </div>
        <div className="pro__text">
          <h3>
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProBox;
