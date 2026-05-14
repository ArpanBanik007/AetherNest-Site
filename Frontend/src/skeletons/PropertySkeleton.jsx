import { motion } from 'framer-motion';

const PropertySkeleton = () => {
  return (
    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl shadow-black/5 animate-pulse">
      <div className="h-64 bg-gray-200 relative" />
      <div className="p-8">
        <div className="h-6 bg-gray-200 rounded-lg w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded-lg w-1/2 mb-6" />
        <div className="flex justify-between items-center pt-6 border-t border-gray-50">
          <div className="h-6 bg-gray-200 rounded-lg w-1/4" />
          <div className="h-4 bg-gray-200 rounded-lg w-1/4" />
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
