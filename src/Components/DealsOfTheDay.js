import React from "react";

const dealsOfTheDay = [
  {
    id: "1",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-225-225,pr-true,f-webp,q-80/inventory/product/ee12cb22-b49f-4c47-a05a-894dd180c5f1-Photo.jpeg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "2",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-6000-4000,pr-true,f-webp,q-80/inventory/product/15e035b2-c905-4591-b21a-7b68fffa0c22-shutterstock_2101586152.jpg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "3",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1000-1000,pr-true,f-webp,q-80/inventory/product/0633340f-e857-4546-8179-79a29f50e642-c68d7d36-9b64-4960-af19-77cfae7e4fca.jpeg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "4",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-612-408,pr-true,f-webp,q-80/inventory/product/9359e4b0-2183-4b3d-953f-0e4dbac5debc-shutterstock_1721163883-removebg-preview.png",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "5",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-4442-3046,pr-true,f-webp,q-80/inventory/product/87a9e93e-50e2-4c2e-9925-83ee90ed8906-pear_imported.jpg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "6",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-1024-1024,pr-true,f-webp,q-80/inventory/product/c7085783-893e-4757-8727-f86b83b85731-4d5b253b-d85d-4187-90e1-1b53f71c2137.jpeg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "7",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-3760-2848,pr-true,f-webp,q-80/inventory/product/1499a774-c3d9-4a8b-8d98-140a1aa4b14e-shutterstock_1871193754.jpg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "8",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-500-500,pr-true,f-webp,q-80/inventory/product/4ca05bd5-bdfe-4ce5-822e-654cd4ac5880-1f8dd928-5707-4a83-871f-27c0f0d85d23.jpeg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "9",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-425-425,pr-true,f-webp,q-80/inventory/product/30361e9f-94db-4d55-9762-5cefe7c6abd3-image_file.jpeg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
  {
    id: "10",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-200,ar-400-300,pr-true,f-webp,q-80/inventory/product/f271181d-69b8-4b7a-ab47-814e0b23c63c-48187d8c-9a64-4e60-82a9-4917ce05d9ff.jpeg",
    itemName: "Cherry Indian",
    weight: "250g",
    delPrice: "₹359",
    actualPrice: "₹299",
  },
];

function DealsOfTheDay() {
  return (
    <div>
      <div>
        <h3>Deals Of The Day</h3>
        <section
          className="cards-section"
          style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
        >
          {dealsOfTheDay.map((deal) => {
            return (
              <div className="card">
                <div>
                  <img src={deal.imagePath} alt="" />
                </div>
                <h3>{deal.itemName}</h3>
                <p>{deal.weight}</p>
                <div style={{ display: "flex", height: "40px" }}>
                  <div>
                    <del>{deal.delPrice}</del>
                    <p>{deal.actualPrice}</p>
                  </div>
                  <button>Add</button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default DealsOfTheDay;
