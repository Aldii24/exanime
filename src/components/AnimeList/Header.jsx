const { default: Link } = require("next/link");

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <>
      <div className="flex justify-between pt-8 p-4">
        <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
        {linkHref && linkTitle ? (
          <Link
            className="md:text-xl text-md font-bold text-color-primary underline transition-all hover:text-color-papaya"
            href={linkHref}
          >
            {linkTitle}
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
