const componentDefaultStyles = {
  card: "bg-white w-64 min-h-fit rounded-xl shadow shadow-black/50 overflow-hidden",
  image: "w-full",
  name: "font-medium text-lg tracking-wide",
  description: "text-sm",
};

type CardProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  src?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`${className} ${componentDefaultStyles.card}`}
      role='listitem'
    >
      {children}
    </div>
  );
};

Card.Name = ({ children, className }: CardProps) => {
  return (
    <p className={`${className} ${componentDefaultStyles.name}`}>{children}</p>
  );
};

Card.Description = ({ children, className }: CardProps) => {
  return (
    <p className={`${className} ${componentDefaultStyles.description}`}>
      {children}
    </p>
  );
};

Card.Image = ({
  alt,
  src,
  className,
}: Omit<CardProps, "children"> & { alt: string }) => {
  return (
    <img
      src={src}
      className={`${className} ${componentDefaultStyles.image}`}
      alt={alt}
    />
  );
};

export default Card;
