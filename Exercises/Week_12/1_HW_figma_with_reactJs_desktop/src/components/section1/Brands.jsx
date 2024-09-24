export const brands = [
  { id: 1, src: "logo1.svg" },
  { id: 2, src: "logo2.svg" },
  { id: 3, src: "logo3.svg" },
  { id: 4, src: "logo4.svg" },
  { id: 5, src: "logo5.svg" },
  { id: 6, src: "logo6.svg" },
  { id: 7, src: "logo7.svg" },
];

export default function Brands({ end }) {
  let nBrands;
  if (end) {
    nBrands = brands.slice(0, end);
  }else nBrands = brands;
  let brandsEl = nBrands.map((brand) => {
    return (
      <img
        key={brand.id}
        src={`./src/assets/section1/center/${brand.src}`}
        alt=""
      />
    );
  });
  return <div className="flex justify-between">{brandsEl}</div>;
}
