// components/Banner.tsx

type BannerProps = {
  title: string;
  subtitle?: string; // ✅ allow optional subtitle
};

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-custom-lintingGreenDark p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <h1 className="text-white font-bold text-2xl sm:text-3xl">{title}</h1>

          {subtitle && (
            <p className="text-white text-sm sm:text-base mt-1 max-w-4xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
