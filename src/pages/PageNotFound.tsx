import ActionButton from "../components/ActionButton";

const PageNotFound = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <h2 className="text-3xl text-center">404 Page Not Found</h2>
      <ActionButton title="Home Page" route="/" />
    </div>
  );
};

export default PageNotFound;
