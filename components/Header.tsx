import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  return (
    <header className="bg-[#EDE4E0]">
      <div className="max-w-screen-xl w-full mx-auto">
        <nav className="px-4 py-2">
          <ul className="flex items-center gap-6 text-sm">
            <li
              className={`${
                router.pathname === "/" ? "underline decoration-2" : ""
              } mr-2 text-base`}
            >
              <Link href="/" className="">
                Homepage
              </Link>
            </li>
            <li
              className={`${
                router.pathname === "/about" ? "underline decoration-2" : ""
              } mr-2 text-base`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`${
                router.pathname === "/products" ? "underline decoration-2" : ""
              } mr-2 text-base`}
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              className={`${
                router.pathname === "/products-csr"
                  ? "underline decoration-2"
                  : ""
              } mr-2 text-base`}
            >
              <Link href="/products-csr">Products CSR</Link>
            </li>
            <li
              className={`${
                router.pathname === "/contact" ? "underline decoration-2" : ""
              } mr-2 text-base`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
