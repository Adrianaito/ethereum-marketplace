import React from "react";
import PropType from "prop-types";

import { Hero, Keypoints, Topics } from "components/ui/course";
import { Modal } from "components/ui/common";
import { BaseLayout } from "components/ui/layout";
import getAllProducts from "content/products/fetcher";

const propTypes = {
  title: PropType.string,
  description: PropType.string,
  coverImage: PropType.string,
  wsl: PropType.arrayOf(PropType.string),
};

const Product = ({ title, description, coverImage, wsl }) => (
  <div>
    {title}
    <div className="py-4">
      <Hero title={title} description={description} image={coverImage} />
    </div>
    <Keypoints points={wsl} />
    <Topics locked />
    <Modal />
  </div>
);

export function getStaticPaths() {
  const { data } = getAllProducts();

  return {
    paths: data.map((product) => ({
      params: { slug: product.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  const { data } = getAllProducts();
  const product = data.filter((c) => c.slug === params.slug)[0];
  return {
    props: product,
  };
}

Product.propTypes = propTypes;

Product.defaultProps = {
  title: "",
  description: "",
  coverImage: "",
  wsl: [],
};
Product.Layout = BaseLayout;
export default Product;
