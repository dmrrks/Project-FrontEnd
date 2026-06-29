interface SectionDividerProps {
  fillColor?: string;
  bgColor?: string;
  invert?: boolean;
}

const SectionDivider = ({ fillColor = 'fill-white', bgColor = 'bg-transparent', invert = false }: SectionDividerProps) => {
  return (
    <div className={`w-full overflow-hidden leading-none ${bgColor} ${invert ? 'rotate-180' : ''}`}>
      <svg
        className={`relative block w-full h-12 sm:h-16 md:h-24 ${fillColor}`}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 74"
      >
        <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,40C960,37,1056,43,1152,42.7C1248,43,1344,37,1392,34.7L1440,32L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"></path>
      </svg>
    </div>
  );
};

export default SectionDivider;
