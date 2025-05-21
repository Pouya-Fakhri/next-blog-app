import axios from "axios";
import Link from "next/link";

async function CategoryList() {
  const respons = await axios
    .get("http://localhost:5000/api/category/list")
    .then(({ data }) => data);
  const {data: { categories }} = await respons

  console.log(categories);

  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CategoryList;
