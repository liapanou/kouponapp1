export type Product = {
  name: string;
  price: number;
  src: string;
};

export function Card(props: Product) {
  return (
    <div className="card w-full bg-base-200 shadow-xl border border-base-100 ">
      <figure className="px-10 pt-10">
        <img src={props.src} alt="Shoes" className="rounded-xl w-full h-28" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-xs h-10">{props.name}</h2>
        <div className="card-actions">
          <button className="btn bg-base-100 btn-sm">
            {props.price}€ Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
