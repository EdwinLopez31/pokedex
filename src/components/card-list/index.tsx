type CardListProps = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

const CardList = ({ children, className }: CardListProps) => {
  return (
    <div className={className} role='list'>
      {children}
    </div>
  );
};

export default CardList;
