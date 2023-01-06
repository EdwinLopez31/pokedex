import Loading from "components/loading";
import { useRef } from "react";
const componentDefaultStyles = {
  card: "bg-white w-64 min-h-fit rounded-xl shadow shadow-black/50 overflow-hidden",
  image: "w-full hidden",
  name: "font-medium text-lg tracking-wide",
  description: "text-sm",
};

type CardProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  src?: string;
  role?: string;
};

const Card = ({ children, className, role = "listitem" }: CardProps) => {
  return (
    <div className={`${className} ${componentDefaultStyles.card}`} role={role}>
      {children}
    </div>
  );
};

Card.Name = ({ children, className, role }: CardProps) => {
  return (
    <p role={role} className={`${className} ${componentDefaultStyles.name}`}>
      {children}
    </p>
  );
};

Card.Description = ({ children, className, role }: CardProps) => {
  return (
    <p
      role={role}
      className={`${className} ${componentDefaultStyles.description}`}
    >
      {children}
    </p>
  );
};

Card.Image = ({
  alt,
  src,
  className,
}: Omit<CardProps, "children"> & { alt: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <img
        ref={imgRef}
        src={src}
        className={`${className ? className : ""} ${
          componentDefaultStyles.image
        }`}
        alt={alt}
        onLoad={() => {
          loaderRef.current!.classList.add("hidden");
          imgRef.current!.classList.remove("hidden");
        }}
      />
      <div ref={loaderRef} className='grid place-content-center w-64 h-64'>
        <Loading className='mx-auto' />
      </div>
    </>
  );
};

export default Card;
