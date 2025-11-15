import { useState } from "react";

import ProfileCard from "@/components/ProfileCard";
import ProductsTable from "@/components/ProductsTable";
import ProductFormModal from "@/components/ProductFormModal";
import {
  profile as initialProfile,
  products as initialProducts,
} from "@/mocks/mocks";
import type { Product } from "@/types";

export default function Dashboard() {
  const [items, setItems] = useState<Product[]>(initialProducts);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  function handleAdd() {
    setEditing(null);
    setOpen(true);
  }
  function handleEdit(p: Product) {
    setEditing(p);
    setOpen(true);
  }
  function handleRemove(id: string) {
    setItems((prev) => prev.filter((p) => p.id !== id));
  }
  function handleSubmit(p: Product) {
    setItems((prev) => {
      const exists = prev.some((x) => x.id === p.id);
      return exists ? prev.map((x) => (x.id === p.id ? p : x)) : [p, ...prev];
    });
  }

  return (
    <div className="min-h-dvh bg-neutral-50">
      <div className="mx-auto max-w-6xl px-3 md:px-4 py-4 md:py-6 space-y-4">
        <ProfileCard profile={initialProfile} />
        <ProductsTable
          items={items}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onRemove={handleRemove}
        />
      </div>

      <ProductFormModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={handleSubmit}
        initial={editing}
      />
    </div>
  );
}
