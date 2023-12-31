import { redirect } from "next/navigation";
import prisma from "../../lib/db/prisma";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata = {
  title: "Add Product | Flowamazon",
};

async function addProduct(formData: FormData) {
  "use server";

  const name = formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing parameters");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    },
  });
  redirect("/");
}
export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold ">Add Product</h1>
      <form action={addProduct}>
        <input
          name="name"
          required
          placeholder="Name"
          className="input input-bordered mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered mb-3 w-full"
        />
        <input
          name="imageUrl"
          required
          placeholder="Image Url"
          className="input input-bordered mb-3 w-full"
        />
        <input
          name="price"
          required
          placeholder="Price"
          type="number"
          className="input input-bordered mb-3 w-full"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
