import Link from "next/link";

export const Navbar = ({ className }) => {
  return (
    <nav>
      <div
        className={`flex flex-row justify-start items-end font-lighter pb-3 pt-2 ${className}`}
      >
        <div>
          <Link href="/">
            <img
              src="https://res-1.cloudinary.com/cloudinary/image/asset/dpr_2.0/logo-e0df892053afd966cc0bfe047ba93ca4.png"
              width={172}
              height={38}
              alt="logo"
            />
          </Link>
        </div>
        <h1
          className="capitalize text-blue-deep relative top-2 ml-3"
          style={{ fontSize: 26 }}
        >
          Product personalization demo
        </h1>
      </div>
    </nav>
  );
};
