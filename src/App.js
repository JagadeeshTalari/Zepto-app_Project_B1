import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import DealsOfTheDay from "./Components/DealsOfTheDay";
import ExploreByCategories from "./Components/ExploreByCategories";
import ExploreByNewCategories from "./Components/ExploreByNewCategories";
import Navbar from "./Components/Navbar/Navbar";
import FruitsAndVeg from "./Components/FruitsAndVeg";
import Home from "./Pages/Home";

const exploreNewCategories = [
  {
    id: "1",
    routePath: "/fruits&vegetables",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/ec9d33cc-775c-4fd8-a817-fd2f0327f4f2-NC_Kneeds.png",
  },
  {
    id: "2",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/420e08b5-09a7-4143-b186-08226face17f-NC_Fit.png",
  },
  {
    id: "3",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/6c5cfd45-5e0d-444f-ab20-441e29b2001a-NC_Gift.png",
  },
  {
    id: "4",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/c91e8ffd-5521-4368-949b-5fef296130f6-NC_Pet.png",
  },
  {
    id: "5",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/394e60aa-460f-4679-aabc-69d9adb24134-NC_Beauty.png",
  },
  {
    id: "6",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/4e0dfedb-0a78-4e95-9a84-b0b4bcdee4af-NC_Baby.png",
  },
  {
    id: "7",
    imagePath:
      "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/9a357434-6a7f-465e-9b6b-bc41bf302a96-NC_Org.png",
  },
  // {
  //   id: "8",
  //   imagePath:
  //     "https://cdn.zeptonow.com/production///tr:w-160,ar-282-354,pr-true,f-webp,q-80/inventory/banner/4569615f-baf4-4eda-83bf-0745996f6771-NC_Party.png",
  // },
];

// ===========================
//         large Images (Delightful Treats & Big Savings)
// ===========================
// {
//   id: "9",
//   imagePath:
//     "https://cdn.zeptonow.com/production///tr:w-981,ar-981-342,pr-true,f-webp,q-80/inventory/banner/715dd597-6c43-47e9-9f04-4bee94f8c6de-Premium_Promo_Sponsored.png",
// },
// {
//   id: "10",
//   imagePath:
//     "https://cdn.zeptonow.com/production///tr:w-1039,ar-1039-633,pr-true,f-webp,q-80/inventory/banner/5c3eecd1-8089-43a0-af2b-0226296a426c-HUL_Header.png",
// },

function App() {
  return (
    <div>
      {/* <img src={data[0].imagePath} alt="" />
      <img src={data[1].imagePath} alt="" />
      <img src={data[2].imagePath} alt="" />
      <img src={data[3].imagePath} alt="" />
      <img src={data[4].imagePath} alt="" />
      <img src={data[5].imagePath} alt="" />
      <img src={data[6].imagePath} alt="" />
      <img src={data[7].imagePath} alt="" />
      <img src={data[8].imagePath} alt="" />
      <img src={data[9].imagePath} alt="" />
      <img src={data[10].imagePath} alt="" /> */}

      {/* ------------------------------------------------------ */}
      {/*                  Explore By Categories                 */}
      {/* ------------------------------------------------------ */}

      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fruits&veg" element={<FruitsAndVeg />}></Route>
        </Routes> */}
      </BrowserRouter>
      {/* ------------------------------------------------------ */}
      {/*                  Explore By Categories                 */}
      {/* ------------------------------------------------------ */}
      {/* <ExploreByCategories exploreByCategories={exploreByCategories} /> */}
      {/* ------------------------------------------------------ */}
      {/*              Explore By New Categories                 */}
      {/* ------------------------------------------------------ */}
      {/* <ExploreByNewCategories exploreNewCategories={exploreNewCategories} /> */}
      {/* ------------------------------------------------------ */}
      {/*     large Images (Delightful Treats & Big Savings)     */}
      {/* ------------------------------------------------------ */}
      {/* <div>
        <img
          src="https://cdn.zeptonow.com/production///tr:w-981,ar-981-342,pr-true,f-webp,q-80/inventory/banner/715dd597-6c43-47e9-9f04-4bee94f8c6de-Premium_Promo_Sponsored.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="https://cdn.zeptonow.com/production///tr:w-1039,ar-1039-633,pr-true,f-webp,q-80/inventory/banner/5c3eecd1-8089-43a0-af2b-0226296a426c-HUL_Header.png"
          alt=""
        />
      </div> */}

      {/* ------------------------------------------------------ */}
      {/*                    Deals of the Day                    */}
      {/* ------------------------------------------------------ */}

      {/* <DealsOfTheDay /> */}
      {/* ------------------------------------------------------ */}
      {/*                   Offers - 3 images                    */}
      {/* ------------------------------------------------------ */}

      {/* <div>
        <img
          src="https://cdn.zeptonow.com/production///tr:w-954,ar-954-270,pr-true,f-webp,q-80/inventory/banner/f0dd0b55-022a-486b-a74b-0637dfea9129-Multiple-Thin-Banner_(1).png"
          alt=""
        />
        <img
          src="https://cdn.zeptonow.com/production///tr:w-954,ar-954-270,pr-true,f-webp,q-80/inventory/banner/dbae4dcd-2d27-4f54-a6aa-d7826f9f2ce9-Multiple-Thin-Banner_(10).png"
          alt=""
        />
        <img
          src="https://cdn.zeptonow.com/production///tr:w-954,ar-954-270,pr-true,f-webp,q-80/inventory/banner/2236bf50-3610-478c-b7b0-e6c34f043916-Multiple_Thin_Banner.png"
          alt=""
        />
      </div> */}

      {/* ------------------------------------------------------ */}
      {/*                Your Pleasure Essentials                */}
      {/* ------------------------------------------------------ */}
      {/* <div>
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
      </div> */}
    </div>
  );
}

export default App;
