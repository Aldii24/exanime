const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-center text-2xl font-bold text-color-primary">{title}</div>
      </div>
    </>
  );
};

export default HeaderMenu;
