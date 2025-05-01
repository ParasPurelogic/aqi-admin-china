import ShowLoader from "@/components/misc/ShowLoader";

const loading = () => {
  return (
    <div className="page-loader p-body-padding w-full h-full">
      <ShowLoader className="w-full h-full bg-white rounded-body" />
    </div>
  );
};

export default loading;
