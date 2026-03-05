import React from "react";
import GalleryTemplate from "../../components/gallerytemplate/GalleryTemplate";
import { galleryItems, getGalleryItemById } from "../../data/galleryData";

export default function GalleryDetailPage({ item }) {
  if (!item) return <div style={{ padding: "8rem 2rem" }}>Not found.</div>;
  return <GalleryTemplate item={item} />;
}

export async function getStaticPaths() {
  return {
    paths: galleryItems.map((item) => ({ params: { id: item.id } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const item = getGalleryItemById(params.id) || null;
  return { props: { item } };
}
