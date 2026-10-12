import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-14">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            коллекция для дома
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Керамика с характером
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Простые формы, приятные детали и вещи, которыми хочется пользоваться каждый день.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            className="w-full rounded-full bg-blue-950 px-10 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 sm:w-auto"
          >
            смотреть всю коллекцию
          </button>
        </div>
      </section>
    </main>
  );
}
