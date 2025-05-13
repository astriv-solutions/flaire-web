import clsx from 'clsx';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import PixelCard from '../PixelCard';
import { IPricing } from '@/types';

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;

  return (
    <PixelCard
      variant="orange"
      className="w-full max-w-md mx-auto lg:max-w-xl lg:h-[550px] lg:w-[350px] shadow-xl"
    >
      <div className="absolute inset-0 flex flex-col">
        <div className="p-6 rounded-t-xl">
          <h3 className="font-funnel text-2xl font-semibold mb-4">{name}</h3>
          <p className="text-3xl md:text-5xl font-bold mb-6">
            <span className={clsx({ 'text-secondary': highlight })}>
              {typeof price === 'number' ? `$${price}` : price}
            </span>
            {typeof price === 'number' && (
              <span className="text-lg font-normal text-gray-600">/mo</span>
            )}
          </p>
          <button
            className={clsx(
              'w-full py-3 px-4 rounded-full transition-colors backdrop-blur-md bg-white/10 border border-gray-100 shadow',
              {
                'bg-primary/50 hover:bg-primary-accent': highlight,
                'bg-white/10 hover:bg-primary-accent': !highlight,
              }
            )}
          >
            Get Started
          </button>
        </div>
        <div className="p-6 mt-1 flex-1 flex flex-col">
          <p className="font-bold mb-0">FEATURES</p>
          <p className="text-foreground-accent mb-5">Everything in basic, plus...</p>
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <BsFillCheckCircleFill className="h-5 w-5 text-secondary mr-2" />
                <span className="text-foreground-accent">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PixelCard>
  );
};

export default PricingColumn;
