import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = Product;

export default function ProductCard({
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <article className="flex w-full flex-col rounded-3xl bg-white p-4 shadow-sm">
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={image}
          alt={title}
          width={600}
          height={600}
          className="h-full w-full object-contain p-5"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold leading-snug lowercase text-slate-900">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mt-4 flex flex-col items-start">
        <p className="text-sm text-slate-800">{price.toLocaleString("ru-RU")} ₽</p>
        <button
          type="button"
          aria-label={`Добавить товар «${title}» в корзину`}
          className="mt-4 rounded-full bg-blue-950 px-6 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
        >
          в корзину
        </button>
      </div>
    </article>
  );
}
