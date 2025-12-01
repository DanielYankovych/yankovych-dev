import Image from "next/image";

export const TechStackBoxNew = ({ name, logo }) => {
  return (
    <div className="w-48 h-96 text-white relative overflow-hidden bg-dark cursor-pointer transition-transform duration-300">
      <div className="absolute z-10 inset-0 flex items-start justify-start p-3 text-lg">
        {name}
      </div>

      <Image
        src={logo}
        alt={name}
        width={110}
        height={110}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    </div>
  );
};
