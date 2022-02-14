import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

const propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

const List = ({ products }) => (
  <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
      >
        <div className="flex h-full">
          <div className="md:flex h-full">
            <Image
              className="object-cover"
              layout="fixed"
              width={200}
              height={230}
              src={product.coverImage}
              alt={product.title}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {product.type}
            </div>
            <Link href={`products/${product.slug}`}>
              <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline cursor-pointer">
                {product.title}
              </p>
            </Link>
            <p className="mt-2 text-gray-500">{product.description}</p>
          </div>
        </div>
      </div>
    ))}
  </section>
);
List.propTypes = propTypes;
List.defaultProps = {
  products: [],
};
export default List;
