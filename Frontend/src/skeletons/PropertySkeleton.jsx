import { Skeleton } from '../components/common/UI';

const PropertySkeleton = () => {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5">
      <Skeleton className="h-64 rounded-none" />
      <div className="p-8">
        <Skeleton className="h-7 w-3/4 mb-3" />
        <Skeleton className="h-4 w-1/2 mb-8" />
        <div className="flex justify-between items-center pt-6 border-t border-gray-50">
          <Skeleton className="h-8 w-1/3" />
          <Skeleton className="h-5 w-1/4" />
        </div>
      </div>
    </div>
  );
};

export const PropertyListSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array(count).fill(0).map((_, i) => (
        <PropertySkeleton key={i} />
      ))}
    </div>
  );
};

export default PropertySkeleton;

