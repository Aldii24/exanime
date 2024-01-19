const PaginationSearch = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((nextpage) => nextpage + 1);
    scrollTop();
  };

  const handlePrevPage = () => {
    setPage((prevpage) => prevpage - 1);
    scrollTop();
  };

  return (
    <>
      <div className="p-8">
        <div className="flex gap-4 justify-center items-center py-2 md:text-xl text-md font-bold text-color-primary">
          {page > 1 ? (
            <button
              className="w-20 bg-color-papaya p-2 rounded-3xl text-center hover:text-color-dark transition-all"
              onClick={handlePrevPage}
            >
              Prev
            </button>
          ) : null}
          <p>
            {page} of {lastPage}
          </p>
          {page < lastPage ? (
            <button
              className="w-20 bg-color-papaya p-2 rounded-3xl text-center hover:text-color-dark transition-all"
              onClick={handleNextPage}
            >
              Next
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PaginationSearch;
